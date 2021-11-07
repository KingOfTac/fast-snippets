"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filteredSlottedDirective = exports.slottedDirective = exports.filteredChildrenDirective = exports.childrenDirective = exports.repeatDirective = exports.whenDirective = exports.refDirective = void 0;
const vscode_1 = require("vscode");
const completion_item_definition_1 = require("../../completion-item-definition");
const { quoteStyle } = vscode_1.workspace.getConfiguration('fastSnippets');
exports.refDirective = new completion_item_definition_1.CompletionItemDefinition({
    label: 'Ref Directive',
    insertText: new vscode_1.SnippetString(`\${ref(${quoteStyle}\${0}${quoteStyle})}`),
    detail: 'abstract class HTMLDirective',
    documentation: 'Creates a FAST ref directive inside an element template.',
    kind: vscode_1.CompletionItemKind.Snippet,
    symbols: [
        { name: 'ref', package: '@microsoft/fast-element', packageId: 0 }
    ]
});
exports.whenDirective = new completion_item_definition_1.CompletionItemDefinition({
    label: 'When Directive',
    insertText: new vscode_1.SnippetString(`\${when(${quoteStyle}\${1}${quoteStyle}, \${0})}`),
    detail: 'abstract class HTMLDirective',
    documentation: 'Creates a FAST when directive inside an element template.',
    kind: vscode_1.CompletionItemKind.Snippet,
    symbols: [
        { name: 'when', package: '@microsoft/fast-element', packageId: 0 }
    ]
});
exports.repeatDirective = new completion_item_definition_1.CompletionItemDefinition({
    label: 'Repeat Directive',
    insertText: new vscode_1.SnippetString(`\${repeat(${quoteStyle}\${1}${quoteStyle}, \${0})}`),
    detail: 'abstract class HTMLDirective',
    documentation: 'Creates a FAST repeat directive inside an element template.',
    kind: vscode_1.CompletionItemKind.Snippet,
    symbols: [
        { name: 'repeat', package: '@microsoft/fast-element', packageId: 0 }
    ]
});
exports.childrenDirective = new completion_item_definition_1.CompletionItemDefinition({
    label: 'Children Directive',
    insertText: new vscode_1.SnippetString(`\${children(${quoteStyle}\${1}${quoteStyle})}`),
    detail: 'abstract class HTMLDirective',
    documentation: 'Creates a FAST children directive inside an element template.',
    kind: vscode_1.CompletionItemKind.Snippet,
    symbols: [
        { name: 'repeat', package: '@microsoft/fast-element', packageId: 0 }
    ]
});
exports.filteredChildrenDirective = new completion_item_definition_1.CompletionItemDefinition({
    label: 'Children Directive[filtered]',
    insertText: new vscode_1.SnippetString([
        '\${children(',
        `{ property: ${quoteStyle}\${1}${quoteStyle},`,
        ` filter: \${2:filter_func}(${quoteStyle}\${0}${quoteStyle})`,
        ' })}'
    ].join('')),
    detail: 'abstract class HTMLDirective',
    documentation: 'Creates a FAST children directive, with a filter function inside an element template.',
    kind: vscode_1.CompletionItemKind.Snippet,
    symbols: [
        { name: 'children', package: '@microsoft/fast-element', packageId: 0 }
    ]
});
exports.slottedDirective = new completion_item_definition_1.CompletionItemDefinition({
    label: 'Slotted Directive',
    insertText: new vscode_1.SnippetString(`\${slotted(${quoteStyle}\${1}${quoteStyle})}`),
    detail: 'abstract class HTMLDirective',
    documentation: 'Creates a FAST slotted directive inside an element template.',
    kind: vscode_1.CompletionItemKind.Snippet,
    symbols: [
        { name: 'slotted', package: '@microsoft/fast-element', packageId: 0 }
    ]
});
exports.filteredSlottedDirective = new completion_item_definition_1.CompletionItemDefinition({
    label: 'Slotted Directive[filtered]',
    insertText: new vscode_1.SnippetString([
        '\${slotted(',
        `{ property: ${quoteStyle}\${1}${quoteStyle},`,
        ` filter: \${2:filter_func}(${quoteStyle}\${0}${quoteStyle})`,
        ' })}'
    ].join('')),
    detail: 'abstract class HTMLDirective',
    documentation: 'Creates a FAST slotted directive, with a filter function inside an element template.',
    kind: vscode_1.CompletionItemKind.Snippet,
    symbols: [
        { name: 'slotted', package: '@microsoft/fast-element', packageId: 0 }
    ]
});
//# sourceMappingURL=directives.js.map