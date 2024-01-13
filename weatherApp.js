class WeatherApp {
    constructor(key) {
        this.key = key;
    }


    getData = async function (city) {
        const results = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.key}&units=metric`);
        const output = await results.json();
        this.createCard(output);
    }

    createCard(data) {

        const cardDiv = $("#card");  
        const weatherIcon = `<div class="weather-icon"></div>`;
        const temp = `<div class="temp">
            <h1 id="temp">${(data.main.temp).toFixed(1)}°C</h1>
            </div>`;
        

        const cityNameDiv = $(".city-name");
        const cityName = `<h1 id="city-name">${(data.name)}</h1>`

        
        const infoDiv = $(".info")
        const humidity = `<div class="humidity-wind">
        <img class="humidity-wind-image" src="img/humidity.png">
        <div class="wind-humidity-info">
            <p class="humidity-wind-details">Humidity</p>
            <p class="humidity-wind-text">${(data.main.humidity)}%</p>
        </div>
        </div>`
       


        const wind = `<div class="humidity-wind">
                <img class="humidity-wind-image" src="img/wind.png">
                <div class="wind-humidity-info">
                    <p class="humidity-wind-details">Wind Speed</p>
                    <p class="humidity-wind-text">${(data.wind.speed)} km/h</p>
                </div>
                </div>`
     
        cityNameDiv.append(cityName)
        infoDiv.append(humidity, wind);
        cardDiv.append(weatherIcon, temp, infoDiv);
    }
}

function bindSearchButton(weatherAppObj) {
    $(".fa-solid").click(function() {
        const inputCity = $("#input").val();
        weatherAppObj.getData(inputCity);
    });
}


const SECRET_KEY = "0d94b542625a860710d8905c5659e374";

const weatherAppObj = new WeatherApp(SECRET_KEY)


$(window).bind("load", function() {
    bindSearchButton(weatherAppObj);
});