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

// Brackets [] - Character sets
re = /gr[ae]y/i; // one of brackets value need to be presented a or e \
re = /[GF]ray/; // must starts from uppercase G or upper case F 
re = /[^GF]ray/; // must starts from anything besides G or F
re = /[A-Z]ray/; // must starts from any uppercase letter
re = /[a-z]ray/; // must starts from any lowercase letter
re = /[A-Za-z]ray/; // must starts from any letter (case doesnt matter due to A-Za-z)
re = /[0-9]ray/; // must starts from any digit
re = /[0-9][0-9]ray/; // must starts from two any digits

// Braces {} - Quantifiers
re = /Hel{2}o/i; // l{2} means that need to be placed two ll to match
re = /Hel{2,4}o/i; // l{2,4} means that we may have from 2 upr to 4 l-s
re = /Hel{2,}o/i; // l{2,} means that we may have at least two l-s

// Parentheses () - Grouping
re = /[0-9]x{3}/; // 0xxx will match
re = /([0-9]x){3}/; // 0x0x0x will match

// Shorthand Character Classes
re = /\w/; // Word character first one - alphanumeric or _; 
re = /\w+/; // one or more - alphanumeric or _ character; 
re = /\W/; // Uppercase W means - NONE word character; 
re = /\d/; // Digit, match first digit; 
re = /\d+/; // Digit, match all of them; 
re = /\D/; // Uppercase D means - NONE digit character; 
re = /\s/; // Match whitespace character (space and tab will match); 
re = /\S/; // NON whitespace;
re = /Hell\b/i; // Will search hell separate word so Hello will not match

// Assertions
re = /x(?=y)/; // match only if after x will be y
re = /x(?!y)/; // match only if after x will NOT be y

// String to match
const str = 'xx xy yx';

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