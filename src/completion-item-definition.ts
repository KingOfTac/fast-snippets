import {
	Command,
	workspace,
	CompletionItemKind,
	CompletionItemTag,
	MarkdownString,
	Range,
	SnippetString,
	TextEdit,
	CompletionItem,
	Position,
	TextLine
} from "vscode";

const {
	quoteStyle,
	generateImportsFromSymbols
} = workspace.getConfiguration('fastSnippets');

export type DocumentImport = {
	symbols: string[];
	fullText: string;
	line: TextLine,
	replace: boolean
}

export type PackageSymbol = {
	name: string;
	package: string;
	packageId: number;
}

export interface PartialCompletionItemDefinition {
	readonly label: string;

	readonly symbols?: PackageSymbol[];
	readonly command?: Command;
	readonly commitCharacters?: string[];
	readonly detail?: string;
	readonly documentation?: string | MarkdownString;
	readonly filterText?: string;
	readonly insertText?: string | SnippetString;
	readonly keepWhitespace?: boolean;
	readonly kind?: CompletionItemKind;
	readonly preselect?: boolean;
	readonly range?: Range | { inserting: Range, replacing: Range };
	readonly sortText?: string;
	readonly tags?: readonly CompletionItemTag[];
	readonly textEdit?: TextEdit;
}

export class CompletionItemDefinition {
	public symbols?: PackageSymbol[];
	private _completionItem: CompletionItem;

	public constructor(labelOrOptions: PartialCompletionItemDefinition | string) {
		if (typeof labelOrOptions === 'string') {
			labelOrOptions = { label: labelOrOptions };
		}

		this._completionItem = new CompletionItem(
			labelOrOptions.label,
			labelOrOptions.kind
		);

		this.symbols = labelOrOptions.symbols;
		this._completionItem.label = labelOrOptions.label;
		this._completionItem.command = labelOrOptions.command;
		this._completionItem.commitCharacters = labelOrOptions.commitCharacters;
		this._completionItem.detail = labelOrOptions.detail;
		this._completionItem.documentation = labelOrOptions.documentation;
		this._completionItem.filterText = labelOrOptions.filterText;
		this._completionItem.insertText = labelOrOptions.insertText;
		this._completionItem.keepWhitespace = labelOrOptions.keepWhitespace;
		this._completionItem.kind = labelOrOptions.kind;
		this._completionItem.preselect = labelOrOptions.preselect;
		this._completionItem.range = labelOrOptions.range;
		this._completionItem.sortText = labelOrOptions.sortText;
		this._completionItem.tags = labelOrOptions.tags;
		this._completionItem.textEdit = labelOrOptions.textEdit;
		this._completionItem.filterText = labelOrOptions.label;
	}

	// TODO: This mess should get cleaned up, but I don't have time and it works for now.
	private createImports(documentImports: Map<string, DocumentImport>): void {
		const symbols = this.symbols;

		if (generateImportsFromSymbols && symbols) {
			this._completionItem.additionalTextEdits = symbols!.reduce((acc: any[], obj) => {
					const prop = obj['packageId'];
					acc[prop] = acc[prop] || [];
					acc[prop].push(obj);
					return acc;
				}, [])
				.map((group, idx) => {
					let incomingSymbols = group.map((obj: PackageSymbol) => `${obj.name}`);

					if (documentImports.has(group[0].package)) {
						const existingImport: DocumentImport | undefined = 
							documentImports.get(group[0].package);

						const newSymbols: Set<string> = new Set([
							...existingImport!.symbols,
							...incomingSymbols
						]);

						const lineRange = existingImport!.line.range;
						
						return TextEdit.replace(lineRange, `import { ${
							Array.from(newSymbols).join(', ')
						} } from '${group[0].package}';`);
					} else {
						return TextEdit.insert(
							new Position(0, 0),
							`import { ${group
								.map((obj: PackageSymbol) => `${obj.name}`)
								.join(', ')} } from '${group[0].package}';\n\n`
						);
					}
				});
		}
	}

	public getCompletionItem(documentImports: Map<string, DocumentImport>): CompletionItem {
		this.createImports(documentImports);
		return this._completionItem;
	}
}