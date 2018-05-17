const AST = require('idyll-ast');


// use getNodesbyName(h1) to get all the major headings 
// loop over and add 
module.exports = (ast) => {
    let headings = AST.getNodesByName(ast, 'h1');
    let tagNames = [AST.createNode('h2',{id: 'tableofcontents'}, ['Table of Contents'])];
    headings.forEach((node) => {
        let text = AST.getText(node);
        let href = '#' + text.replace(/['"]+/g, '');
        tagNames.push(AST.createNode('a', {href}, [text]));
        tagNames.push(AST.createNode('br', {}, []))
    });

    let ASTwithID = AST.modifyNodesByName(ast, 'h1', (node) => {
        node = AST.setProperty(node, 'id', AST.getText(node))
        return node;
    });
    
    ASTwithID = AST.prependNodes(ASTwithID, tagNames)
    return ASTwithID;
};