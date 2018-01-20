// console.log("Up and running!");

var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];
//function for shuffling cards --- first step of createBoard
var shuffle = function(array) {
  var currentIndex = cards.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var cardsInPlay = [];
//check for matching cards once user flips 2 cards
var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
alert("You found a match!");
} else {
alert("Sorry, try again.");
}
}


// flip a card once clicked
var flipCard = function () {
	var cardId = this.getAttribute('data-id');
	//console.log("User flipped " + cards[cardId].rank);
	//console.log(cards[cardId].suit);
	//console.log(cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
if (cardsInPlay.length === 2) {
	checkForMatch();
	}	
}

//create board on page load.  4 cards displayed face down randomly with shuffle function
var createBoard = function() {
	shuffle(cards);

	for (var i = 0; i < cards.length; i++) {
	var cardElement = document.createElement('img');
	cardElement.setAttribute('src', 'images/back.png');
	cardElement.setAttribute('data-id', i);
	cardElement.addEventListener('click', flipCard);
	document.getElementById("game-board").appendChild(cardElement);
}
}


// Develop Play Again for new round


// Keep track of wins/losses

createBoard();








