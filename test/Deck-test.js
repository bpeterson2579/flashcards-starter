const assert = require('chai').assert;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function() {

  it('should be a function', function() {
    assert.isFunction(Deck);
  });

  it('should be an instance of Deck', function() {
    const deck = new Deck();

    assert.instanceOf(deck, Deck);
  });

  it('should store multiple cards in the deck', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const cards = [card1, card2, card3];

    const deck = new Deck(cards);

    assert.equal(deck.cards, cards);
  });

  it('should count the number of cards in the deck', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const deck = new Deck([card1]);

    assert.equal(deck.countCards(), 1);

    deck.cards.push(card2);

    assert.equal(deck.countCards(), 2);

    deck.cards.push(card3);

    assert.equal(deck.countCards(), 3);
  })
})
