import { ImportHandler } from "./import-handler";
import { TextDocument } from "vscode";

export class DocumentImportManager extends Map<number, ImportHandler> {
	constructor() {
		super();
	}

	public parseDocument(document: TextDocument) {
		this.clear();
		let idx = 0
		while(idx < document.lineCount) {
			const currentLine = document.lineAt(idx);
			const key = currentLine.lineNumber;

			if (ImportHandler.isValidModuleImport(currentLine.text)) {
				if (this.has(key)) {
					const handler = this.get(key);
					handler?.update(currentLine);
				} else {
					this.set(key, new ImportHandler(currentLine));
				}
			}

			idx++;
		}
	}
}

export const importManager = new DocumentImportManager();