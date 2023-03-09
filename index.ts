/* document.getElementById("nextJoke")!.addEventListener("click", nextJoke) //el botón en el html lleva una id que sería nextJoke */

const API_URL: string = "https://icanhazdadjoke.com/api"


function nextJoke() {

  fetch('https://icanhazdadjoke.com/', {
    headers: {
      'Accept': 'application/json'
    }
  })
    .then(response => response.json())
    .then(json => document.getElementById("theJoke")!.innerHTML = json.joke)
    .catch(error => console.log(error))

}

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

