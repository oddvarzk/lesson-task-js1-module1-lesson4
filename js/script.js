const sports = ["golf", "football", "cricket"];

const games = [
    {
        name: "Starcraft 2",
        released: "2010",        
    },
    {
        name: "Age of Empires II",       
    },
    {
        name: "Cyberpunk 2077",
        released: 2020
    }
];

function printSeason(season){

console.log(season);

}

printSeason("summer");

function printNumbers(firstNumber, secondNumber){
    console.log(firstNumber, secondNumber);

}
printNumbers(15, 21);

function addNumbers (numberOne, numberTwo, numberThree){
    const result = numberOne + numberTwo + numberThree; 
    return result;
}
const total = addNumbers(5, 10, 15);

const totalContainer = document.querySelector(".total");
totalContainer.innerHTML = total;

function createGreeting(name){
    const greeting = "Hello, my name is" + name;
    return greeting;
}

const greeting = createGreeting("Oddvardo");

const nameContainer =  document.querySelector("#name");
nameContainer.innerHTML = greeting;

function printListItems (items){
    for(let i =0;  i < items.length; i++){
        console.log(items[i]);
    }
}
printListItems(sports);


function createGames (gamesList){

    let html = "";

    for(let i = 0; i < gamesList.length; i++){

        let releaseYear = "Unknown year";

        if (gamesList[i].released){
            releaseYear = gamesList[i].released;
        }

        html += `<div class="game">
                    <h5>${gamesList[i].name}</h5>
                    <P>Released: ${releaseYear}</p>     
                </div>
                `
    }
    return html;
}

const newHTML = createGames(games);
const gameContainer = document.querySelector(".game-container");

gameContainer.innerHTML = newHTML;