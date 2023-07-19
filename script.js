
  
  // Define the function to check the word
function checkWord1() {
  var word1input = document.getElementById("word1Input").value;
  var w1 = "AILEEN";
  word1input = word1input.toUpperCase();

if (word1input === w1) {
    alert("Okaaaay, that was easy!");
    cell1A.innerText = "A";
    cell1I.innerText = "I";
    cell1L.innerText = "L";
    cell1E.innerText = "E";
    cell1E2.innerText = "E";
    cell1N.innerText = "N";
  } 
 else if (word1input==="") {
    alert("SUMAGOOOOOT KAAAAA!");
 }
else {
    alert("WROOOONG! HMP!");
  }
}

function checkWord2() {
  var word2input = document.getElementById("word2Input").value;
  var w2 = "BLUE";
  word2input = word2input.toUpperCase();

if (word2input === w2) {
    alert("Awieee, owkie tama! :>");
    cell2B.innerText = "B";
    cell2L.innerText = "L";
    cell2U.innerText = "U";
    cell2E.innerText = "E";
   
  } 
else if (word2input==="") {
    alert("SUMAGOOOOOT KAAAAA!");
}
else {
    alert("WROOOONG! HMP!");
  }
}

function checkWord3() {
  var word3input = document.getElementById("word3Input").value;
  var w3 = "ZERO";
  word3input = word3input.toUpperCase();

if (word3input === w3) {
    alert("Huwaw, sigi next. HAHAHA");
    cell3Z.innerText = "Z";
    cell3E.innerText = "E";
    cell3R.innerText = "R";
    cell3O.innerText = "O";
    
  } 
else if (word3input==="") {
    alert("SUMAGOOOOOT KAAAAA!");
}
else {
    alert("WROOOONG! HMP!");
  }
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
}

function checkWord5() {
  var word5input = document.getElementById("word5Input").value;
  var w5 = "TIME";
  word5input = word5input.toUpperCase();

if (word5input === w5) {
    alert("Ameyziing, nagreview.");
    cell5T.innerText = "T";
    cell5I.innerText = "I";
    cell5M.innerText = "M";
    cell5E.innerText = "E";
    
  } else if (word5input==="") {
    alert("SUMAGOOOOOT KAAAAA!");
}
else {
    alert("WROOOONG! HMP!");
  }
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
    alert("SUMAGOOOOOT KAAAAA!");
}

else {
    alert("Mamshie naman, name mo na yan o, HMP!");
  }
}
        
