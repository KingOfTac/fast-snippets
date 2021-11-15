import {
	TextEdit,
	Position,
	TextLine,
	TextDocument,
	workspace,
	EndOfLine
} from "vscode";

const { quoteStyle } = workspace.getConfiguration('fastSnippets');

export type ImportHandlerParams = [
	symbols: string[],
	source: string,
	isTypeImport: boolean,
]

export class ImportHandler {
	public symbols: string[] = new Array<string>();
	public source: string | null = null;
	public isModule: boolean = false;
	public isTypeImport: boolean = false;
	public importAlreadyExists: boolean = false;
	public needsUpdate: boolean = false;

	public static isValidModuleImport(text: string) {
		return (/import/.test(text) && /} from/.test(text));
	}

	constructor(private documentLine: TextLine | null, ...rest: any[]) {
		if (this.documentLine) {
			this.importAlreadyExists = true;
			this.parseRawText();
		} else {
			this.symbols = rest[0];
			this.source = rest[1];
			this.isTypeImport = rest[2];
		}
	}

	private parseRawText() {
		const rawText = this.documentLine!.text;
		this.isModule = (/import/.test(rawText) && /} from/.test(rawText));

		this.isTypeImport = /import type/.test(rawText);

		if (this.isModule) {
			this.source = rawText
				.split(/from ['|"]/)[1]
				.split(/['|"];/)[0];

			this.symbols = rawText
				.split(/{(.*?)}/)[1]
				.trim()
				.split(/[ ,]+/);
		}
	}

	public update(line: TextLine) {
		this.documentLine = line;
		this.parseRawText();
	}

	public updateSymbols(newSymbols: string[]) {
		const mergedSymbols = new Set([
			...this.symbols,
			...newSymbols
		]);

		this.symbols = Array.from(mergedSymbols);
	}

	public getImportText(
		document: TextDocument,
		numberOfLinesPending: number,
		currentLineNumber: number
	): TextEdit {
		if (this.importAlreadyExists) {
			return this.updateImport(document, numberOfLinesPending, currentLineNumber);
		} else {
			return this.createImport(document, numberOfLinesPending, currentLineNumber);
		}
	}

	private updateImport(
		document: TextDocument,
		numberOfLinesPending: number,
		currentLineNumber: number
	): TextEdit {
		const line = this.documentLine;
		const lineRange = line!.range;
		const importText = this.createImportText(
			(line as TextLine),
			document,
			numberOfLinesPending,
			currentLineNumber
		);

		return TextEdit.replace(lineRange, importText);
	}

	private createImport(
		document: TextDocument,
		numberOfLinesPending: number,
		currentLineNumber: number
	): TextEdit {
		const line = document.lineAt(0);
		const importText = this.createImportText(
			line,
			document,
			numberOfLinesPending,
			currentLineNumber
		);
		return TextEdit.insert(new Position(0, 0), importText);
	}

	private createImportText(
		line: TextLine,
		document: TextDocument,
		numberOfLinesPending: number,
		currentLineIndex: number
	): string {
		const isLastLine = line.lineNumber + 1 === document.lineCount;
		const isEmpty = line.isEmptyOrWhitespace;
		const isNextLineImport = !isLastLine && document.lineAt(line.lineNumber + 1).text.includes('import');
		const isNextLineEmpty = !isLastLine && document.lineAt(line.lineNumber + 1).isEmptyOrWhitespace;

		let eol: string = '';
		
		if (!this.importAlreadyExists) {
			eol = '\n';
	
			if (
				numberOfLinesPending === currentLineIndex && 
				((isNextLineEmpty && isNextLineImport) || document.lineCount === 1)
			) {
				eol = '\n\n';
			}
		}

		return `import ${
			this.isTypeImport ? 'type ' : ''
		}{ ${
			this.symbols.join(', ')
		} } from ${quoteStyle}${
			this.source
		}${quoteStyle};${eol}`;
	}
}