let re;
re = /hello/; //regular expression
re = /hello/i; // i = case insensitive
// re = /hello/g; // g = global search

/*
/regularExpressionRightsHere/
i - is char of caseInsensitive (using it hello and HELLO will be valid)
*/

// console.log(re);
// console.log(re.source );

// exec() return result array or null;

// let result = re.exec(' hello world');

// console.log(result.index);

// test() returns true or false

// let result = re.test('Hello');
// console.log(result);

// match() - Return result array or null
// const str = 'Hello there hello';
// const result = str.match(re); 

// console.log(result);

// search() - Returns index of the first match, if not returns -1

// const str = '  Hello there';
// const result = str.search(re);

// console.log(result);

// replace() - Return new string with some or all matches of pattern
const str = 'HeLLo there';
const newStr = str.replace(re, 'Privet Bleat');
console.log(newStr);