import { CompletionItem, TextDocument } from 'vscode';
import { DocumentImportManager } from './import-manager';
import { binding, booleanBinding, childrenDirective, componentTag, customElement, decoratedCustomElement, eventBinding, filteredChildrenDirective, filteredSlottedDirective, foundationElement, propertyBinding, refDirective, repeatDirective, slottedDirective, styles, typedTemplate, untypedTemplate, whenDirective } from './snippets';

export class SnippetProvider {
	public static generateSnippets(importManager: DocumentImportManager, document: TextDocument): CompletionItem[] {
		return [
			typedTemplate(importManager, document),
			untypedTemplate(importManager, document),
			componentTag(importManager, document),
			refDirective(importManager, document),
			whenDirective(importManager, document),
			repeatDirective(importManager, document),
			childrenDirective(importManager, document),
			filteredChildrenDirective(importManager, document),
			slottedDirective(importManager, document),
			filteredSlottedDirective(importManager, document),
			binding(importManager, document),
			booleanBinding(importManager, document),
			propertyBinding(importManager, document),
			eventBinding(importManager, document),
			decoratedCustomElement(importManager, document),
			customElement(importManager, document),
			foundationElement(importManager, document),
			styles(importManager, document),
		];
	}
}