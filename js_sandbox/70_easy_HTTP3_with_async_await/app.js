const http = new EasyHTTP;

// Get Users
// http.get('http://jsonplaceholder.typicode.com/users')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// User Data
const data = {
    name: 'Maksim Koshelenko',
    username: 'MK',
    email: 'ma@yahoo.com'
}

//Create User
// http.post('http://jsonplaceholder.typicode.com/users', data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

//Update User
// http.put('http://jsonplaceholder.typicode.com/users/2', data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

//Delete User
http.delete('http://jsonplaceholder.typicode.com/users/2')
    .then(answer => console.log(answer))
    .catch(err => console.log(err));