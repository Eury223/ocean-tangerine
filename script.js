function checkWord(wordId, inputId) {
  const answers = {
    word1: "A",
    word2: "B",
    word3: "C"
  };

  const letterId = wordId.replace("word", "letter");
  const letterCell = document.getElementById(letterId);
  const wordInput = document.getElementById(inputId);

  if (answers[wordId] === wordInput.value.toUpperCase()) {
    if (letterCell.innerHTML === wordInput.value.toUpperCase()) {
      alert("Word already matched!");
    } else {
      letterCell.innerHTML = wordInput.value.toUpperCase();
      wordInput.value = "";
      alert("Word matched!");
    }
  } else {
    alert("Word does not match the answer!");
  }
}
