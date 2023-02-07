"use strict";
// let homePts = document.getElementById("home-btn");
// let guestPts = document.getElementById("guest-btn");
// let homeAddPoints1 = document.querySelector(".homeadd-1");
// let homeAddPoints2 = document.querySelector(".homeadd-2");
// let homeAddPoints3 = document.querySelector(".homeadd-3");
// let guestAddPoints1 = document.querySelector(".guestadd-1");
// let guestAddPoints2 = document.querySelector(".guestadd-2");
// let guestAddPoints3 = document.querySelector(".guestadd-3");
// let homeCount = 0;
// let guestCount = 0;
// let newGame = document.getElementById("last");
// let WordText = document.querySelector("#WordText")


// function homeAddPoint() {
//   homeCount ++;
//   homePts.innerText = homeCount;
// }
// homeAddPoints1.addEventListener("click", homeAddPoint);

// function homeAddPointss2() {
//   homeCount += 2;
//   homePts.innerText = homeCount;
// }
// homeAddPoints2.addEventListener("click", homeAddPointss2);

// function homeAddPointxs3() {
//   homeCount += 3;
//   homePts.innerText = homeCount;
// }
// homeAddPoints3.addEventListener("click", homeAddPointxs3);

// function guestAddPoints() {
//   guestCount++
//   guestPts.innerText = guestCount;
// }
// guestAddPoints1.addEventListener("click", guestAddPoints);

// function guestAddPointss2() {
//   guestCount += 2 
//   guestPts.innerText = guestCount;
// }
// guestAddPoints2.addEventListener("click", guestAddPointss2);

// function guestAddPointss3() {
//   guestCount += 3
//   guestPts.innerText = guestCount;
// }
// guestAddPoints3.addEventListener("click", guestAddPointss3);

// function defaultScore() {
//     homePts.innerText = 0
//     guestPts.innerText = 0
//      homeCount = 0;
//      guestCount = 0;
// }
// newGame.addEventListener("click", defaultScore);


// function counting1(){
//    let homeCount = Math.ceil(Math.random() *5)
//     homePts.innerText = homeCount;
//    let guestCount = Math.ceil(Math.random()*5)
//  guestPts.innerText = guestCount;
// }


// if ( homeCount < guestCount) {
//     WordText.innerText ='player 2 wins'
//     console.log(WordText.innerText);
    
// }


// else{
//     WordText.innerText= 'play1 wins'
// }
// newGame.addEventListener("click", counting1);
let zeroHome = document.querySelector('#home-btn');
console.log(zeroHome);
let zeroGuest = document.querySelector('#guest-btn');
console.log(zeroGuest);
let pressPlay = document.querySelector('#last');
console.log(pressPlay);
let play = document.querySelector('#WordText')

function getRandom(){
    let random = Math.ceil(Math.random() * 5)
    zeroHome.innerText = random;
    let secRandom = Math.ceil(Math.random() *5)
    zeroGuest.innerText = secRandom;
    if (random > secRandom ) {
        play.innerText = 'Home is the winner'
        
    }else if(random == secRandom){
        play.innerText = 'DRAW'
    }
    else{
        play.innerText = 'Guest is the winner'
    }
}
pressPlay.addEventListener('click', getRandom)
