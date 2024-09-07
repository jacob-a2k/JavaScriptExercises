/////////////
/*  ZAD 1  */
/* 
console.log(cities.length);
 */

/////////////
/*  ZAD 2  */
/* 
const total = cities.reduce((total, city) => total + city.people, 0);
console.log(`W ${cities.length} jest ${total}`);
 */

/////////////
/*  ZAD 3  */
/* 
const cityOver1000People = cities.filter((city) => city.people > 10_000);
console.log(cityOver1000People[0]);
 */

/////////////
/*  ZAD 4 */
/* 
const avg = cities.reduce((acc, cur) => acc + cur.people, 0) / cities.length;
const tab = cities.filter((city) => city.people > avg);
console.log(avg);
console.log(tab);
 */

/////////////
/*  ZAD 5 */
/* 
const allCitiesOver1000People = cities
  .filter((city) => city.people > 10_000)
  .map((city) => city.name);
console.log(allCitiesOver1000People);
 */

/////////////
/*  ZAD 6 */
/* 
const city10_000Plus = cities.filter((city) => city.people > 10_000).length;
console.log(city10_000Plus);
const city10_000Minus = cities.filter((city) => city.people < 10_000).length;
console.log(city10_000Minus);
if (
  city10_000Plus > city10_000Minus
    ? console.log("Wiecej jest miast 10_000+")
    : console.log("Więcej jest miast mniejszych niż 10_000")
);
 */
