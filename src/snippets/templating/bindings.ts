import { SnippetString, TextDocument, workspace } from "vscode";
import { DocumentImportManager } from "../../import-manager";
import { SnippetDefinition } from "../../snippet-definition";

const { quoteStyle } = workspace.getConfiguration('fastSnippets');

export function binding(manager: DocumentImportManager, document: TextDocument) {
	return new SnippetDefinition(
		manager,
		'Binding',
		new SnippetString('${1:html_attr}="${x => x.${0:property}}"'),
		'type Binding<TSource = any, TReturn = any, TParent = any>',
		'Creates a simple property binding inside an element template.',
		[]
	).getCompletionItem(document);
}

export function booleanBinding(manager: DocumentImportManager, document: TextDocument) {
	return new SnippetDefinition(
		manager,
		'Binding[boolean]',
		new SnippetString('?${1:property}="${x => x.${0:property}}"'),
		'type Binding<TSource = any, TReturn = any, TParent = any>',
		'Creates a boolean property binding inside an element template.',
		[]
	).getCompletionItem(document);
}

export function propertyBinding(manager: DocumentImportManager, document: TextDocument) {
	return new SnippetDefinition(
		manager,
		'Binding[property]',
		new SnippetString(':${1:property}="${x => x.${0:property}}"'),
		'type Binding<TSource = any, TReturn = any, TParent = any>',
		'Creates a property binding inside an element template.',
		[]
	).getCompletionItem(document);
}

export function eventBinding(manager: DocumentImportManager, document: TextDocument) {
	return new SnippetDefinition(
		manager,
		'Binding[event]',
		new SnippetString('@${1:property}="${x => x.${0:property}}"'),
		'type Binding<TSource = any, TReturn = any, TParent = any>',
		'Creates an event property binding inside an element template.',
		[]
	).getCompletionItem(document);
}