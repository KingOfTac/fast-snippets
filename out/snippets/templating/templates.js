"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.componentTag = exports.untypedTemplate = exports.typedTemplate = void 0;
const vscode_1 = require("vscode");
const completion_item_definition_1 = require("../../completion-item-definition");
exports.typedTemplate = new completion_item_definition_1.CompletionItemDefinition({
    label: 'FAST Template[typed]',
    insertText: new vscode_1.SnippetString([
        'export const ${1:name}Template: (context, definition) => ViewTemplate<${2:TSource}> = (',
        '\tcontext, definition',
        ') => html`',
        '\t${0}',
        '`;'
    ].join('\n')),
    detail: 'class ViewTemplate<TSource, TParent = any>',
    documentation: 'Creates a FAST Element template definition.',
    kind: vscode_1.CompletionItemKind.Snippet,
    symbols: [
        { name: 'ViewTemplate', package: '@microsoft/fast-element', packageId: 0 },
        { name: 'html', package: '@microsoft/fast-element', packageId: 0 }
    ]
});
exports.untypedTemplate = new completion_item_definition_1.CompletionItemDefinition({
    label: 'FAST Template[untyped]',
    insertText: new vscode_1.SnippetString([
        'export const ${1:name}Template = (context, definition) => html`',
        '\t${0}',
        '`;'
    ].join('\n')),
    detail: 'class ViewTemplate<TSource, TParent = any>',
    documentation: 'Creates a FAST Element template definition.',
    kind: vscode_1.CompletionItemKind.Snippet,
    symbols: [
        { name: 'html', package: '@microsoft/fast-element', packageId: 0 }
    ]
});
exports.componentTag = new completion_item_definition_1.CompletionItemDefinition({
    label: 'FAST Tag',
    insertText: new vscode_1.SnippetString('<${context.tagFor(${0})}></${context.tagFor(${0})>'),
    detail: 'class FASTElementDefinition<TType extends Function = Function>',
    documentation: 'Creates an html tag for a component using the design system context to retrieve its runtime name.\n Can be used in templates and stylesheets.',
    kind: vscode_1.CompletionItemKind.Snippet
});
//# sourceMappingURL=templates.js.map