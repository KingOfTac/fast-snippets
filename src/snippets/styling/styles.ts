import { SnippetString, TextDocument, workspace } from "vscode";
import { DocumentImportManager } from "../../import-manager";
import { SnippetDefinition } from "../../snippet-definition";

const { quoteStyle } = workspace.getConfiguration('fastSnippets');

export function styles(manager: DocumentImportManager, document: TextDocument) {
	return new SnippetDefinition(
		manager,
		'FAST Styles',
		new SnippetString([
			'export const ${1:name}Styles = (context, definition) => css`',
			'\t${0}',
			'`;'
		].join('\n')),
		'abstract class ElementStyles',
		'Creates a FAST Element styles definition.',
		[
			{ symbols: ['css'], source: '@microsoft/fast-element', isTypeImport: false }
		]
	).getCompletionItem(document);
}