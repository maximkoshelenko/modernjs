const http = new easyHTTP;

// Get Posts
http.get('http://jsonplaceholder.typicode.com/posts',
    function (err, posts) {
        if (err) {
            console.log(err);
        } else {
            console.log(posts);
        }
    });

// Get single Post
http.get('http://jsonplaceholder.typicode.com/posts/1',
    function (err, post) {
        if (err) {
            console.log(err);
        } else {
            console.log(post);
        }
    });

// Create a data
const data = {
    title: "hasta",
    body: "la  vista"
};

// Create Post
http.post('http://jsonplaceholder.typicode.com/posts', data,
    function (err, post) {
        if (err) {
            console.log(err);
        } else {
            console.log(post);
        }
    });

// Create Post
http.put('http://jsonplaceholder.typicode.com/posts/100', data,
    function (err, post) {
        if (err) {
            console.log(err);
        } else {
            console.log(post);
        }
    });

// Delete Post
http.delete('http://jsonplaceholder.typicode.com/posts/1',
    function (err, response) {
        if (err) {
            console.log(err);
        } else {
            console.log(response);
        }
    });