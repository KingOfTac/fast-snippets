"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode_1 = require("vscode");
const snippets_1 = require("./snippets");
const documentImports = new Map();
function activate(context) {
    const testProvider = vscode_1.languages.registerCompletionItemProvider('typescript', {
        provideCompletionItems(document, position, token, context) {
            let idx = 0;
            let line = document.lineAt(idx);
            while (line.text.includes('import')) {
                documentImports.set(line.text.split(/from ['|"]/)[1].split(/['|"];/)[0], {
                    symbols: line.text.split('{ ')[1].split(' }')[0].split(/[ ,]+/),
                    fullText: line.text,
                    line: line,
                    replace: false
                });
                idx++;
                line = document.lineAt(idx);
            }
            return [
                snippets_1.typedTemplate.getCompletionItem(documentImports),
                snippets_1.untypedTemplate.getCompletionItem(documentImports),
                snippets_1.binding.getCompletionItem(documentImports),
                snippets_1.booleanBinding.getCompletionItem(documentImports),
                snippets_1.eventBinding.getCompletionItem(documentImports),
                snippets_1.propertyBinding.getCompletionItem(documentImports),
                snippets_1.refDirective.getCompletionItem(documentImports),
                snippets_1.childrenDirective.getCompletionItem(documentImports),
                snippets_1.componentTag.getCompletionItem(documentImports),
                snippets_1.customElement.getCompletionItem(documentImports),
                snippets_1.decoratedCustomElement.getCompletionItem(documentImports),
                snippets_1.filteredChildrenDirective.getCompletionItem(documentImports),
                snippets_1.filteredSlottedDirective.getCompletionItem(documentImports),
                snippets_1.foundationElement.getCompletionItem(documentImports),
                snippets_1.repeatDirective.getCompletionItem(documentImports),
                snippets_1.slottedDirective.getCompletionItem(documentImports),
                snippets_1.styles.getCompletionItem(documentImports),
                snippets_1.whenDirective.getCompletionItem(documentImports)
            ];
        }
    });
    context.subscriptions.push(testProvider);
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map