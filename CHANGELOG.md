# Change Log

All notable changes to the "fast-snippets" extension will be documented in this file.

## 1.0.0
* Initial release
* Snippets for:
	* FAST custom element definitions with & without decorator syntax
	* FAST FoundationElement definitions
	* FAST element templates
	* FAST HTML directives
	* FAST template bindings
	* FAST element styles

### 1.5.0
* Completely re-did the snippets.
* Snippets can now automatically import symbols they contain that come from external packages.
	* Import behavior can be controlled by the `fastSnippets.generateImportsFromSymbols` setting.
	* Because vscode does not actually support this behavior for snippets, all of the included
	snippets had to be moved from their `.code-snippets` file and into a `CompletionItemProvider`.
	A side effect of this is the auto import behavior only works for the snippets included in this
	extension.
	* If [vscode#111007](https://github.com/microsoft/vscode/issues/111007) gets implemented, then this might work with user and global snippet files.

### 1.6.0
* Reworked how the extension manages the existing document imports and how new imports get inserted.
	* Overall should be more reliable and less prone to failure

### 1.6.1
* Fixed wrong syntax for `when` & `repeat` directives