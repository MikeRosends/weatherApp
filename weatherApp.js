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

        const temp = $("#temp");
        temp.text((data.main.temp).toFixed(1) + "°C")
        

        const cityName = $("#city-name");
        cityName.text(data.name);

        
        const humidity = $(".humidity-wind-text");
        humidity.text((data.main.humidity) + "%");
       


        const wind = $(".humidity-wind-text");
        wind.text((data.wind.speed) + " km/h");
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