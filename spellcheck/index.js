const AST = require('idyll-ast');
const Spellchecker = require('spellchecker');

module.exports = (ast) => {
  const text = AST.getText(ast);
  const misspellings = Spellchecker.checkSpelling(text);

  misspellings.forEach(({start, end}) => {
    console.warn(`Found misspelling: ${text.substring(start, end)}`);
  })
  return ast;
};