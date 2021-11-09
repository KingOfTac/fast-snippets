import { CompletionItemKind, SnippetString, workspace } from "vscode";
import { CompletionItemDefinition } from "../../completion-item-definition";

const { quoteStyle } = workspace.getConfiguration('fastSnippets');

export const refDirective = new CompletionItemDefinition({
	label: 'Ref Directive',
	insertText: new SnippetString(`\${ref(${quoteStyle}\${0}${quoteStyle})}`),
	detail: 'abstract class HTMLDirective',
	documentation: 'Creates a FAST ref directive inside an element template.',
	kind: CompletionItemKind.Snippet,
	symbols: [
		{ name: 'ref', package: '@microsoft/fast-element', packageId: 0 }
	]
});

export const whenDirective = new CompletionItemDefinition({
	label: 'When Directive',
	insertText: new SnippetString(`\${when(${quoteStyle}\${1}${quoteStyle}, \${0})}`),
	detail: 'abstract class HTMLDirective',
	documentation: 'Creates a FAST when directive inside an element template.',
	kind: CompletionItemKind.Snippet,
	symbols: [
		{ name: 'when', package: '@microsoft/fast-element', packageId: 0 }
	]
});

export const repeatDirective = new CompletionItemDefinition({
	label: 'Repeat Directive',
	insertText: new SnippetString(`\${repeat(${quoteStyle}\${1}${quoteStyle}, \${0})}`),
	detail: 'abstract class HTMLDirective',
	documentation: 'Creates a FAST repeat directive inside an element template.',
	kind: CompletionItemKind.Snippet,
	symbols: [
		{ name: 'repeat', package: '@microsoft/fast-element', packageId: 0 }
	]
});

export const childrenDirective = new CompletionItemDefinition({
	label: 'Children Directive',
	insertText: new SnippetString(`\${children(${quoteStyle}\${1}${quoteStyle})}`),
	detail: 'abstract class HTMLDirective',
	documentation: 'Creates a FAST children directive inside an element template.',
	kind: CompletionItemKind.Snippet,
	symbols: [
		{ name: 'repeat', package: '@microsoft/fast-element', packageId: 0 }
	]
});

export const filteredChildrenDirective = new CompletionItemDefinition({
	label: 'Children Directive[filtered]',
	insertText: new SnippetString([
		'\${children(',
		`{ property: ${quoteStyle}\${1}${quoteStyle},`,
		` filter: \${2:filter_func}(${quoteStyle}\${0}${quoteStyle})`,
		' })}'
	].join('')),
	detail: 'abstract class HTMLDirective',
	documentation: 'Creates a FAST children directive, with a filter function inside an element template.',
	kind: CompletionItemKind.Snippet,
	symbols: [
		{ name: 'children', package: '@microsoft/fast-element', packageId: 0 }
	]
});

export const slottedDirective = new CompletionItemDefinition({
	label: 'Slotted Directive',
	insertText: new SnippetString(`\${slotted(${quoteStyle}\${1}${quoteStyle})}`),
	detail: 'abstract class HTMLDirective',
	documentation: 'Creates a FAST slotted directive inside an element template.',
	kind: CompletionItemKind.Snippet,
	symbols: [
		{ name: 'slotted', package: '@microsoft/fast-element', packageId: 0 }
	]
});

export const filteredSlottedDirective = new CompletionItemDefinition({
	label: 'Slotted Directive[filtered]',
	insertText: new SnippetString([
		'\${slotted(',
		`{ property: ${quoteStyle}\${1}${quoteStyle},`,
		` filter: \${2:filter_func}(${quoteStyle}\${0}${quoteStyle})`,
		' })}'
	].join('')),
	detail: 'abstract class HTMLDirective',
	documentation: 'Creates a FAST slotted directive, with a filter function inside an element template.',
	kind: CompletionItemKind.Snippet,
	symbols: [
		{ name: 'slotted', package: '@microsoft/fast-element', packageId: 0 }
	]
});