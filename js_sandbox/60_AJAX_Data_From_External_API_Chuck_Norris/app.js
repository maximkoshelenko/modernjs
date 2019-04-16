document.getElementById('get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
    let number = document.querySelector('input[type=number]').value;
    if (number === '') {
        number = '1'
    }

    // Create an XHR Object
    const xhr = new XMLHttpRequest();

    // OPEN
    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

    // ON LOAD
    xhr.onload = function () {
        if (this.status === 200) {
            const response = JSON.parse(this.responseText);

            let output = '';

            if (response.type === 'success') {
                // Response is an object we need to loop throw the value os the object 
                response.value.forEach(function (joke){
                    output += `<li>${joke.joke}</li>`;
                });
            } else {
                output += '<li>ERROR DURING API REQUEST</li>';
            }

            document.querySelector('.jokes').innerHTML = output;
        }
    }

    // Sent
    xhr.send()

    e.preventDefault();
};