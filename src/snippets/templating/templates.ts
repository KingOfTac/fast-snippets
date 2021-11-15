import { SnippetString, TextDocument } from "vscode";
import { DocumentImportManager } from "../../import-manager";
import { SnippetDefinition } from "../../snippet-definition";

export function typedTemplate(manager: DocumentImportManager, document: TextDocument) {
	return new SnippetDefinition(
		manager,
		'FAST Template[typed]',
		new SnippetString([
			'export const ${1:name}Template: (context, definition) => ViewTemplate<${2:TSource}> = (',
			'\tcontext, definition',
			') => html`',
			'\t${0}',
			'`;'
		].join('\n')),
		'class ViewTemplate<TSource, TParent = any>',
		'Creates a FAST Element template definition.',
		[
			{ symbols: ['ViewTemplate'], source: '@microsoft/fast-element', isTypeImport: true },
			{ symbols: ['html'], source: '@microsoft/fast-element', isTypeImport: false }
		]
	).getCompletionItem(document);
};

export function untypedTemplate(manager: DocumentImportManager, document: TextDocument) {
	return new SnippetDefinition(
		manager,
		'FAST Template[untyped]',
		new SnippetString([
			'export const ${1:name}Template = (context, definition) => html`',
			'\t${0}',
			'`;'
		].join('\n')),
		'class ViewTemplate<TSource, TParent = any>',
		'Creates a FAST Element template definition.',
		[
			{ symbols: ['html'], source: '@microsoft/fast-element', isTypeImport: false }
		]
	).getCompletionItem(document);
};

export function componentTag(manager: DocumentImportManager, document: TextDocument) {
	return new SnippetDefinition(
		manager,
		'FAST Tag',
		new SnippetString('<${context.tagFor(${1})}>${0}</${context.tagFor(${1})}>'),
		'class FASTElementDefinition<TType extends Function = Function>',
		'Creates an html tag for a component using the design system context to retrieve its runtime name.\n Can be used in templates and stylesheets.',
		[]
	).getCompletionItem(document);
};