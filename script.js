function checkWord(id, fileName) {
  let input = document.getElementById(id);
  let word = input.value.toUpperCase();
  
  fetch(fileName)
    .then(response => response.text())
    .then(data => {
      if (data.trim().toUpperCase() === word) {
        input.value = word;
        input.disabled = true;
      } else {
        input.value = '';
        alert('Incorrect word!');
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

// Event listeners for each text box
document.getElementById('word1').addEventListener('blur', () => {
  checkWord('word1', 'aileen.txt');
});

document.getElementById('word2').addEventListener('blur', () => {
  checkWord('word2', 'blue.txt');
});

document.getElementById('word3').addEventListener('blur', () => {
  checkWord('word3', 'zero.txt');
});

document.getElementById('word4').addEventListener('blur', () => {
  checkWord('word4', 'vale.txt');
});

document.getElementById('word5').addEventListener('blur', () => {
  checkWord('word5', 'time.txt');
});

document.getElementById('word6').addEventListener('blur', () => {
  checkWord('word6', 'luis.txt');
});￼Enter
