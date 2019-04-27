class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.string = document.getElementById('w-string');
        this.icon = document.getElementById('w-icon');
        this.desc = document.getElementById('w-desc');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        this.dewPoint = document.getElementById('w-dewpoint');
        this.wind = document.getElementById('w-wind');
    }

    paint(weather) {
        this.location.textContent = `${weather.name}, ${weather.sys.country}`;
        this.desc.textContent = weather.weather[0].main;
        this.string.textContent = weather.main.temp;
        this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
        this.feelsLike.textContent = weather.weather[0].description;
        this.dewPoint.textContent = weather.main.pressure;
        this.wind.textContent = weather.wind.speed;
    }
}