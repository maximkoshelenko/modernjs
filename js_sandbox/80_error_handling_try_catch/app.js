// 1 ReferenceError
// try {
//     // ReferenceError
//     myFunction();
// } catch (error) {
//     // Name of error
//     console.log(error.name);
//     // Message of error
//     console.log(error.message);
//     // Test Type of error
//     console.log(error instanceof ReferenceError);
// } finally {
//     console.log('Finally runs regardless of result...')
// }
// 2 TypeError
// try {
//     // Produce a TypeError
//     null.myFunction();
// } catch (error) {
// }
// 3 SyntaxError
// try {
//     // Will produce SyntaxError
//     eval('Hello World');
// } catch (error) {
//     console.log(error);
// }
// 4 URIError
// try {
//     // Will produce URIError
//     decodeURIComponent('%');
// } catch (error) {
//     console.log(error);
// }
// 5 Custom Errors
const user = { email: 'ocetp1@gmail.com' }
try {
    if (!user.name) {
        // throw 'User Has No Name Error' // just text
        throw new Error('Master of errors if Vasia');
    }
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}
