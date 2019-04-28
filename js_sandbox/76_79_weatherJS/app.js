// Init storage
const storage = new Storage();
// Get stored location data
const wetherLocation = storage.getLocationData();
// Init wether object
const wether = new Weather(wetherLocation.city, wetherLocation.country);
// Init UI object
const ui = new UI();

// Get wether on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;
    wether.changeLocation(city, country);
    // Save data in local storage
    storage.setLocationData(city, country);
    // Get wether
    getWeather();

    // Close the modal
    $('#locModal').modal('hide');
});

function getWeather() {
    wether.getWether()
        .then(results => {
            ui.paint(results);
        })
        .catch(err => console.log(err));
}