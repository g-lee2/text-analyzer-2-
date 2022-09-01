// Utility Logic

function isEmpty(testString) {
  return (testString.trim().length === 0);
}

// Business Logic

function wordCounter(text) {
  if (isEmpty(text)) {
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
  if (isEmpty(word)) {
    return 0;
  }
  const textArray = text.split(" ");
  let wordCount = 0;
  textArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}

function detectOffensiveWords(text) {
  let deleteCount = 1;
  let newTextArray = [];
  const textArray = text.split(" ");
  for (let i = 0; i < textArray.length; i++) {
    if (textArray[i].toLowerCase().includes("zoinks")) {
      textArray.splice(i, deleteCount)
    } 
  }
  for (let i = 0; i < textArray.length; i++) {
    if (textArray[i].toLowerCase().includes("muppeteer")) {
      textArray.splice(i, deleteCount)
    } 
  }
  for (let i = 0; i < textArray.length; i++) {
    if (textArray[i].toLowerCase().includes("biffaroni")) {
      textArray.splice(i, deleteCount)
    } 
  }
  for (let i = 0; i < textArray.length; i++) {
    if (textArray[i].toLowerCase().includes("loopdaloop")) {
      textArray.splice(i, deleteCount)
      newTextArray.push(textArray)
    }
  }
  return newTextArray.toString().replaceAll(',' , ' ');
}

// UI Logic

function boldPassage(word, text) {
  if (isEmpty(word) || isEmpty(text)) {
    return null;
  }
  const p = document.createElement("p");
  let textArray = text.split(" ");
  textArray.forEach(function(element, index) {
    if (word === element) {
      const bold = document.createElement("strong");
      bold.append(element);
      p.append(bold);
    } else {
      p.append(element);
    }
    if (index !== (textArray.length - 1)) {
      p.append(" ");
    }
  });
  return p;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const passage = document.getElementById("text-passage").value;
  const word = document.getElementById("word").value;
  const wordCount = wordCounter(passage);
  const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
  const newText = detectOffensiveWords(passage);
  document.getElementById("total-count").innerText = wordCount;
  document.getElementById("selected-count").innerText = occurrencesOfWord;
  document.getElementById("new-text").innerText = newText;
  let boldedPassage = boldPassage(word, passage);
  if (boldedPassage) {
    document.querySelector("div#bolded-passage").append(boldedPassage);
  } else {
    document.querySelector("div#bolded-passage").innerText = null;
  }
}

window.addEventListener("load", function() {
  document.querySelector("form#word-counter").addEventListener("submit", handleFormSubmission);
});

// let text = "apple ZOINKS pie muppeteer scrum loopdaloop HELLO zoinks point LOOPDALOOP"
// offensiveWords = "zoinks", "muppeteer", "biffaroni", "loopdaloop"

