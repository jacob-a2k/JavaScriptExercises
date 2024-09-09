/////////////
/*  ZAD 1,2  */
/* 
const users = [
  //id, name, surname, email, age, value
  [1, "Shauna", "Bradnocke", "sbradnocke0@altervista.org", 20, 108.28],
  [2, "Mela", "Redman", "mredman1@nps.gov", 24, 267.37],
  [3, "Othelia", "Lemon", "olemon2@slashdot.org", 15, 748.06],
  [4, "Meier", "Cockell", "mcockell3@icio.us", 32, 1951.64],
  [5, "Shellysheldon", "Gronowe", "sgronowe4@cnbc.com", 16, 1040.54],
  [6, "Francisca", "Tofanini", "ftofanini5@gnu.org", 21, 1544.08],
  [7, "Cliff", "Underwood", "cunderwood6@addtoany.com", 10, 451.21],
  [8, "Caron", "Falshaw", "cfalshaw7@hugedomains.com", 27, 1968.72],
  [9, "Anitra", "Warters", "awarters8@intel.com", 12, 380.68],
  [10, "Caitrin", "Baudrey", "cbaudrey9@ihg.com", 13, 1385.44],
  [11, "Reginald", "Beavers", "rbeaversa@elegantthemes.com", 15, 1205.52],
  [12, "Marleen", "Aickin", "maickinb@purevolume.com", 20, 1434.1],
  [13, "Lisa", "MacSorley", "lmacsorleyc@ocn.ne.jp", 17, 1567.07],
  [14, "Kimberli", "Berkeley", "kberkeleyd@merriam-webster.com", 19, 1994.97],
  [15, "Tawnya", "Illingworth", "tillingworthe@quantcast.com", 23, 1742.64],
];

const fixData = function (arr) {
  const objectTab = [];
  arr.forEach((tab) => {
    const [id, name, surname, email, age, val] = tab;
    const ob = { id, name, surname, email, age, val };
    objectTab.push(ob);
  });
  return objectTab;
};

const totalAmountOfUsersVal = function (arr) {
  return arr.reduce((acc, cur) => (acc += cur.val), 0);
};

const avgUsersAge = function (arr) {
  return arr.reduce((acc, cur) => (acc += cur.age), 0) / arr.length;
};

const extractEmails = function (arr) {
  return arr.map((ob) => ob.email);
};

const objectsUsers = fixData(users);
console.log(objectsUsers);
console.log(totalAmountOfUsersVal(objectsUsers));
const emailTab = extractEmails(objectsUsers);
console.log(emailTab);
 */
