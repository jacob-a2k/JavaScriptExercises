/////////////
/*  ZAD 1  */
/* 
class User {
  loginDates = [];
  active = false;

  constructor(nick, name, surname, email, role) {
    this.nick = nick;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.role = role;
  }

  logIn() {
    const date = new Intl.DateTimeFormat("pl-PL", {
      dateStyle: "full",
      timeStyle: "long",
    }).format(new Date());
    console.log(date);
    this.loginDates.push(date);
  }

  showLoginDates() {
    this.loginDates.forEach((date) => console.log(date));
  }

  showDetails() {
    for (const key in this) {
      console.log(`Klucz: ${key}, a wartość ${this[key]}`);
    }
  }

  toggleActive() {
    this.active = this.active === false ? true : false;
  }
}

const jacob = new User(
  "abram",
  "jakub",
  "abramczyk",
  "jakub.a2k@gmail.com",
  "admin"
);

const mateusz = new User(
  "mati",
  "mateusz",
  "bogdan",
  "mat.bog@gmail.com",
  "user"
);
const seba = new User(
  "sebuś",
  "sebastian",
  "rudin",
  "seb.rus@gmail.com",
  "user"
);

jacob.logIn();
// jacob.showLoginDates();
jacob.showDetails();
jacob.toggleActive();
jacob.showDetails();
 */

/////////////
/*  ZAD 2 - NIE ZROBIONE */
/* 
class Fighter {
  constructor(name, live, power) {
    this.name = name;
    this.live = live;
    this.power = power;
  }

  attack(objWho) {
    if (Math.random() < 0.5) objWho.live -= this.power;
    return `${this.name} ${this.live}hp zaatakował ${objWho.name} ${objWho.live}hp`;
  }
}

const getFighter = function (tab) {
  const rand = Math.floor(Math.random() * tab.length);
  console.log(rand);
  return tab[rand];
};

const loop = function () {
  if (koniec) {
    return false;
  }
  setTimeout(() => loop(), 100);
};

const log = [];
const fighters = [];

const baraka = new Fighter("Baraka", 20, 3);
const jax = new Fighter("Jax", 20, 3);
fighters.push(baraka);
fighters.push(jax);

log.push(baraka.attack(jax));
console.log(log);

let leftFighter = null;
let rightFighter = null;
 */

/////////////
/*  ZAD 3  */
/* 
String.prototype.sortText = function (char) {
  const tab = this.split(char);
  tab.sort();
  return tab.join(char);
};

const text = "Marcin-Ania-Piotrek-Beata";
console.log(text.sortText("-"));
 */

/////////////
/*  ZAD 4  */
/* 
String.prototype.mirror = function () {
  const tab = this.split("");
  tab.reverse();
  return tab.join("");
};

const text = "Ala ma kota";
console.log(text.mirror());
 */

/////////////
/*  ZAD 5  */
/* 
Array.prototype.sum = function () {
  return this.reduce((acc, sum) => (acc += sum));
};
console.log([1, 2, 3].sum());

Array.prototype.sortNr = function () {
  return this.sort((a, b) => a - b);
};
const tab = [1, 1.2, 11, 22, 2.1].sortNr();
console.log(tab);
 */
