function formatDate(timestamp) {
let date=new Date(timestamp);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let day = days[date.getDay()];
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day} ${hours}:${minutes}`;
}

function showWeather(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let dateElement = document.querySelector("#date");
  let iconElement = document.querySelector("#icon");
  let feelsLikeElement = document.querySelector("#feels-like");

  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);
feelsLikeElement.innerHTML=Math.round(response.data.main.feels_like);
}

function searchCity(city) {
  let apiKey = "a10a99110c9b74eeb49e3f0430acbc06";
 
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
 
}

 function handleSubmit(event) {
   event.preventDefault();
   let cityInputElement = document.querySelector("#city-input");
   console.log(cityInputElement.value);
   searchCity(cityInputElement.value);
 }

// function getPosition(position) {
//   let lat = position.coords.latitude;
//   let lon = position.coords.longitude;
//   let apiKey = "a10a99110c9b74eeb49e3f0430acbc06";
//   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
//   axios.get(apiUrl).then(showWeather);
// }

// function getCurrentPosition() {
//   navigator.geolocation.getCurrentPosition(getPosition);
// }

searchCity("Winnipeg");
 let searchButton = document.querySelector("#search-form");
 searchButton.addEventListener("submit", handleSubmit);

// let currentButton = document.querySelector("#current-button");
// currentButton = addEventListener("submit", getCurrentPosition);


