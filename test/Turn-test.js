const assert = require('chai').assert;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {

  it('should be a function', function() {
    assert.isFunction(Turn);
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();

    assert.instanceOf(turn, Turn);
  });

  it('should store the player\'s guess to a question', function() {
    const card = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const turn = new Turn("array", card);

    assert.equal(turn.playerGuess, "array");
  });

  it('should store the card the question is attached to', function() {
    const card = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const turn = new Turn("array", card);

    assert.equal(turn.card, card);
  });

  it('should return the player\'s guess', function() {
    const card = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
    const turn = new Turn("mutator method", card);

    assert.equal(turn.returnGuess(), "mutator method")
  });

  it('should return the card', function() {
    const card = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
    const turn = new Turn("mutator method", card);

    assert.equal(turn.returnCard(), card);
  });

  it('should return a boolean value based on if question was answered correctly', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn1 = new Turn('pug', card);
    const turn2 = new Turn('sea otter', card);

    assert.equal(turn1.evaluateGuess(), false);
    assert.equal(turn2.evaluateGuess(), true);
  });

  it('should let player know if their answer was correct', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn1 = new Turn('pug', card);
    const turn2 = new Turn('sea otter', card);

    turn1.evaluateGuess();
    turn2.evaluateGuess();

    assert.equal(turn1.giveFeedback(), "incorrect!");
    assert.equal(turn2.giveFeedback(), "correct!");
  })
})
