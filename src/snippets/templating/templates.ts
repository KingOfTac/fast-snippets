import { CompletionItemKind, SnippetString } from "vscode";
import { CompletionItemDefinition } from "../../completion-item-definition";

export const typedTemplate = new CompletionItemDefinition({
	label: 'FAST Template[typed]',
	insertText: new SnippetString([
		'export const ${1:name}Template: (context, definition) => ViewTemplate<${2:TSource}> = (',
		'\tcontext, definition',
		') => html`',
		'\t${0}',
		'`;'
	].join('\n')),
	detail: 'class ViewTemplate<TSource, TParent = any>',
	documentation: 'Creates a FAST Element template definition.',
	kind: CompletionItemKind.Snippet,
	symbols: [
		{ name: 'ViewTemplate', package: '@microsoft/fast-element', packageId: 0 },
		{ name: 'html', package: '@microsoft/fast-element', packageId: 0 }
	]
});

export const untypedTemplate = new CompletionItemDefinition({
	label: 'FAST Template[untyped]',
	insertText: new SnippetString([
		'export const ${1:name}Template = (context, definition) => html`',
		'\t${0}',
		'`;'
	].join('\n')),
	detail: 'class ViewTemplate<TSource, TParent = any>',
	documentation: 'Creates a FAST Element template definition.',
	kind: CompletionItemKind.Snippet,
	symbols: [
		{ name: 'html', package: '@microsoft/fast-element', packageId: 0 }
	]
});

export const componentTag = new CompletionItemDefinition({
	label: 'FAST Tag',
	insertText: new SnippetString('<${context.tagFor(${0})}></${context.tagFor(${0})>'),
	detail: 'class FASTElementDefinition<TType extends Function = Function>',
	documentation: 'Creates an html tag for a component using the design system context to retrieve its runtime name.\n Can be used in templates and stylesheets.',
	kind: CompletionItemKind.Snippet
});