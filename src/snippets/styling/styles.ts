import { CompletionItemKind, SnippetString, workspace } from "vscode";
import { CompletionItemDefinition } from "../../completion-item-definition";

export const styles = new CompletionItemDefinition({
	label: 'FAST Styles',
	insertText: new SnippetString([
		'export const ${1:name}Styles = (context, definition) => css`',
		'\t${0}',
		'`;'
	].join('\n')),
	detail: 'abstract class ElementStyles',
	documentation: 'Creates a FAST Element styles definition.',
	kind: CompletionItemKind.Snippet,
	symbols: [
		{ name: 'css', package: '@microsoft/fast-element', packageId: 0 }
	]
});