let font = 10;
let yText = 5;
let wordList;
let wordList2;
let cells;
let space;
let wordCounter = 0;
let counter = -15;
let word = 0;
let rand = 0;
let words;
let words2;

function setup() {
  createCanvas(700, 700);
  words = loadStrings("text.txt")
  words2 = loadStrings("wordsnew.txt")
}

function draw() {
  stroke(255);
  textSize(font);
  // textWrap(CHAR);

  wordList = isProperNoun(words);
  wordList2 = isProperNoun(words2);


  // cells = 100;

  noFill();
  strokeWeight(1);
  background(0 + wordList[wordCounter].length * 3);


  if (frameCount % 20 === 0) {
    wordCounter++;
    counter++;
    console.log(counter);
  }

  if (counter > height) {
    counter = 0;
  }

  if (wordCounter > wordList.length) {
    wordCounter = 0;
  }




  for (let i = 0; i < width; i += 50) {
    for (let j = 0; j < height; j += 50) {

      if (counter < 150) {
        rand = random(0, 3);
      } else {
        rand = random(0, 3);
      }

      // text(wordList[wordCounter + i], 3 + i, j + 25 + counter + rand, 50);

      text(wordList2[wordCounter + j + i], 3 + i, j + counter + rand, 30);

    }
  }


  // noStroke();
  strokeWeight(0.2);

  for (let i = 0; i < 700; i += 10) {
    for (let j = 0; j < 700; j += 10) {
      rect(i, j, 10, 10);
    }
  }



}

function isProperNoun(text) {

  let caps = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  let lowers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  let propers = [];

  let propersCut = [];

  let arr = text.toString().toUpperCase().split(" ");

  let cut = [];

  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i].length < 5 && arr[i].length > 2) {
  //     cut.push(arr[i]);
  //   }
  // }

  // for (let i = 0; i < arr.length; i++) {
  //   if (caps.includes(arr[i][0]) && lowers.includes(arr[i].slice(- 1)) && arr[i].length > 3) {
  //     propers.push(arr[i].toUpperCase());
  //   }
  // }

  // for (let i = 0; i < propers.length; i++) {
  //   if (lowers.includes(propers[i].slice(- 1))) {
  //     propersCut.push(propers[i]);
  //   }
  // }

  return arr;
}