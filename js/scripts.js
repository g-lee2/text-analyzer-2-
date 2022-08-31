function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const textArray = text.split(" ");
  textArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  const textArray = text.split(" ");
  let wordCount = 0;
  textArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}

function includesRarestLetter(word) {
  if (word.toLowerCase().includes("q")) {
    return true;
  }
  return false;
}

function detectOffensiveWords(text) {
  const newArray = [];
  const offensiveWords = "zoinks";
  const offensiveWords1 = "muppeteer";
  const offensiveWords2 = "biffaroni";
  const offensiveWords3 = "loopdaloop";
  const textArray = text.split(" ");
  for (let i = 0; i < textArray.length; i++) {
    if (textArray[i].includes(offensiveWords || offensiveWords1 || offensiveWords2 || offensiveWords3)) {
      return 
    } 
  }
  return false;
}


let text = "apple zoinks pie muppeteer scrum loopdaloo"
let offensiveWords = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"]

function hasBadWord(input){
  return offensiveWords.some(function(offensiveWord) {
      return input.toLowerCase().includes(offensiveWord);
  });
  }

  