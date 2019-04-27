// Init wether object
const wether = new Weather('Dnipro', 'UA');
const ui = new UI();

// Get wether on DOM load
document.addEventListener('DOMContentLoaded', getWeather);


function getWeather() {
    wether.getWether()
        .then(results => {
            ui.paint(results);
        })
        .catch(err => console.log(err));
}