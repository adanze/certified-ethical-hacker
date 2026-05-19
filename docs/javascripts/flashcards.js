document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".flashcard-deck").forEach(initDeck);
});

function initDeck(deck) {
  var cards = shuffleCards(Array.from(deck.querySelectorAll(".flashcard")));
  rerenderShuffled(deck, cards);
  cards.forEach(autoSizeCard);
  cards.forEach(bindFlipOnClick);
}

function autoSizeCard(card) {
  var inner = card.querySelector(".flashcard-inner");
  var front = card.querySelector(".flashcard-front");
  var back  = card.querySelector(".flashcard-back");

  // Temporarily take both faces out of 3D stacking to measure their natural heights
  card.style.height    = "auto";
  inner.style.height   = "auto";
  front.style.position = "relative";
  back.style.position  = "relative";
  back.style.transform = "none";
  back.style.visibility = "hidden";

  var frontH = front.offsetHeight;
  var backH  = back.offsetHeight;

  // Restore CSS-defined styles
  inner.style.height    = "";
  front.style.position  = "";
  back.style.position   = "";
  back.style.transform  = "";
  back.style.visibility = "";

  // Set card to the tallest face (minimum 220 px)
  card.style.height = Math.max(frontH, backH, 220) + "px";
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
  return eventTarget.closest(".flashcard-link") !== null;
}
