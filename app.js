const gameContainer = document.getElementById("game");
let clickedTwo = false;
let card1 = '';
let card2 = '';

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

//Implement this function!
function handleCardClick(event) {
  //if havent clicked two cards
  if(clickedTwo !== true){
    
    //if card clicked was not already flipped
    if(!event.target.classList.contains('flip')) {

      //if cards not set
      if(card1 === '' || card2 === ''){
        let clickCard = event.target;
        clickCard.style.backgroundColor = clickCard.classList;
        clickCard.classList.add('flip');
        if(card1 === '')
          card1 = event.target;
        else
          card2 = event.target;
      }

      //Check cards are set and match
      if(card1 !== '' && card2 !== ''){
        if(card1.classList.value === card2.classList.value){
          clickedTwo = true;
          card1.removeEventListener('click', handleCardClick);
          card2.removeEventListener('click', handleCardClick);
          card1 = '';
          card2 = '';
          clickedTwo = false;
         
        }
        else{
          setTimeout(function() {   
            card1.classList.remove('flip');
            card1.style.backgroundColor = 'black';
            card1 = '';

            card2.classList.remove('flip');
            card2.style.backgroundColor = 'black';
            card2 = '';
            clickedTwo = false;
          }, 1000);
         }
      }
    }
  }
}


// when the DOM loads
createDivsForColors(shuffledColors);
