import {
	CompletionItem,
	CompletionItemKind,
	SnippetString,
	TextDocument,
	TextEdit
} from "vscode";
import { DocumentImportManager } from './import-manager';
import { ImportHandler } from "./import-handler";


export type ImportDefinition = {
	symbols: string[];
	source: string;
	isTypeImport: boolean;
}

export class SnippetDefinition {
	private _completionItem: CompletionItem;
	private _importHandlers: ImportHandler[] = new Array<ImportHandler>();

	constructor(
		public importManager: DocumentImportManager,
		public label: string,
		public body: SnippetString,
		public detail: string,
		public documentation: string,
		public importDefinitions: ImportDefinition[],
		public kind: CompletionItemKind = CompletionItemKind.Snippet
	) {
		this._completionItem = new CompletionItem(label, kind);
		this._completionItem.insertText = body;
		this._completionItem.detail = detail;
		this._completionItem.documentation = documentation;

		const commonImports = this.importDefinitions.filter(obj => 
			[...importManager.values()].some(x => 
				x.source === obj.source &&
				x.isTypeImport === obj.isTypeImport &&
				(
					x.symbols.length === obj.symbols.length &&
					x.symbols.every((s, index) => s === obj.symbols[index])
				)
			)	
		);

		for (let def of importDefinitions) {
			if (!commonImports.includes(def)) {
				const check = this.checkArrays;
				const match = [...importManager.values()].find(x => 
					x.isTypeImport === def.isTypeImport &&
					x.source === def.source &&
					!check(x.symbols, def.symbols)
				);
				if (match) {
					const matchCopy = Object.create(match);
					matchCopy.needsUpdate = true;
					matchCopy.updateSymbols(def.symbols);
					this._importHandlers.push(matchCopy);
				} else {
					this._importHandlers.push(
						new ImportHandler(
							null,
							def.symbols,
							def.source,
							def.isTypeImport
						)
					);
				}
			}
		}
	}

	private checkArrays(arr1: Array<any>, arr2: Array<any>): boolean {
		return (
			arr1.length === arr2.length &&
			arr1.every((v, i) => v === arr2[i])
		);
	}

	public getCompletionItem(document: TextDocument) {
		this._completionItem.additionalTextEdits = new Array<TextEdit>();
		this._importHandlers.forEach((handler, idx) => {
			if (handler.needsUpdate || !handler.importAlreadyExists) {
				this._completionItem.additionalTextEdits?.push(
					handler.getImportText(document, this._importHandlers.length, idx + 1)
				);
			}
		});

		return this._completionItem;
	}
}