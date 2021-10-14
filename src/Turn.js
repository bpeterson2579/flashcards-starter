const Card = require('../src/Card');

class Turn {
  constructor(guess, card) {
    this.playerGuess = guess,
    this.card = card
  }

  returnGuess() {
    return this.playerGuess;
  }

  returnCard() {
    return this.card;
  }

  evaluateGuess() {
    if(this.playerGuess === this.card.correctAnswer) {
      return true;
    }else {
      return false;
    }
  }

  giveFeedback() {
    if(this.evaluateGuess()) {
      return 'correct!';
    }else {
      return 'incorrect!';
    }
  }
}

module.exports = Turn;