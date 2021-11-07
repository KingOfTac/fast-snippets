import { CompletionItemKind, SnippetString, workspace } from "vscode";
import { CompletionItemDefinition } from "../../completion-item-definition";

const { quoteStyle } = workspace.getConfiguration('fastSnippets');

export const binding = new CompletionItemDefinition({
	label: 'Binding',
	insertText: new SnippetString('${1:html_attr}="${x => x.${0:property}}"'),
	detail: 'type Binding<TSource = any, TReturn = any, TParent = any>',
	documentation: 'Creates a simple property binding inside an element template.',
	kind: CompletionItemKind.Snippet
});

export const booleanBinding = new CompletionItemDefinition({
	label: 'Binding[boolean]',
	insertText: new SnippetString('?${1:property}="${x => x.${0:property}}"'),
	detail: 'type Binding<TSource = any, TReturn = any, TParent = any>',
	documentation: 'Creates a boolean property binding inside an element template.',
	kind: CompletionItemKind.Snippet
});

export const propertyBinding = new CompletionItemDefinition({
	label: 'Binding[property]',
	insertText: new SnippetString(':${1:property}="${x => x.${0:property}}"'),
	detail: 'type Binding<TSource = any, TReturn = any, TParent = any>',
	documentation: 'Creates a property binding inside an element template.',
	kind: CompletionItemKind.Snippet
});

export const eventBinding = new CompletionItemDefinition({
	label: 'Binding[event]',
	insertText: new SnippetString('@${1:property}="${x => x.${0:property}}"'),
	detail: 'type Binding<TSource = any, TReturn = any, TParent = any>',
	documentation: 'Creates an event binding inside an element template.',
	kind: CompletionItemKind.Snippet
});