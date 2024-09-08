/////////////
/*  ZAD 1  */
/* 
const rectangle = {
  height: 2,
  width: 4,

  showArea() {
    console.log(`Kwadrat ma szerokość ${this.width} i wysokość ${this.height}`);
    console.log(`Jego pole to ${this.height * this.width} m3`);
  },
};

const circle = {
  radius: 4,
  showArea() {
    console.log(`Koło ma promień ${this.radius}`);
    console.log(`Jego pole to ${Math.PI * this.radius ** 2} m3`);
  },
};

rectangle.showArea();
circle.showArea();
 */

/////////////
/*  ZAD 2  */
/* 
const currentUser = {
  name: "imie",
  surname: "nazwisko",
  email: "jak.tak@nijak.pl",
  wwww: "nijak.com",
  userType: "amateur",
  isActive: true,

  show() {
    console.log(
      `${this.name} ${this.surname} ${this.email} ${this.wwww} ${this.userType} ${this.isActive}`
    );
  },

  setActive(active) {
    this.isActive = active;
  },
};

currentUser.show();
console.log(currentUser.isActive);
currentUser.setActive(false);
console.log(currentUser.isActive);
 */

/////////////
/*  ZAD 3  */
/* 
const book = {
  title: "title..",
  author: "author..",
  pageCount: "count..",
  publisher: "publisher..",

  showDetails() {
    for (const key in this) {
      if (this.hasOwnProperty(key) && typeof this[key] !== "function") {
        console.log(key, this[key]);
      }
    }
  },

  showKeys() {
    for (let key of Object.keys(this)) {
      console.log(key);
    }
  },

  showValues() {
    for (let val of Object.values(this)) {
      console.log(val);
    }
  },

  showKeyAndValues() {
    for (let [key, val] of Object.entries(this)) {
      console.log(`Key: ${key} and Value: ${val}`);
    }
  },
};

book.showDetails();
console.log("----------------------");
book.showKeys();
console.log("----------------------");
book.showValues();
console.log("----------------------");
book.showKeyAndValues();
 */

/////////////
/*  ZAD 4  */
/* 
const spaceShip = {
  name: "Enterprise",
  currentLocation: "Earth",
  flyDistance: 0,

  flyTo(place, distance) {
    this.currentLocation = place;
    this.flyDistance += distance;
  },

  showInfo() {
    console.log(`Informacje o statku
      ----
      Statek ${this.name}
      doleciał do miejsca ${this.currentLocation}
      Statek przeleciał już całkowity dystans ${this.flyDistance}`);
  },

  meetClingon() {
    let positive = [];
    let negative = [];
    for (let i = 0; i < 100; i++) {
      const rand = Math.round(Math.random());
      // console.log(rand);
      if (rand) {
        positive.push(rand);
      } else {
        negative.push(rand);
      }
    }
    let text = `Statek ${this.name} będący w okolicy ${this.currentLocation} `;
    text +=
      positive.length > negative.length
        ? `zwycięsko wyszedł ze spotkania z Klingonami`
        : `został pokonany przez Klingonów`;

    console.log(text);
  },
};

spaceShip.meetClingon();
 */

/////////////
/*  ZAD 5  */
/* 
const book = {
  users: [],

  addUser(name, age, phone) {
    this.users.push({
      name: name,
      age: age,
      phone: phone,
    });
  },

  showUsers() {
    console.log(`Wszyscy użytkownicy w książce:`);
    this.users.forEach((user) => console.log(user.name));
  },

  findByName(name) {
    return this.users.filter((user) => user.name === name)[0] || false;
  },

  findByPhone(phone) {
    return this.users.filter((user) => user.phone === phone)[0] || false;
  },

  getCount() {
    return this.users.length;
  },
};

book.addUser("jakub", 24, 777888999);
book.showUsers();
console.log(book.getCount());
 */

/////////////
/*  ZAD 6  */
/* 
const tableGenerator = {
  randNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },

  generateIncTable(nr) {
    const arr = [];
    for (let i = 0; i <= nr; i++) {
      arr.push(i);
    }
    return arr;
  },

  generateRandomTable(size, min, max) {
    const arr = [];
    for (let i = 0; i < size; i++) {
      arr.push(this.randNum(min, max));
    }
  },

  generateTableFromText(str) {
    return typeof str !== "string" ? [] : str.split(" ");
  },

  getMaxFromTable(arr) {
    return Math.max(...arr);
  },

  getMinFromTable(arr) {
    return Math.min(...arr);
  },

  delete(arr, index) {
    arr.splice(index, 1);
    console.log(arr);
  },
};

const tab = [1, 2, 3, 4, 5];
tableGenerator.delete(tab, 2);
 */

/////////////
/*  ZAD 7  */
/* 
const text = {
  check(txt, word) {
    return txt.split(" ").includes(word);
  },

  getCount(txt) {
    return txt.length;
  },

  getWordsCount(txt) {
    return txt.split(" ").length;
  },

  setCapitalize(txt) {
    return txt.split(" ").map((word) => word[0].toUpperCase() + word.slice(1));
  },

  setMix(txt) {
    let mixText = "";
    for (let i = 0; i < txt.length; i++) {
      if (i % 2 === 0) mixText += txt[i].toUpperCase();
      else mixText += txt[i].toLowerCase();
    }
    return mixText;
  },

  generateRandom(size) {
    let randText = "";
    while (size) {
      randText += String.fromCharCode(
        Math.floor(Math.random() * (122 - 97 + 1) + 97)
      );
      size--;
    }
    return randText;
  },
};

// const tmp = text.setMix("ala ma kota");
// console.log(tmp);

const randText = text.generateRandom(4);
console.log(randText);
 */
