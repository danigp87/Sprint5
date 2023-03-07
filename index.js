"use strict";
const API_URL = "https://icanhazdadjoke.com/api";
/* document.getElementById("nextJoke")!.addEventListener("click", nextJoke) //el botón en el html lleva una id que sería nextJoke */
function nextJoke() {
    fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(response => response.json())
        .then(json => document.getElementById("theJoke").innerHTML = json.joke)
        .catch(error => console.log(error));
    /* const theJoke: HTMLElement | any = document.getElementById('theJoke') */
}
