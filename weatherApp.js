class weatherApp {
    constructor(city, key, temp) {
        this.city = city;
        this.key = key;
        this.temp = temp;
    }

    getData = async function () {
        const results = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`);
        const data = await results.json();
        console.log(data);
        this.createCard();
    }

    createCard() {
        const cardDiv = $("#card");

        const cityName = `<h1 class="city-name">${city}</h1>`;
        const weatherIcon = `<div class="weather-icon"></div>`;
        const temp = `<div class="temp">${this.temp}</div>`;

        
        const infoDiv = $(".info");

        const humidity = `<div class="humidity"></div>`
        const wind = `<div class="wind"></div>`
        
        
        cardDiv.append(cityName, weatherIcon, temp, infoDiv);
        infoDiv.append(humidity, wind);
    }
}

city = "Lisboa";
key = "0d94b542625a860710d8905c5659e374";
temp = "30ºC"

weatherApp1 = new weatherApp(city, key, temp)
weatherApp1.getData();

