"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventBinding = exports.propertyBinding = exports.booleanBinding = exports.binding = void 0;
const vscode_1 = require("vscode");
const completion_item_definition_1 = require("../../completion-item-definition");
const { quoteStyle } = vscode_1.workspace.getConfiguration('fastSnippets');
exports.binding = new completion_item_definition_1.CompletionItemDefinition({
    label: 'Binding',
    insertText: new vscode_1.SnippetString('${1:html_attr}="${x => x.${0:property}}"'),
    detail: 'type Binding<TSource = any, TReturn = any, TParent = any>',
    documentation: 'Creates a simple property binding inside an element template.',
    kind: vscode_1.CompletionItemKind.Snippet
});
exports.booleanBinding = new completion_item_definition_1.CompletionItemDefinition({
    label: 'Binding[boolean]',
    insertText: new vscode_1.SnippetString('?${1:property}="${x => x.${0:property}}"'),
    detail: 'type Binding<TSource = any, TReturn = any, TParent = any>',
    documentation: 'Creates a boolean property binding inside an element template.',
    kind: vscode_1.CompletionItemKind.Snippet
});
exports.propertyBinding = new completion_item_definition_1.CompletionItemDefinition({
    label: 'Binding[property]',
    insertText: new vscode_1.SnippetString(':${1:property}="${x => x.${0:property}}"'),
    detail: 'type Binding<TSource = any, TReturn = any, TParent = any>',
    documentation: 'Creates a property binding inside an element template.',
    kind: vscode_1.CompletionItemKind.Snippet
});
exports.eventBinding = new completion_item_definition_1.CompletionItemDefinition({
    label: 'Binding[event]',
    insertText: new vscode_1.SnippetString('@${1:property}="${x => x.${0:property}}"'),
    detail: 'type Binding<TSource = any, TReturn = any, TParent = any>',
    documentation: 'Creates an event binding inside an element template.',
    kind: vscode_1.CompletionItemKind.Snippet
});
//# sourceMappingURL=bindings.js.map