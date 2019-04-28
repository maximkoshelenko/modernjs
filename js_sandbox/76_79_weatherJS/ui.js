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
        this.pressure = document.getElementById('w-pressure');
        this.wind = document.getElementById('w-wind');
    }

    paint(weather) {
        this.location.textContent = `${weather.name}, ${weather.sys.country}`;
        this.desc.textContent = weather.weather[0].main;
        this.string.textContent = `${weather.main.temp}°C`;
        this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
        // Capitalize each word in description
        let description = weather.weather[0].description.toLowerCase()
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');
        this.feelsLike.textContent = `Short description: ${description}`;
        this.pressure.textContent = `Pressure: ${weather.main.pressure} mmHg`;
        this.wind.textContent = `Wind speed: ${weather.wind.speed} m/s`;
    }
}