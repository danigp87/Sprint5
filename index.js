"use strict";
/* document.getElementById("nextJoke")!.addEventListener("click", nextJoke) //el botón en el html lleva una id que sería nextJoke */
const API_URL = "https://icanhazdadjoke.com/api";
function nextJoke() {
    fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(response => response.json())
        .then(json => document.getElementById("theJoke").innerHTML = json.joke)
        .catch(error => console.log(error));
}
const reportJoke = [];
function score(number) {
    var _a;
    const joke = (_a = document.getElementById('theJoke')) === null || _a === void 0 ? void 0 : _a.innerHTML;
    reportJoke.forEach((item, index) => {
        if (item.joke === joke) {
            reportJoke.splice(index, 1);
        }
    });
    const score = number;
    const date = new Date().toISOString();
    const scoredJoke = { joke, score, date };
    reportJoke.push(scoredJoke);
    console.log(reportJoke);
}
