# **FAST-Snippets**
Useful vscode snippets for common patterns when creating [Microsoft's FAST Components](https://github.com/microsoft/fast).

## **Features**
* The included snippets can automatically insert import directives for symbols that come from external packages.

## **Featured FAST snippets**
***
### Components created using `@customElement` decorator.
![custom element](examples/fast-element-classes/custom-element-decorator.gif)

### FAST element template definitions
![template](examples/templating/template-typed.gif)

### FAST HTML Directives
![slotted directive](examples/templating/directive-slotted.gif)

### FAST Template Bindings
![event binding](examples/templating/binding-event.gif)

### **More Examples**
* [FAST Elements](examples/fast-element-classes/fast-element-classes.md)
* [Templating](examples/templating/template.md)
	* [Directives](examples/templating/directives.md)
	* [Bindings](examples/templating/bindings.md)
* [Styling](examples/styling/styling.md)

## **Release Notes**
***

### 1.6.0
* Reworked how the extension manages the existing document imports and how new imports get inserted.
	* Overall should be more reliable and less prone to failure

### 1.6.1
* Fixed wrong syntax for `when` & `repeat` directives

### 1.6.2
* Fixed wrong syntax for event bindings