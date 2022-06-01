var ownAPI = "788d5638d7c8e354a162d6c9747d1bdf";
var currentCity = "";
var lastCity = "";

var handleErrors = (response) => {
    if (!response.ok) {
        throw Error(response.statusText);
    }
}

var getCurrentConditions = (event) => {
    let city = $("search-city").val();
    currentCity = $("search-city").val();
    let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&APPID=" + ownAPI;
    fetch(queryURL)
    .then(handleErrors)
    .then((response) => {
        return reponse.json();
    })
    .then ((response) => {
        saveCity(city);
        $("#search-error").text("");
        let currentWeatherIcon = "https://openweathermap.org/img/w/" + response.weather[0].icon + ".png"
        let currentTimeUTC = response.dt;
        let currentTimeZoneOffset = reponse.timezone;
        let currentTimeZoneOffsetHours = currentTimeZoneOffset / 60 /60;
        let currentMoiment = moment.unix(currentTimeUTC.utc().utcOffset(currentTimeZoneOFfsetHours);
        )

    })

}
