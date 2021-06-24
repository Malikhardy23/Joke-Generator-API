// variables 
const jokeText = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");


// Listen for button clicks, then generate jokes
jokeBtn.addEventListener("click", generateJokes);

// generate jokes function

generateJokes();

async function generateJokes(){
    const res = await fetch(
        "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit"
    )
    const data = await res.json();
    console.log(data);
    console.log(data.joke);
    console.log(data.delivery);
    let joke = ""
    if(data.joke == undefined){
        joke = `${data.setup} <br /> ${data.delivery}`
    } else {
        joke = data.joke
    }
    jokeText.innerHTML = joke
}