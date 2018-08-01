
# Table of Contents plugin


## Installation

```
$ npm install --save-dev idyll-plugin-table-of-contents
```

Add it to your idyll configuration in `package.json`:

```json
"idyll": {
  "compiler": {
    "postProcessors": ["idyll-plugin-table-of-contents"]
  }
}
```



## Usage

To use the plugin place `[TableOfContents /]` where you want the table of contents to appear in your document. 

This plugin uses section headers to determine section heirarchy on your page.
