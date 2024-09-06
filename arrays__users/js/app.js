/////////////
/*  ZAD 1  */
/* 
users.forEach((user) => console.log(`${user.name} -> ${user.email}`));
 */

/////////////
/*  ZAD 2  */
/* 
// const tab = [];
// tab.push(users.filter((user) => user.age >= 18));
// console.log(tab)
console.log(users.filter((user) => user.age >= 18));
 */

/////////////
/*  ZAD 3 */
/* 
console.log(users.filter((user) => user.gender === "female"));
 */

/////////////
/*  ZAD 4 */
/* 
console.log(users.filter((user) => user.tags.includes("dolor")));
 */

/////////////
/*  ZAD 5 */
/* 
console.log(users.every((user) => user.age >= 18));
 */

/////////////
/*  ZAD 6 */
/* 
console.log(users.some((user) => user.age >= 18));
 */

/////////////
/*  ZAD 7 */
/* 
console.log(users.map((user) => user.name.split(" ")[0].toUpperCase()));
 */

/////////////
/*  ZAD 8 */
/* 
const womanNum = users.filter((user) =>
  user.name.split(" ")[0].endsWith("a")
).length;
const manNum = users.length - womanNum;
console.log(womanNum > manNum ? "kobiety wygrywają" : "faceci wygrywają");
 */
