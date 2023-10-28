const searchValue = document.querySelector(".search-box");
const searchBtn = document.querySelector(".btn");
const weatherIcon = document.querySelector(".weather-icon");

let url = `https://api.openweathermap.org/data/2.5/weather?q=kathmandu&appid=f9853a7fd579c3beaf72869c12958e9d`;

searchBtn.addEventListener("click", function () {
  url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue.value}&appid=f9853a7fd579c3beaf72869c12958e9d`;

  async function checkWeather() {
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      tempConverter(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main === "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main === "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main === "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main === "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main === "Mist") {
      weatherIcon.src = "images/mist.png";
    }
  }

  checkWeather();
});

const tempConverter = (data) => {
  return Math.ceil(data - 273.15);
};
