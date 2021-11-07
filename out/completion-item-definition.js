"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompletionItemDefinition = void 0;
const vscode_1 = require("vscode");
const { quoteStyle, generateImportsFromSymbols } = vscode_1.workspace.getConfiguration('fastSnippets');
class CompletionItemDefinition {
    constructor(labelOrOptions) {
        if (typeof labelOrOptions === 'string') {
            labelOrOptions = { label: labelOrOptions };
        }
        this._completionItem = new vscode_1.CompletionItem(labelOrOptions.label, labelOrOptions.kind);
        this.symbols = labelOrOptions.symbols;
        this._completionItem.label = labelOrOptions.label;
        this._completionItem.command = labelOrOptions.command;
        this._completionItem.commitCharacters = labelOrOptions.commitCharacters;
        this._completionItem.detail = labelOrOptions.detail;
        this._completionItem.documentation = labelOrOptions.documentation;
        this._completionItem.filterText = labelOrOptions.filterText;
        this._completionItem.insertText = labelOrOptions.insertText;
        this._completionItem.keepWhitespace = labelOrOptions.keepWhitespace;
        this._completionItem.kind = labelOrOptions.kind;
        this._completionItem.preselect = labelOrOptions.preselect;
        this._completionItem.range = labelOrOptions.range;
        this._completionItem.sortText = labelOrOptions.sortText;
        this._completionItem.tags = labelOrOptions.tags;
        this._completionItem.textEdit = labelOrOptions.textEdit;
    }
    // TODO: This mess should get cleaned up, but I don't have time and it works for now.
    createImports(documentImports) {
        const symbols = this.symbols;
        if (generateImportsFromSymbols) {
            this._completionItem.additionalTextEdits = symbols === null || symbols === void 0 ? void 0 : symbols.reduce((acc, obj) => {
                const prop = obj['packageId'];
                acc[prop] = acc[prop] || [];
                acc[prop].push(obj);
                return acc;
            }, []).map((group, idx) => {
                let incomingSymbols = group.map((obj) => `${obj.name}`);
                if (documentImports.has(group[0].package)) {
                    const existingImport = documentImports.get(group[0].package);
                    const newSymbols = new Set([
                        ...existingImport.symbols,
                        ...incomingSymbols
                    ]);
                    const lineRange = existingImport.line.range;
                    return vscode_1.TextEdit.replace(lineRange, `import { ${Array.from(newSymbols).join(', ')} } from '${group[0].package}';`);
                }
                else {
                    return vscode_1.TextEdit.insert(new vscode_1.Position(0, 0), `import { ${group
                        .map((obj) => `${obj.name}`)
                        .join(', ')} } from '${group[0].package}';\n\n`);
                }
            });
        }
    }
    getCompletionItem(documentImports) {
        this.createImports(documentImports);
        return this._completionItem;
    }
}
exports.CompletionItemDefinition = CompletionItemDefinition;
//# sourceMappingURL=completion-item-definition.js.map