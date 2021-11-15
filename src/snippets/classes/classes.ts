import { SnippetString, TextDocument, workspace } from "vscode";
import { DocumentImportManager } from "../../import-manager";
import { SnippetDefinition } from "../../snippet-definition";

const { quoteStyle } = workspace.getConfiguration('fastSnippets');

export function decoratedCustomElement(manager: DocumentImportManager, document: TextDocument) {
	return new SnippetDefinition(
		manager,
		'Custom Element[decorated]',
		new SnippetString([
			'@customElement({',
			'\tname: "${1:name}",',
			'\ttemplate: ${2:template},',
			'\tstyles: ${3:styles}',
			'})',
			'export class ${4:class_name} extends FASTElement {',
			'\t${0}',
			'}'
		].join('\n')),
		'class FASTElementDefinition<TType extends Function = Function>',
		'Creates a FAST CustomElement.',
		[
			{ symbols: ['customElement', 'FASTElement'], source: '@microsoft/fast-element', isTypeImport: false }
		]
	).getCompletionItem(document);
}

export function customElement(manager: DocumentImportManager, document: TextDocument) {
	return new SnippetDefinition(
		manager,
		'Custom Element',
		new SnippetString([
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
		'class FASTElementDefinition<TType extends Function = Function>',
		'Creates a FAST CustomElement.',
		[
			{ symbols: ['FASTElement'], source: '@microsoft/fast-element', isTypeImport: false }
		]
	).getCompletionItem(document);
}

export function foundationElement(manager: DocumentImportManager, document: TextDocument) {
	return new SnippetDefinition(
		manager,
		'Foundation Element',
		new SnippetString([
			'export class ${1:class_name} extends FoundationElement {',
			'\t${0}',
			'}',
		].join('\n')),
		'class FoundationElement extends FASTElement',
		'Creates a FAST foundation element.',
		[
			{ symbols: ['FoundationElement'], source: '@microsoft/fast-foundation', isTypeImport: false }
		]
	).getCompletionItem(document);
}