import {
	CancellationToken,
	CompletionContext,
	ExtensionContext,
	languages,
	Position,
	TextDocument,
} from 'vscode'
import { importManager } from './import-manager';
import { SnippetProvider } from './provider';

export function activate(context: ExtensionContext) {
	const provider = languages.registerCompletionItemProvider('typescript', {
		provideCompletionItems(
			document: TextDocument,
			position: Position,
			token: CancellationToken,
			context: CompletionContext
		) {
			importManager.parseDocument(document);
			return SnippetProvider.generateSnippets(importManager, document);
		}
	});

	context.subscriptions.push(provider);
}