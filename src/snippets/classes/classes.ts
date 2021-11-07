import { CompletionItemKind, SnippetString, workspace } from "vscode";
import { CompletionItemDefinition } from "../../completion-item-definition";

export const decoratedCustomElement = new CompletionItemDefinition({
	label: 'Custom Element[decorated]',
	insertText: new SnippetString([
		'@customElement({',
		'\tname: "${1:name}",',
		'\ttemplate: ${2:template},',
		'\tstyles: ${3:styles}',
		'})',
		'export class ${4:class_name} extends FASTElement {',
		'\t${0}',
		'}'
	].join('\n')),
	detail: 'class FASTElementDefinition<TType extends Function = Function>',
	documentation: 'Creates a FAST CustomElement.',
	kind: CompletionItemKind.Snippet,
	symbols: [
		{ name: 'customElement', package: '@microsoft/fast-element', packageId: 0 },
		{ name: 'FASTElement', package: '@microsoft/fast-element', packageId: 0 }
	]
});

export const customElement = new CompletionItemDefinition({
	label: 'Custom Element',
	insertText: new SnippetString([
		'export class ${1:class_name} extends FASTElement {',
		'\tstatic definition = {',
		'\t\tname: "${2:name}",',
		'\t\ttemplate: ${3:template},',
		'\t\tstyles: ${4:styles},',
		'\t\tattributes: [',
		'\t\t\t',
		'\t\t]',
		'\t}',
		'\t${0}',
		'}'
	].join('\n')),
	detail: 'class FASTElementDefinition<TType extends Function = Function>',
	documentation: 'Creates a FAST CustomElement.',
	kind: CompletionItemKind.Snippet,
	symbols: [
		{ name: 'FASTElement', package: '@microsoft/fast-element', packageId: 0 }
	]
});

export const foundationElement = new CompletionItemDefinition({
	label: 'Foundation Element',
	insertText: new SnippetString([
		'export class ${1:class_name} extends FoundationElement {',
		'\t${0}',
		'}',
	].join('\n')),
	detail: 'class FoundationElement extends FASTElement',
	documentation: 'Creates a FAST foundation element.',
	kind: CompletionItemKind.Snippet,
	symbols: [
		{ name: 'FoundationElement', package: '@microsoft/fast-foundation', packageId: 1 }
	]
});