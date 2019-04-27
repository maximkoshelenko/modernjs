class Weather {
    constructor (city, country) {
        this.apiKey = 'ef67e96f6748814cbbee3d82e75bd03e';
        this.city = city;
        this.country = country;
    }

    // Fetch weather from API
    async getWether() {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.apiKey}`);
        
        const responseData = await response.json();

        return responseData;
    }

    // Change weather location
    changeLocation(city, country){
        this.city = city;
        this.country = country;
    }
}