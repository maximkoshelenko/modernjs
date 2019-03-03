let val;

val = document;
val = document.all;
val = document.all[1];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

// selecting elements without a selector bad practice but good to know
val = document.forms; // return HTML collection
val = document.forms[0]; // access to particular form
val = document.forms[0].id; // get ID of the form
val = document.forms[0].method; // get method of the form
val = document.forms[0].action; // get action of the form

val = document.links; // collection of links
val = document.links[0]; // collection of links
val = document.links[0].id; // collection of links
val = document.links[0].className; // collection of links
val = document.links[0].classList[0]; // collection of links

val = document.images;

val = document.scripts;
val = document.scripts[2].getAttribute('src');

let scripts = document.scripts;

scripts = Array.from(scripts);

scripts.forEach(script => {
    console.log(script.getAttribute('src'));    
});

console.log(val);