/////////////
/*  ZAD 1  */
/* 
console.log(countries.map((country) => country.name));
console.log(countries.reduce((acc, cur) => acc + cur.population, 0));
 */

/////////////
/*  ZAD 2  */
/* 
console.log(
  countries
    .map((country) => country.population)
    .reduce((acc, cur) => acc + cur, 0) / countries.length
);
*/

/////////////
/*  ZAD 3  */
/* 
console.log(countries.filter((country) => country.grow > 0).length);
 */

/////////////
/*  ZAD 4 */
/* 
console.log(countries.filter((country) => country.grow < 0).length);
 */

/////////////
/*  ZAD 5 */
/* 
console.log(countries.reduce((acc, cur) => acc + cur.world_area_in_percent, 0));
 */

/////////////
/*  ZAD 6 */
/* 
const countryWithFertility = countries.filter(
  (country) => country.fertility_rate != null
);

const avgFertility = countries.reduce(
  (acc, cur) => acc + cur.fertility_rate,
  0
);
console.log(avgFertility / countryWithFertility.length);
 */

/////////////
/*  ZAD 7 */
/* 
console.log(
  countries.reduce((acc, cur) => acc + cur.medium_age, 0) / countries.length
);
 */
/////////////
/*  ZAD 8 */
/* 
countries.forEach((country) => {
  if (country.name === "Poland") console.log(country);
});
 */

/////////////
/*  ZAD 9 */
/* 
console.log(
  countries.reduce((acc, cur) => acc + cur.medium_age, 0) / countries.length <
    countries.find((country) => country.name === "Poland").medium_age
);
 */
