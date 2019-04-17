document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJSON);
document.getElementById('button3').addEventListener('click', getAPI);

// Get local text file data
function getText() {
    fetch('test.txt')
        .then(function (response) {
            return response.text();
        })
        .then(function (data) {
            document.getElementById('output').innerHTML = data;
        })
        .catch(function (error) {
            console.log(error);
        });
}

// Get local JSON file data 
function getJSON() {
    fetch('post.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let output = '';
            data.forEach(function (team) {
                output += `<li>${team.title}</li>`;
            });
            document.getElementById('output').innerHTML = output;

        })
        .catch(function (error) {
            console.log(error);
        });
}

// Get external API data 
function getAPI() {
    fetch('https://api.github.com/users')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let output = '';
            data.forEach(function (user) {
                output += `<li>${user.login}</li>`;
            });
            document.getElementById('output').innerHTML = output;

        })
        .catch(function (error) {
            console.log(error);
        });
}
