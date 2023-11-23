
console.log("Hello Sir welcome to the Pediredla's Casino");
let player = {
    Name : "Sarath",
    Chips :619
}
let cards = [] //array -oredred list of item
let sum = 0
let hasBlackJack = false
var isAlive = false
let message = ''
//DOM elements 
var messageEl = document.getElementById("message-el")
var sumEl = document.getElementById('sum-el')
//var sumEl = document.querySelector('#sum-el')
var cardsEl = document.getElementById('cards-el')
let playerEl = document.getElementById("player-El")
playerEl.textContent = player.Name + ": $" + player. Chips

function randomNumber(){
    let ranNum = Math.floor(Math.random() * 13) + 1 //we generate 1-13
    if (ranNum > 10){
        return 10
    }else if (ranNum === 1){
        return 11
    }else {
        return ranNum
    }
}
var randomcard = randomNumber()
function playGame(){
    isAlive = true
    let firstcard =randomNumber();
    let secondcard =randomNumber();
    let cards = [firstcard, secondcard]
    let sum = firstcard + secondcard 
    renderGame()
 }
function renderGame(){
    sumEl.textContent = "Sum:"  + sum
    cardsEl.textContent = "Cards:"

    for (let i = 0; i< cards.length; i++){//for loop for render out all cards
        cardsEl.textContent+= cards[i] + " "
    }
    if (sum <= 20){
        message = ("Do you want to draw a new card?");
    } else if(sum === 21){
        message = ('Yay you got Blackjack!');
        hasBlackJack=true
        }else{
            message = ('you Busted!')
            isAlive = false
    }
    messageEl.textContent = message
} 
function newcard(){
    if(isAlive===true || hasBlackJack===flase){
    let card = randomNumber()
    sum+= card
    cards.push(card)
    console.log(cards)
   renderGame()
}
}

