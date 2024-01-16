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

        // {cod: '404', message: 'city not found'}


        const temp = $("#temp");
        temp.text((data.main.temp).toFixed(1) + "°C")
        

        // switch between all the weather icons
        const currentWeather = data.weather[0].main;
        switch (currentWeather) {
            case "Clear":
                $("#weather-icon").attr("src","img/clear.png");        
                break;
            case "Mist":
                $("#weather-icon").attr("src","img/mist.png");        
                break;
            case "Clouds":
                $("#weather-icon").attr("src","img/clouds.png");        
                break;
            case "Drizzle":
                $("#weather-icon").attr("src","img/drizzle.png");        
                break;
            case "rain":
                $("#weather-icon").attr("src","img/rain.png");        
                break;
            case "Snow":
                $("#weather-icon").attr("src","img/snow.png");        
                break;
            default:
                $("#weather-icon").attr("src","img/clear.png");
        }
        


        const cityName = $("#city-name");
        cityName.text(data.name);

        
        const humidity = $(".humidity-text");
        humidity.text((data.main.humidity) + "%");
       


        const wind = $(".wind-text");
        wind.text((data.wind.speed) + " km/h");
    }
}

function bindSearchButton(weatherAppObj) {
    $(".fa-solid").click(function() {
        const inputCity = $("#input").val();
        weatherAppObj.getData(inputCity);
    });
    $("#input").keyup(function(event) {
        if (event.keyCode === 13) {
            $(".fa-solid").click();
        }
    });
}

// YOUR KEY GOES HERE !!
const SECRET_KEY = "";

const weatherAppObj = new WeatherApp(SECRET_KEY)


$(window).bind("load", function() {
    bindSearchButton(weatherAppObj);
});