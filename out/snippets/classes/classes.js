"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.foundationElement = exports.customElement = exports.decoratedCustomElement = void 0;
const vscode_1 = require("vscode");
const completion_item_definition_1 = require("../../completion-item-definition");
exports.decoratedCustomElement = new completion_item_definition_1.CompletionItemDefinition({
    label: 'Custom Element[decorated]',
    insertText: new vscode_1.SnippetString([
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
    kind: vscode_1.CompletionItemKind.Snippet,
    symbols: [
        { name: 'customElement', package: '@microsoft/fast-element', packageId: 0 },
        { name: 'FASTElement', package: '@microsoft/fast-element', packageId: 0 }
    ]
});
exports.customElement = new completion_item_definition_1.CompletionItemDefinition({
    label: 'Custom Element',
    insertText: new vscode_1.SnippetString([
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
    kind: vscode_1.CompletionItemKind.Snippet,
    symbols: [
        { name: 'FASTElement', package: '@microsoft/fast-element', packageId: 0 }
    ]
});
exports.foundationElement = new completion_item_definition_1.CompletionItemDefinition({
    label: 'Foundation Element',
    insertText: new vscode_1.SnippetString([
        'export class ${1:class_name} extends FoundationElement {',
        '\t${0}',
        '}',
    ].join('\n')),
    detail: 'class FoundationElement extends FASTElement',
    documentation: 'Creates a FAST foundation element.',
    kind: vscode_1.CompletionItemKind.Snippet,
    symbols: [
        { name: 'FoundationElement', package: '@microsoft/fast-foundation', packageId: 1 }
    ]
});
//# sourceMappingURL=classes.js.map