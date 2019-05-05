let re;
// Literal Characters
re = /hello/;
re = /hello/i;

// Metacharacters symbols
re = /^h/i; // Must starts with
re = /d$/; // Must ends with
re = /^hello$/; // Must begin and end with
re = /h.llo/; // . means could be one any character on its place, h5llo will work  
re = /h*llo/; // * means much any character 0 or more times, heeee2345llo or hllo will pass
re = /gre?a?y/; // ? each character with witch this sign is used can be used gray, grey, gry will work 
re = /gre?a?y\?/; // \ using metacharacter as literal, in this case i want ? sign be presented as literal

// String to match
const str = 'gray?';

// Log results 
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
    if (re.test(str)) {
        console.log(`${str} matches ${re.source}`)
    } else {
        console.log(`${str} does NOT matches ${re.source}`)        
    }
}

reTest(re, str);