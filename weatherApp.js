class weatherApp {
    constructor(city, key) {
        this.city = city;
        this.key = key;
        this.data = null;
    }

    getData = async function () {
        const results = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`);
        this.data = await results.json();
        console.log(this.data);
        this.createCard();
    }

    createCard() {
        const cardDiv = $("#card");

        const cityName = `<h1 class="city-name">${city}</h1>`;
        const weatherIcon = `<div class="weather-icon"></div>`;
        const temp = `<div class="temp">${(this.data.main.temp).toFixed(1)}°C</div>`;
        
        
        const infoDiv = $(".info");

        const humidity = `<div class="humidity"></div>`
        const wind = `<div class="wind"></div>`
        
        
        cardDiv.append(cityName, weatherIcon, temp, infoDiv);
        infoDiv.append(humidity, wind);
    }
}

city = "Lisboa";
key = "0d94b542625a860710d8905c5659e374";

weatherApp1 = new weatherApp(city, key)
weatherApp1.getData();

