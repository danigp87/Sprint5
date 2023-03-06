const API_URL: string = "https://icanhazdadjoke.com/";

console.log(
fetch(API_URL)
        .then(response => response.json())
        .then(data => console.log(data))

)

function nextJoke() {

const theJoke: HTMLElement | any = document.getElementById('theJoke')

}