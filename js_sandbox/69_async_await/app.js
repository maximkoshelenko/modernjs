// 1
// async function myFunc(){
//     return 'Hello';
// }

// myFunc()
// .then(res => console.log(res));  
// 2
// async function myFunc() {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('Hello', 1000));
//     });
//     const res = await promise; // Wait until promises is resolved
//     return res;
// }

// myFunc()
//     .then(res => console.log(res)); 

// 3 with error
// async function myFunc() {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() =>
//             resolve('Hello', 1000));
//     });

//     const error = true;
//     if (!error) {
//         const res = await promise; // Wait until promises is resolved
//         return res;
//     } else {
//         await Promise.reject(new Error('Something went wrong'));
//     }
// }

// myFunc()
//     .then(res => console.log(res))
//     .catch(err => console.log(err));  

// Fetch

async function getUsers() {
    // await the response of the fetch call  
    const response = await fetch('http://jsonplaceholder.typicode.com/users');

    // Only proceed once its resolved
    const data = await response.json();

    // Only proceed once second promise is resolved
    return data;
}

getUsers()
    .then(users => console.log(users));