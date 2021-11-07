import {
	CancellationToken,
	CompletionContext,
	CompletionItem,
	ExtensionContext,
	languages,
	Position,
	SnippetString,
	TextDocument,
	CompletionItemKind,
	TextEdit,
	workspace,
	CompletionItemLabel,
	TextLine
} from 'vscode'
import { DocumentImport } from './completion-item-definition';

import {
	typedTemplate,
	untypedTemplate,
	binding,
	booleanBinding,
	eventBinding,
	propertyBinding,
	refDirective,
	childrenDirective,
	componentTag,
	customElement,
	decoratedCustomElement,
	filteredChildrenDirective,
	filteredSlottedDirective,
	foundationElement,
	repeatDirective,
	slottedDirective,
	styles,
	whenDirective
} from './snippets';

const documentImports = new Map<string, DocumentImport>();

export function activate(context: ExtensionContext) {
	const testProvider = languages.registerCompletionItemProvider('typescript', {
		provideCompletionItems(
			document: TextDocument,
			position: Position,
			token: CancellationToken,
			context: CompletionContext
		) {
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
				typedTemplate.getCompletionItem(documentImports),
				untypedTemplate.getCompletionItem(documentImports),
				binding.getCompletionItem(documentImports),
				booleanBinding.getCompletionItem(documentImports),
				eventBinding.getCompletionItem(documentImports),
				propertyBinding.getCompletionItem(documentImports),
				refDirective.getCompletionItem(documentImports),
				childrenDirective.getCompletionItem(documentImports),
				componentTag.getCompletionItem(documentImports),
				customElement.getCompletionItem(documentImports),
				decoratedCustomElement.getCompletionItem(documentImports),
				filteredChildrenDirective.getCompletionItem(documentImports),
				filteredSlottedDirective.getCompletionItem(documentImports),
				foundationElement.getCompletionItem(documentImports),
				repeatDirective.getCompletionItem(documentImports),
				slottedDirective.getCompletionItem(documentImports),
				styles.getCompletionItem(documentImports),
				whenDirective.getCompletionItem(documentImports)
			];
		}
	});

	context.subscriptions.push(testProvider);
}