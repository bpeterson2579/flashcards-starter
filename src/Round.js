const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turnsTaken = 0;
    this.currentCard = this.deck[0];
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    this.turnsTaken ++;
    let turn = new Turn(guess, this.deck[0]);
    turn.evaluateGuess();
  }

  endRound() {

  }
}

module.exports = Round;
