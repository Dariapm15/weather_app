let dateText = document.querySelector("h2");
let currentTime = new Date();
function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let currentHour = date.getHours();
  let currentMinutes = date.getMinutes();
  let currentDay = days[date.getDay()];
  let currentMonth = months[date.getMonth()];
  let currentDate = date.getDate();

  let formattedDate = `${currentDay}, ${currentDate} ${currentMonth} ${currentHour}:${currentMinutes} `;

  return formattedDate;
}
dateText.innerHTML = formatDate(currentTime);

let cityName = document.querySelector("h1");
function city(event) {
  event.preventDefault();
  let search = document.querySelector("#city-input");
  cityName.innerHTML = search.value;
}
let value = document.querySelector("#city-form");
value.addEventListener("submit", city);

function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 66;
}

//function convertToCelsius(event) {
//event.preventDefault();
//let temperatureElement = document.querySelector("#temperature");
//temperatureElement.innerHTML = 19;
//}
let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

//let celsiusLink = document.querySelector("#celsius-link");
//celsiusLink.addEventListener("click", convertToCelsius);

//let curCity = document.querySelector("#city-input");

//let curCity = "Kharkiv";
function displayWeatherCondition(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector(
    "#humidity"
  ).innerHTML = `Humidity: ${response.data.main.humidity} %`;
  document.querySelector("#wind").innerHTML = `Wind: ${Math.round(
    response.data.wind.speed
  )} km/h`;
}

function searchCity(city) {
  let apiKey = "49d135627c9290265084655f65a8bf57";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
}

let searchForm = document.querySelector("#city-form");
searchForm.addEventListener("submit", handleSubmit);

searchCity("New York");
