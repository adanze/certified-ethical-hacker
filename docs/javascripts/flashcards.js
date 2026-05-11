document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".flashcard-deck").forEach(initDeck);
});

function initDeck(deck) {
  var cards = shuffleCards(Array.from(deck.querySelectorAll(".flashcard")));
  rerenderShuffled(deck, cards);
  cards.forEach(bindFlipOnClick);
}

function bindFlipOnClick(card) {
  card.addEventListener("click", function (e) {
    if (isChapterLink(e.target)) return;
    card.classList.toggle("flipped");
  });
}

function shuffleCards(cards) {
  for (var i = cards.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = cards[i]; cards[i] = cards[j]; cards[j] = tmp;
  }
  return cards;
}

function rerenderShuffled(deck, cards) {
  cards.forEach(function (card) { deck.appendChild(card); });
}

function isChapterLink(eventTarget) {
  return eventTarget.closest(".fc-link") !== null;
}
