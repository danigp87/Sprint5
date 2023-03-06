var API_URL = "https://icanhazdadjoke.com/";
console.log(fetch(API_URL)
    .then(function (response) { return response.json(); })
    .then(function (data) { return console.log(data); }));
function nextJoke() {
    var theJoke = document.getElementById('theJoke');
}
