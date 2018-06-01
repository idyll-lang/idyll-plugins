const AST = require('idyll-ast');

module.exports = (ast) => {
    let headings = AST.getNodesByName(ast, 'h1');
    let tags = ['Table of Contents'];
    headings.forEach((node) => {
        let text = AST.getText(node);
        let href = '#' + text.replace(/['"]+/g, '');
        let element = AST.createNode('a', {href}, [text])
        tags.push(AST.createNode('li', {}, [element]));
    });
    let tagNames = AST.createNode('h2',{id: 'tableofcontents'}, tags);
    let list = AST.createNode('ul', {id: 'list'}, [tagNames])
    let ASTwithID = AST.modifyNodesByName(ast, 'h1', (node) => {
        node = AST.setProperty(node, 'id', AST.getText(node))
        return node;
    });

    let textContainer = AST.createNode('TextContainer', {}, [list])
    ASTwithID = AST.modifyNodesByName(ASTwithID, 'TableOfContents', (node) => {
        return textContainer;
    });
    return ASTwithID;
};