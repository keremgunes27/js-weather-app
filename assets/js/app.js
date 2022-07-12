const url = "http://dataservice.accuweather.com/locations/v1/cities/search?";
const key = "0iEeXwmfgS18xeACkW2MVPtLGp8rtOv7";

const searchInput = document.querySelector(".buttons input");

searchInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    var query = url + "apikey=" + key + "&q=" + searchInput.value + "&language=en&details=true&metric=true";

    fetch(query)
      .then((weather) => {
        return weather.json();
      })
      .then(displayResult);
  }
});

//
alert("Api key gives 50 queries per day, if the application does not work, try again the next day. :D");
//
const cityName = document.querySelector(".cityName");
const descText = document.querySelector(".desc");
const tempText = document.querySelector(".temp");
const windText = document.querySelector(".wind");
const humidityText = document.querySelector(".humidity");
const visibilityText = document.querySelector(".visibility");
const pressureText = document.querySelector(".pressure");
const dayText = document.querySelector(".day");
const dayNumberText = document.querySelector(".dayNumber");
const monthText = document.querySelector(".month");
const mainIcon = document.querySelector(".mainIcon");

time = new Date();

var days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

var locationKey;

dayNumberText.innerHTML = time.getDate();
dayText.innerHTML = days[time.getDay()];
monthText.innerHTML = months[time.getMonth()];

const day3 = document.querySelector(".day3");
const day4 = document.querySelector(".day4");
const day5 = document.querySelector(".day5");

const dayNumber3 = document.querySelector(".dayNumber3");
const dayNumber4 = document.querySelector(".dayNumber4");
const dayNumber5 = document.querySelector(".dayNumber5");

const dayMonth3 = document.querySelector(".dayMonth3");
const dayMonth4 = document.querySelector(".dayMonth4");
const dayMonth5 = document.querySelector(".dayMonth5");

const dayMax1 = document.querySelector(".dayMax1");
const dayMax2 = document.querySelector(".dayMax2");
const dayMax3 = document.querySelector(".dayMax3");
const dayMax4 = document.querySelector(".dayMax4");
const dayMax5 = document.querySelector(".dayMax5");

const dayMin1 = document.querySelector(".dayMin1");
const dayMin2 = document.querySelector(".dayMin2");
const dayMin3 = document.querySelector(".dayMin3");
const dayMin4 = document.querySelector(".dayMin4");
const dayMin5 = document.querySelector(".dayMin5");

const day1Icon = document.querySelector(".day1Icon");
const day2Icon = document.querySelector(".day2Icon");
const day3Icon = document.querySelector(".day3Icon");
const day4Icon = document.querySelector(".day4Icon");
const day5Icon = document.querySelector(".day5Icon");

day3.innerHTML = days[time.getDay() + 2];
day4.innerHTML = days[time.getDay() + 3];
day5.innerHTML = days[time.getDay() + 4];

dayNumber3.innerHTML = time.getDate() + 2;
dayNumber4.innerHTML = time.getDate() + 3;
dayNumber5.innerHTML = time.getDate() + 4;

dayMonth3.innerHTML = months[time.getMonth()];
dayMonth4.innerHTML = months[time.getMonth()];
dayMonth5.innerHTML = months[time.getMonth()];

function displayResult(result) {
  cityName.innerHTML = result[0].EnglishName;
  searchInput.value = result[0].EnglishName;

  locationKey = result[0].Key;

  var weahterDataUrl = "http://dataservice.accuweather.com/forecasts/v1/daily/5day/";

  var weahterDataQuery = weahterDataUrl + locationKey + "?apikey=" + key + "&language=en&details=true&metric=true";

  fetch(weahterDataQuery)
    .then((weather) => {
      return weather.json();
    })
    .then(wheatherData);
}

function wheatherData(data) {
  getDay1Icon(data.DailyForecasts[0].Day.Icon);
  getDay2Icon(data.DailyForecasts[1].Day.Icon);
  getDay3Icon(data.DailyForecasts[2].Day.Icon);
  getDay4Icon(data.DailyForecasts[3].Day.Icon);
  getDay5Icon(data.DailyForecasts[4].Day.Icon);

  dayMax1.innerHTML = Math.round(data.DailyForecasts[0].Temperature.Maximum.Value) + "°C";
  dayMin1.innerHTML = Math.round(data.DailyForecasts[0].Temperature.Minimum.Value) + "°C";

  dayMax2.innerHTML = Math.round(data.DailyForecasts[1].Temperature.Maximum.Value) + "°C";
  dayMin2.innerHTML = Math.round(data.DailyForecasts[1].Temperature.Minimum.Value) + "°C";

  dayMax3.innerHTML = Math.round(data.DailyForecasts[2].Temperature.Maximum.Value) + "°C";
  dayMin3.innerHTML = Math.round(data.DailyForecasts[2].Temperature.Minimum.Value) + "°C";

  dayMax4.innerHTML = Math.round(data.DailyForecasts[3].Temperature.Maximum.Value) + "°C";
  dayMin4.innerHTML = Math.round(data.DailyForecasts[3].Temperature.Minimum.Value) + "°C";

  dayMax5.innerHTML = Math.round(data.DailyForecasts[4].Temperature.Maximum.Value) + "°C";
  dayMin5.innerHTML = Math.round(data.DailyForecasts[4].Temperature.Minimum.Value) + "°C";

  var currentDataUrl = "http://dataservice.accuweather.com/currentconditions/v1/";

  var currentDataQuery = currentDataUrl + locationKey + "?apikey=" + key + "&language=en&details=true";

  fetch(currentDataQuery)
    .then((weather) => {
      return weather.json();
    })
    .then(currentData);
}

function currentData(currentData) {
  getWeatherIcon(currentData[0].WeatherIcon);

  tempText.innerHTML = Math.round(currentData[0].Temperature.Metric.Value);
  descText.innerHTML = currentData[0].WeatherText;
  windText.innerHTML = currentData[0].Wind.Speed.Metric.Value;
  visibilityText.innerHTML = currentData[0].Visibility.Imperial.Value;
  pressureText.innerHTML = currentData[0].Pressure.Metric.Value;
  humidityText.innerHTML = currentData[0].RelativeHumidity;
}

function getDay1Icon(icon) {
  if (icon == "1") {
    day1Icon.src = "assets/img/clear.png";
  } else if (icon == "2") {
    day1Icon.src = "assets/img/LightCloud.png";
  } else if (icon == "3") {
    day1Icon.src = "assets/img/HeavyCloud.png";
  } else if (icon == "4") {
    day1Icon.src = "assets/img/HeavyCloud.png";
  } else if (icon == "5") {
    day1Icon.src = "assets/img/HeavyRain.png";
  } else if (icon == "18") {
    day1Icon.src = "assets/img/LightRain.png";
  } else if (icon == "15") {
    day1Icon.src = "assets/img/Thunderstorm.png";
  } else if (icon == "22") {
    day1Icon.src = "assets/img/Snow.png";
  }
}
function getDay2Icon(icon) {
  if (icon == "1") {
    day2Icon.src = "assets/img/clear.png";
  } else if (icon == "2") {
    day2Icon.src = "assets/img/LightCloud.png";
  } else if (icon == "3") {
    day2Icon.src = "assets/img/HeavyCloud.png";
  } else if (icon == "4") {
    day2Icon.src = "assets/img/HeavyCloud.png";
  } else if (icon == "5") {
    day2Icon.src = "assets/img/HeavyRain.png";
  } else if (icon == "18") {
    day2Icon.src = "assets/img/LightRain.png";
  } else if (icon == "15") {
    day2Icon.src = "assets/img/Thunderstorm.png";
  } else if (icon == "22") {
    day2Icon.src = "assets/img/Snow.png";
  }
}
function getDay3Icon(icon) {
  if (icon == "1") {
    day3Icon.src = "assets/img/clear.png";
  } else if (icon == "2") {
    day3Icon.src = "assets/img/LightCloud.png";
  } else if (icon == "3") {
    day3Icon.src = "assets/img/HeavyCloud.png";
  } else if (icon == "4") {
    day3Icon.src = "assets/img/HeavyCloud.png";
  } else if (icon == "5") {
    day3Icon.src = "assets/img/HeavyRain.png";
  } else if (icon == "18") {
    day3Icon.src = "assets/img/LightRain.png";
  } else if (icon == "15") {
    day3Icon.src = "assets/img/Thunderstorm.png";
  } else if (icon == "22") {
    day3Icon.src = "assets/img/Snow.png";
  }
}
function getDay4Icon(icon) {
  if (icon == "1") {
    day4Icon.src = "assets/img/clear.png";
  } else if (icon == "2") {
    day4Icon.src = "assets/img/LightCloud.png";
  } else if (icon == "3") {
    day4Icon.src = "assets/img/HeavyCloud.png";
  } else if (icon == "4") {
    day4Icon.src = "assets/img/HeavyCloud.png";
  } else if (icon == "5") {
    day4Icon.src = "assets/img/HeavyRain.png";
  } else if (icon == "18") {
    day4Icon.src = "assets/img/LightRain.png";
  } else if (icon == "15") {
    day4Icon.src = "assets/img/Thunderstorm.png";
  } else if (icon == "22") {
    day4Icon.src = "assets/img/Snow.png";
  }
}
function getDay5Icon(icon) {
  if (icon == "1") {
    day5Icon.src = "assets/img/clear.png";
  } else if (icon == "2") {
    day5Icon.src = "assets/img/LightCloud.png";
  } else if (icon == "3") {
    day5Icon.src = "assets/img/HeavyCloud.png";
  } else if (icon == "4") {
    day5Icon.src = "assets/img/HeavyCloud.png";
  } else if (icon == "5") {
    day5Icon.src = "assets/img/HeavyRain.png";
  } else if (icon == "18") {
    day5Icon.src = "assets/img/LightRain.png";
  } else if (icon == "15") {
    day5Icon.src = "assets/img/Thunderstorm.png";
  } else if (icon == "22") {
    day5Icon.src = "assets/img/Snow.png";
  }
}

function getWeatherIcon(icon) {
  if (icon == "1") {
    mainIcon.src = "assets/img/clear.png";
  } else if (icon == "2") {
    mainIcon.src = "assets/img/LightCloud.png";
  } else if (icon == "3") {
    mainIcon.src = "assets/img/HeavyCloud.png";
  } else if (icon == "4") {
    mainIcon.src = "assets/img/HeavyCloud.png";
  } else if (icon == "5") {
    mainIcon.src = "assets/img/HeavyRain.png";
  } else if (icon == "18") {
    mainIcon.src = "assets/img/LightRain.png";
  } else if (icon == "15") {
    mainIcon.src = "assets/img/Thunderstorm.png";
  } else if (icon == "22") {
    mainIcon.src = "assets/img/Snow.png";
  }
}
