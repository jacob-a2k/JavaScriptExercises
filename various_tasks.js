////////////
/*  ZAD 1 */
/* 
const countWord = function (text) {
  const sumOfWords = text.split(" ").length;
  console.log(sumOfWords);
  return sumOfWords;
};

const printSentence = function (text) {
  if (text.length === 0) {
    console.log("Nie ma co liczyć!");
  } else {
    const textSize = countWord(text);
    console.log(`Tekst '${text}' skłąda się z ${textSize} wyrazów `);
  }
};

const userText = prompt("Wpisz przykładowy text");
printSentence(userText);
 */

////////////
/*  ZAD 2 */
/* 
const transformToLower = function (name) {
  return name.toLowerCase();
};

const changeLetterToUpper = function (letter) {
  return letter.toUpperCase();
};

const fixName = function (name) {
  const lowerCaseName = transformToLower(name);
  const firstUpperLetter = changeLetterToUpper(lowerCaseName[0]);
  return firstUpperLetter + lowerCaseName.slice(1);
};

const printText = function (name) {
  if (name.length === 0) console.log("nic nie wpisano");
  else {
    const finalName = fixName(name);
    console.log(`Imię ${finalName} rozpoczyna się od litery ${finalName[0]}`);
  }
};

const userName = prompt("Podaj swoje imię");
printText(userName);
 */

////////////
/*  ZAD 3 */
/* 
const fileInfo = function (file) {
  if (!file.includes(".")) return false;
  const [name, extension] = file.split(".");
  return [name, extension];
};

let [name, extension] = fileInfo("jakub.a2k");
 */

////////////
/*  ZAD 4 */
/* 
const generateID = function (size) {
  const lib = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "ł",
    "m",
    "n",
    "o",
    "p",
    "r",
    "s",
    "t",
    "u",
    "w",
    "x",
    "y",
    "z",
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "!",
    "@",
    "3#",
    "$",
    "5",
    "^",
    "&",
    "*",
  ];
  let ID = "";
  for (let i = 0; i < size; i++) {
    const firstChar = lib[Math.floor(Math.random() * (lib.length - 0 + 1) + 0)];
    ID += firstChar;
  }
  return ID;
};

console.log(generateID(20));
 */

////////////
/*  ZAD 5 */
/* 
const printNr = function (nr) {
  let text = "";
  for (let i = 1; i <= nr; i++) {
    text += i;
  }
  console.log(text);
};

const nr = Number(prompt("Podaj liczbe"));
printNr(nr);
 */

////////////
/*  ZAD 6 */
/* 
const tmp = function (userName, month) {
  text = "";
  switch (month) {
    case "grudzień":
    case "styczeń":
    case "luty":
      text = "jeżdzi na sankach";
      break;
    case "marzec":
    case "kwiecień":
    case "maj":
      text = "chodzi po kaluzach";
      break;
    case "czerwiec":
    case "lipiec":
    case "sierpień":
      text = "się opala";
      break;
    case "wrzesień":
    case "październik":
    case "listopad":
      text = "zbiera liście";
      break;
    default:
      text = "uczy się JS";
      break;
  }
  return `${userName} ${text}`;
};

console.log(tmp("Jakub", "marzec"));
 */

////////////
/*  ZAD 7 */
/* 
const generateRand = function (min, max, size) {
  const tmp = [];
  let count = 0;
  for (let i = 0; i < 10; i++) {
    const num = Math.floor(Math.random() * (max - min + 1) + min);
    tmp.push(num);
    if (num > 10) count++;
  }
  console.log(count);
  if (count < size / 2) console.log("Nie dało się :(");
  else {
    console.log("Udało się :)");
  }
};
generateRand(1, 20, 10);
 */

////////////
/*  ZAD 8 */
/* 
const randNum = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const generateRandTable = function (min, max, count) {
  for (let i = 0; i < count; i++) {
    let num = String(randNum(min, max));
    console.log(num.padStart(10, "_"));
  }
};

generateRandTable(10, 100000, 5);
 */

////////////
/*  ZAD 9 */
/* 
const strToArr = function (str, splitChar) {
  return str.split(splitChar);
};

const toLower = function (arr) {
  const newArr = [];
  arr.forEach((text) => newArr.push(text.toLowerCase()));
  return newArr;
};

const titleFirstLetter = function (arr) {
  const newArr = [];
  arr.forEach((text) => newArr.push(text[0].toUpperCase() + text.slice(1)));
  return newArr;
};

const sortStr = function (str) {
  const arr = strToArr(str, "|");
  const arrWithSmallWords = toLower(arr);
  const sortedArr = arrWithSmallWords.sort();
  const finalArr = titleFirstLetter(sortedArr);

  return finalArr.join("|");
};

const str = "Ania|Marcin|Bartek|Piotr|Kuba|Beata|Agnieszka";
console.log(sortStr(str));
 */

////////////
/*  ZAD 10 */
/* 
const printBorderText = function (text, maxSize) {
  if (text.length > 21) {
    text = text.slice(0, 21);
  } else if (text.length < 21) {
    text = text.padEnd(21, ".");
  }
  console.log("╔═══════════════════════╗");
  console.log(`║ ${text} ║`);
  console.log("╚═══════════════════════╝");
};

printBorderText("To jest jakiś tekst");
 */

////////////
/*  ZAD 11 */
/* 
const validateNum = function (num) {
  if (num < 1 || num > 1000) return false;
  if (typeof num !== "number") return false;
  return true;
};

const min = 1;
const max = 1000;

const userNum = Number(prompt("Podaj liczbe z przedziału 1-1000"));
if (validateNum(userNum)) {
  let counter = 1;
  let rand = Math.floor(Math.random() * (max - min + 1) + min);
  while (rand !== userNum) {
    rand = Math.floor(Math.random() * (max - min + 1) + min);
    counter++;
  }
  console.log(`Program odgadł twoją liczbe w ${counter} próbie`);
}
 */

////////////
/*  ZAD 12 */

// const checkFemale = function (sex) {
//   if (sex[sex.length - 1] === "a") return true;
//   return false;
// };

// // console.log(checkFemale("ania"));
// // console.log(checkFemale("marcin"));
// // console.log(checkFemale("jakub"));
// // console.log(checkFemale("kasia"));

// const countWoman = function (arr) {
//   let counter = 0;
//   arr.forEach((person) => {
//     const [firstName, lastName] = person.split(" ");
//     if (firstName.endsWith("a")) counter++;
//   });
//   return counter;
// };

// const users = [
//   "Ania Nowak",
//   "Piotr Kowalski",
//   "Bartek Kosecki",
//   "Natalia Nowak",
//   "Weronika Piotrowska",
//   "Agata Karolak",
//   "Tomasz Nowak",
//   "Mateusz Kowalski",
//   "Marcin Kotecki",
//   "Beata Lecka",
//   "Katarzyna Małecka",
// ];
// console.log(countWoman(users));

////////////
/*  ZAD 13 */
/* 
const monthName = function (num) {
  const tab = [
    "styczeń",
    "luty",
    "marzec",
    "kwiecień",
    "maj",
    "czerwiec",
    "lipiec",
    "sierpień",
    "wrzesień",
    "październik",
    "listopad",
    "grudzień",
  ];
  if (num > 0 && num < 13 && typeof num === "number") {
    return tab[num - 1];
  }
  return false;
};

console.log(monthName(23));
console.log(monthName("2da3"));
console.log(monthName(2));
console.log(monthName(12));
 */

////////////
/*  ZAD 14 */
/* 
const isPalindrome = function (word) {
  const copy = [...word].reverse();
  for ([index, el] of copy.entries()) {
    if (el !== word[index]) return false;
    return true;
  }
};

console.log(isPalindrome("pies"));
console.log(isPalindrome("kajak"));
 */

////////////
/*  ZAD 15 */
/* 
const mixText = function (text) {
  const newText = text.split("");
  for (let i = 0; i < Math.floor(newText.length / 2); i++) {
    const rand = Math.floor(Math.random() * (newText.length - 1 - 0 + 1) + 0);
    newText[rand] = newText[rand].toUpperCase();
  }
  return newText.join("");
};

const bigText = function (tab) {
  return tab.map((el) => el.toUpperCase());
};
const smallText = function (text) {
  return tab.map((el) => el.toLowerCase());
};
const mixNames = function (tab) {
  return tab.map((el) => mixText(el));
};

console.log(mixText("ala ma kota"));
const tab = ["Ania", "Marcin", "Bartek", "Piotr"];

console.log(smallText(tab));
console.log(bigText(tab));
console.log(mixNames(tab));
 */

////////////
/*  ZAD 16 */
/* 
const arrSummatyArray = function (tab) {
  const set = new Set(tab);
  const ob = {};
  ob.sum = tab.reduce((acc, num) => acc + num);
  set.forEach((el) => {
    ob[`${el}`] = tab.filter((x) => x == el).length;
  });
  return ob;
};

const tab = [1, 3, 5, 7, 3, 5, 5, 1, 7, 8, 4, 3, 4, 2, 2, 1];
const ob = arrSummatyArray(tab);
console.log(ob);
 */

////////////
/*  ZAD 17 */
/* 
const printText = function (text) {
  console.log(`${counter}. {${text}}`);
  counter++;
};

const logText = function (text) {
  let counter = 1;
  function printText(text) {
    console.log(`${counter}. ${text}`);
    counter++;
  }
  printText(text);
  printText(text);
};

logText("To jest przykładowy text");
 */
