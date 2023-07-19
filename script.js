function checkWord(wordId) {
  const letters = {
    word1: "AILEEN",
    word2: "BLUE",
    word3: "ZERO"
  };

  const letterId = wordId.replace("word", "letter");
  const letterCell = document.getElementById(letterId);
  const wordButton = document.getElementById(wordId);

  if (letters[wordId] === letterCell.innerHTML) {
    alert("Word already matched!");
  } else {
    if (letters[wordId]) {
      letterCell.innerHTML = letters[wordId];
      wordButton.disabled = true;
      alert("Word matched!");
    } else {
      alert("Word not found!");
    }
  }
}
