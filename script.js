// Define a global variable to keep track of correct guesses
let allWordsGuessed = false;

// Define the function to check the word
function checkWord1() {
  var word1input = document.getElementById("word1Input").value;
  var w1 = "AILEEN";
  word1input = word1input.toUpperCase();

  if (word1input === w1) {
    alert("Yan yessyy, it starts with your mamshie syempre! :*");
    cell1A.innerText = "A";
    cell1I.innerText = "I";
    cell1L.innerText = "L";
    cell1E.innerText = "E";
    cell1E2.innerText = "E";
    cell1N.innerText = "N";
  } else if (word1input === "") {
    alert("MAMSHIIEE AYUSIN MO! HMP!");
  } else {
    alert("HALAA DI AKO KILALA NG MAMSHIE KO :<");
  }

  // After updating the word1, check if all words are guessed correctly
  checkAllWordsGuessed();
}

// Define the functions for checking other words (checkWord2, checkWord3, etc.)
// ...

function checkWord2() {
  var word2input = document.getElementById("word2Input").value;
  var w2 = "BLUE";
  word2input = word2input.toUpperCase();

if (word2input === w2) {
    alert("Awieee, owkie tama! Dami hints eh hmp :>");
    cell2B.innerText = "B";
    cell2L.innerText = "L";
    cell2U.innerText = "U";
    cell2E.innerText = "E";
   
  } 
else if (word2input==="") {
    alert("AH SIGEEEE!?!");
}
else {
    alert("WROOOONG! HMP!");
  }
  checkAllWordsGuessed();
}



function checkWord3() {
  var word3input = document.getElementById("word3Input").value;
  var w3 = "ZERO";
  word3input = word3input.toUpperCase();

if (word3input === w3) {
    alert("Zero syempre, there's only you. One and only mamshie ko 🤗");
    cell3Z.innerText = "Z";
    cell3E.innerText = "E";
    cell3R.innerText = "R";
    cell3O.innerText = "O";
    
  } 
else if (word3input==="") {
    alert("MAMSHIEE SUMAGOOOT KAAA!!");
}
else {
    alert("IHHH BAT MALI!? :<");
  }
  checkAllWordsGuessed();
}



function checkWord4() {
  var word4input = document.getElementById("word4Input").value;
  var w4 = "VALE";
  word4input = word4input.toUpperCase();

if (word4input === w4) {
    alert("ML gadz yarn? Ge na next!");
    cell4V.innerText = "V";
    cell4A.innerText = "A";
    cell4L.innerText = "L";
    cell4E.innerText = "E";
    
  }
else if (word4input==="") {
    alert("SUMAGOOOOOT KAAAAA!");
}
else {
    alert("WROOOONG! HMP!");
  }
  checkAllWordsGuessed();
}



function checkWord5() {
  var word5input = document.getElementById("word5Input").value;
  var w5 = "TIME";
  word5input = word5input.toUpperCase();

if (word5input === w5) {
    alert("Awiee galing ng mamshie ko ah, nagreview ng notes HAHAHAHA");
    cell5T.innerText = "T";
    cell5I.innerText = "I";
    cell5M.innerText = "M";
    cell5E.innerText = "E";
    
  } else if (word5input==="") {
    alert("Halaa lagyan mo po sagot aba");
}
else {
    alert("WROOOONG! HMP!");
  }
  checkAllWordsGuessed();
}



function checkWord6() {
  var word6input = document.getElementById("word6Input").value;
  var w6 = "LUIS";
  word6input = word6input.toUpperCase();

if (word6input === w6) {
    alert("Goodjob mamshie, u know your name naman pala. Chena HAHAHA");
    cell6L.innerText = "L";
    cell6U.innerText = "U";
    cell6I.innerText = "I";
    cell6S.innerText = "S";
    
  }
else if (word6input==="") {
    alert("SUMAGOOOOOOT KAAAA MAMSHIEEEEE!!!");
}

else {
    alert("Mamshie naman, HMP!");
  }
  checkAllWordsGuessed();
}




// Function to check if all words are guessed correctly
function checkAllWordsGuessed() {
  const words = ["AILEEN", "BLUE", "ZERO", "VALE", "TIME", "LUIS"];
  let allGuessed = true;

  for (let i = 0; i < words.length; i++) {
    const wordInput = document.getElementById("word" + (i + 1) + "Input").value.toUpperCase();
    if (wordInput !== words[i]) {
      allGuessed = false;
      break;
    }
  }

  if (allGuessed) {
    allWordsGuessed = true;
    const clickHereButton = document.getElementById("clickHereButton");
    clickHereButton.style.display = "block"; // Show the button
  }
}

// Function to handle the "Click Here" button click
function redirectToHBDPage() {
  if (allWordsGuessed) {
    window.location.href = "hbd.html";
  } else {
    alert("WAH! Sagutan mo muna lahaat. Hmp. -,- ");
  }
}
