let allWordsGuessed = false;


function checkWord1() {
  var word1input = document.getElementById("word1Input").value;
  var w1 = "AILEEN";
  word1input = word1input.toUpperCase();

  if (word1input === w1) {
    alert("Yan yessyy, it starts with your mamshie syempre! 😘");
    cell11.innerText = "A";
    cell12.innerText = "I";
    cell13.innerText = "L";
    cell14.innerText = "E";
    cell15.innerText = "E";
    cell16.innerText = "N";
    cell17.innerText = "♡";
    cell18.innerText = "♡";
    cell19.innerText = "♡";
    
  } else if (word1input === "") {
    alert("MAMSHIIEE AYUSIN MO! HMP!");
  } else {
    alert("HALAA DI AKO KILALA NG MAMSHIE KO :<");
  }

  
  checkAllWordsGuessed();
}


function checkWord2() {
  var word2input = document.getElementById("word2Input").value;
  var w2 = "BLUE";
  word2input = word2input.toUpperCase();

if (word2input === w2) {
    alert("Awieee, owkie tama! Dami hints eh hmp 🤧");
    cell21.innerText = "♡";
    cell22.innerText = "B";
    cell23.innerText = "L";
    cell24.innerText = "U";
    cell25.innerText = "E";
    cell26.innerText = "♡";
    cell27.innerText = "♡";
    cell28.innerText = "♡";
    cell29.innerText = "♡";
   
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
    cell31.innerText = "Z";
    cell32.innerText = "E";
    cell33.innerText = "R";
    cell34.innerText = "O";
    cell35.innerText = "♡";
    cell36.innerText = "♡";
    cell37.innerText = "♡";
    cell38.innerText = "♡";
    cell39.innerText = "♡";
    
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
    alert("ML gadz yarn? Ge na neeeeext! 😂");
    cell41.innerText = "♡";
    cell42.innerText = "♡";
    cell43.innerText = "♡";
    cell44.innerText = "♡";
    cell45.innerText = "V";
    cell46.innerText = "A";
    cell47.innerText = "L";
    cell48.innerText = "E";
    cell49.innerText = "♡";
    
    
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
    alert("Awiee galing ng mamshie ko ah, nagreview ng notes HAHAHAHA 😤");
    cell51.innerText = "♡";
    cell52.innerText = "♡";
    cell53.innerText = "T";
    cell54.innerText = "I";
    cell55.innerText = "M";
    cell56.innerText = "E";
    cell57.innerText = "♡";
    cell58.innerText = "♡";
    cell59.innerText = "♡";
    
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
    alert("Goodjob mamshie, finally. You know your name naman pala. Chena HAHAHA cutieee mo Mikel Gian Luis!!");
    cell61.innerText = "♡";
    cell62.innerText = "♡";
    cell63.innerText = "♡";
    cell64.innerText = "♡";
    cell65.innerText = "♡";
    cell66.innerText = "L";
    cell67.innerText = "U";
    cell68.innerText = "I";
    cell69.innerText = "S";
    
  }
else if (word6input==="") {
    alert("SUMAGOOOOOOT KAAAA MAMSHIEEEEE!!!");
}

else {
    alert("Mamshie naman, HMP!");
  }
  checkAllWordsGuessed();
}



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
    clickHereButton.style.display = "block"; 
  }
}

function redirectToHBDPage() {
  if (allWordsGuessed) {
    window.location.href = "hbd.html";
  } else {
    alert("WAH! Sagutan mo muna lahaat. Hmp. -,- ");
  }
}
