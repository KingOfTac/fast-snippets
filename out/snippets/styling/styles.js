"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.styles = void 0;
const vscode_1 = require("vscode");
const completion_item_definition_1 = require("../../completion-item-definition");
exports.styles = new completion_item_definition_1.CompletionItemDefinition({
    label: 'FAST Styles',
    insertText: new vscode_1.SnippetString([
        'export const ${1:name}Styles = (context, definition) => css`',
        '\t${0}',
        '`;'
    ].join('\n')),
    detail: 'abstract class ElementStyles',
    documentation: 'Creates a FAST Element styles definition.',
    kind: vscode_1.CompletionItemKind.Snippet,
    symbols: [
        { name: 'css', package: '@microsoft/fast-element', packageId: 0 }
    ]
});
//# sourceMappingURL=styles.js.map