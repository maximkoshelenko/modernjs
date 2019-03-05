let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item');

val = listItem;

// Get child nodes (it will give us all spaces between LIs as text, not very useful)
// Return nodelist
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType; // next line is description of types

/* 
Node.ELEMENT_NODE	1	An Element node like <p> or <div>.
Node.TEXT_NODE	3	The actual Text inside an Element or Attr.
Node.CDATA_SECTION_NODE	4	A CDATASection, such as <!CDATA[[ … ]]>.
Node.PROCESSING_INSTRUCTION_NODE	7	A ProcessingInstruction of an XML document, such as <?xml-stylesheet … ?>.
Node.COMMENT_NODE	8	A Comment node, such as <!-- … -->.
Node.DOCUMENT_NODE	9	A Document node.
Node.DOCUMENT_TYPE_NODE	10	A DocumentType node, such as <!DOCTYPE html>.
Node.DOCUMENT_FRAGMENT_NODE	11	A DocumentFragment node.

Deprecated node type constants Section

Node.ATTRIBUTE_NODE	2	An Attribute of an Element. Attributes no longer implement the Node interface as of DOM4.
Node.ENTITY_REFERENCE_NODE	5	An XML Entity Reference node, such as &foo;. Removed in DOM4.
Node.ENTITY_NODE	6	An XML <!ENTITY …> node. Removed in DOM4.
Node.NOTATION_NODE	12	An XML <!NOTATION …> node. Removed in DOM4.
*/


// Get children element nodes
// Return HTML collection
val = list.children;
val = list.children[1];
list.children[1].textContent = 'Vasia';
// Children of children
val = list.children[2].children;
val = list.children[2].children[0].id = 'test-link';
val = list.children[2].children[0];
// First child
val = list.firstChild; // return node
val = list.firstElementChild; // return element
// Last child
val = list.lastChild; // return node
val = list.lastElementChild; // return element
// Element count
val = list.childElementCount;


// Get parent node
val = listItem.parentNode; // return node
val = listItem.parentElement; // return element
// Parents of parents
val = listItem.parentElement.parentElement; // return parent of parent

// Get next sibling
val = listItem.nextSibling; // return node
val = listItem.nextElementSibling; // return element
val = listItem.nextElementSibling.nextElementSibling; // return next after next sibling

// Get next sibling
val = listItem.previousSibling; // return node
val = listItem.previousElementSibling; // return element
val = listItem.previousElementSibling.previousElementSibling; // return next after next sibling

console.log(val);