import { SnippetString, TextDocument, workspace } from "vscode";
import { DocumentImportManager } from "../../import-manager";
import { SnippetDefinition } from "../../snippet-definition";

const { quoteStyle } = workspace.getConfiguration('fastSnippets');

export function refDirective(manager: DocumentImportManager, document: TextDocument) {
	return new SnippetDefinition(
		manager,
		'Ref Directive',
		new SnippetString(`\${ref(${quoteStyle}\${0}${quoteStyle})}`),
		'abstract class HTMLDirective',
		'Creates a FAST ref directive inside an element template.',
		[
			{ symbols: ['ref'], source: '@microsoft/fast-element', isTypeImport: false }
		]
	).getCompletionItem(document);
}

export function whenDirective(manager: DocumentImportManager, document: TextDocument) {
	return new SnippetDefinition(
		manager,
		'When Directive',
		new SnippetString(`\${when(${quoteStyle}\${1}${quoteStyle}, \${0})}`),
		'abstract class HTMLDirective',
		'Creates a FAST when directive inside an element template.',
		[
			{ symbols: ['when'], source: '@microsoft/fast-element', isTypeImport: false }
		]
	).getCompletionItem(document);
}

export function repeatDirective(manager: DocumentImportManager, document: TextDocument) {
	return new SnippetDefinition(
		manager,
		'Repeat Directive',
		new SnippetString(`\${repeat(${quoteStyle}\${1}${quoteStyle}, \${0})}`),
		'abstract class HTMLDirective',
		'Creates a FAST repeat directive inside an element template.',
		[
			{ symbols: ['repeat'], source: '@microsoft/fast-element', isTypeImport: false }
		]
	).getCompletionItem(document);
}

export function childrenDirective(manager: DocumentImportManager, document: TextDocument) {
	return new SnippetDefinition(
		manager,
		'Children Directive',
		new SnippetString(`\${children(${quoteStyle}\${0}${quoteStyle})}`),
		'abstract class HTMLDirective',
		'Creates a FAST children directive inside an element template.',
		[
			{ symbols: ['children'], source: '@microsoft/fast-element', isTypeImport: false }
		]
	).getCompletionItem(document);
}

export function filteredChildrenDirective(manager: DocumentImportManager, document: TextDocument) {
	return new SnippetDefinition(
		manager,
		'Children Directive[filtered]',
		new SnippetString([
			'\${children(',
			`{ property: ${quoteStyle}\${1}${quoteStyle},`,
			` filter: \${2:filter_func}(${quoteStyle}\${0}${quoteStyle})`,
			' })}'
		].join('')),
		'abstract class HTMLDirective',
		'Creates a FAST children directive, with a filter function inside an element template.',
		[
			{ symbols: ['children'], source: '@microsoft/fast-element', isTypeImport: false }
		]
	).getCompletionItem(document);
}

export function slottedDirective(manager: DocumentImportManager, document: TextDocument) {
	return new SnippetDefinition(
		manager,
		'Slotted Directive',
		new SnippetString(`\${slotted(${quoteStyle}\${0}${quoteStyle})}`),
		'abstract class HTMLDirective',
		'Creates a FAST slotted directive inside an element template.',
		[
			{ symbols: ['slotted'], source: '@microsoft/fast-element', isTypeImport: false }
		]
	).getCompletionItem(document);
}

export function filteredSlottedDirective(manager: DocumentImportManager, document: TextDocument) {
	return new SnippetDefinition(
		manager,
		'Slotted Directive[filtered]',
		new SnippetString([
			'\${slotted(',
			`{ property: ${quoteStyle}\${1}${quoteStyle},`,
			` filter: \${2:filter_func}(${quoteStyle}\${0}${quoteStyle})`,
			' })}'
		].join('')),
		'abstract class HTMLDirective',
		'Creates a FAST slotted directive, with a filter function inside an element template.',
		[
			{ symbols: ['slotted'], source: '@microsoft/fast-element', isTypeImport: false }
		]
	).getCompletionItem(document);
}