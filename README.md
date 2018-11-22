# idyll-plugins
Place for defining Idyll compiler post-processing transforms.

## Available plugins

Plugins are sorted into two categories, compiler plugins and runtime plugins. Compiler plugins can affect how the project builds or modify the abstract syntax tree that Idyll produces. Runtime plugins can inspect and affect Idyll's reactive variable system in the browser.

See each plugin for specific installation and usage instructions.

### Compiler Plugins

* [Spellcheck](https://github.com/idyll-lang/idyll-plugin-spellcheck)
* [Table of Contents](https://github.com/idyll-lang/idyll-plugin-table-of-contents)

### Runtime Plugins

* [URL State Synchronization](https://github.com/idyll-lang/idyll-plugin-url-state)

To use multiple runtime plugins simultaneously, use [idyll-context-compose](https://github.com/idyll-lang/idyll-context-compose).



