/* document.getElementById("nextJoke")!.addEventListener("click", nextJoke) //el botón en el html lleva una id que sería nextJoke */
const API_URL: string = "https://icanhazdadjoke.com/api"
const API_URL_ChuckNorris: string = "https://api.chucknorris.io/jokes/random";
const scoreButtons: HTMLElement | any = document.getElementById("scoreButtons")

function dadJoke() {
  fetch('https://icanhazdadjoke.com/', {
    headers: {
      'Accept': 'application/json'
    }
  })
    .then(response => response.json())
    .then(json => {
      document.getElementById("theJoke")!.innerHTML = json.joke
      scoreButtons.style.display = "block"
    })
    .catch(error => console.log(error))
}

function chuckJoke() {
  fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(json => {
      document.getElementById("theJoke")!.innerHTML = json.value
      scoreButtons.style.display = "block"
    })
    .catch(error => console.log(error))
}

function nextJoke() {
  const random = Math.ceil(Math.random() * 2)
  console.log(random)
  if (random === 1) {
    dadJoke()
  }
  else {
    chuckJoke()
  }
}


//Puntuación de los chistes
interface Joke {
  joke: string;
  score: number;
  date: string;
}

const reportJoke: Joke[] = []

function score(number: number) {
  const joke: HTMLElement | any = document.getElementById('theJoke')?.innerHTML

  reportJoke.forEach((item, index) => {
    if (item.joke === joke) {
      reportJoke.splice(index, 1)
    }
  })

  const score = number
  const date: string = new Date().toISOString()
  const scoredJoke = { joke, score, date }
  reportJoke.push(scoredJoke)
  console.log(reportJoke)
}


// Nivel 2 - Ejercicio 4
const API_URL_WEATHER: string = "http://api.weatherapi.com/v1"
const weatherIcon: HTMLElement | any = document.getElementById("weatherIcon");
const weatherInfo: HTMLElement | any = document.getElementById("weatherInfo");
const API_KEY: string = '1c9c6cb101e7e4d9930b3d50a680e21a';

function getWeather() {
  navigator.geolocation.getCurrentPosition((success) => {
    let { latitude, longitude } = success.coords;

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        let { temp } = data.main;
        weatherInfo.innerHTML = `${Math.trunc(temp)}ºC`;
        let icon = data.weather[0].icon;
        weatherIcon.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
      })
  })
}

getWeather();
const headerApi = {
  headers: {
    Accept: "application/json",
  }
}

