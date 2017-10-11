// JavaScript Document

var btnone = document.getElementById("play1");

var btntwo = document.getElementById("play2");

btnone.onclick = function(){
  takeaturn();
};

btntwo.onclick = function(){
  takeaturn();
};

function takeaturn(){
  console.log("clicked");
};

/*
let rpsArray = ["rock", "paper", "scissors"];

// (1) Randomly select an element from the array
let rpsRandom = rpsArray[Math.floor(Math.random() * rpsArray.length)];

let paperImage = document.getElementById("paper");

let scissorsImage = document.getElementById("scissors");

// console.log(rpsRandom);


// (2) user clicks on an image

// if array === rock && user === paper, then user wins

function rockImageClick() {
	let rockImage = document.getElementById("rock");
	rockImage.onclick = imageRock;
}

function imageRock() {
    if (rpsRandom === paperImage) {
      console.log("Paper beats rock! Try again!");
    }
}

// if array === rock && user === scissors, then array wins

// if array === scissor && user === paper, then array wins

// if array === scissors && user === rock, then user wins

// if array === paper && user === rock, then user wins

// if array === paper && user === scissors, then array wins
*/

