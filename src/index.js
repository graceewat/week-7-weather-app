function submitSearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  searchCity(searchInput.value);
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", submitSearch);
searchCity("London");

function searchCity(city) {
  let apiKey = "f03c7t04000f0dbod331aeefa47ad1f6";
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiURL).then(refreshWeather);
}
function refreshWeather(response) {
  //change temp
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  temperatureElement.innerHTML = Math.round(temperature);
  //change city
  let cityElement = document.querySelector("#weather-app-city");
  cityElement.innerHTML = response.data.city;
  //change conditions
  let conditionsElement = document.querySelector("#conditions");
  conditionsElement.innerHTML = response.data.condition.description;
  //change humidity
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.temperature.humidity;
  //change wind
  let windElement = document.querySelector("#wind-speed");
  windElement.innerHTML = response.data.wind.speed;
  //change time
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  console.log(date);
  timeElement.innerHTML = formatDate(date);
}
function formatDate(date) {
  let minutes = date.getMinutes();
  console.log(minutes);
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day} ${hours}:${minutes}`;
}
