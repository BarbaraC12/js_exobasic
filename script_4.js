const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

console.log('1- Né dans les années 70:');
let birth70 = entrepreneurs.filter(entrepreneur => (entrepreneur.year > 1969 && entrepreneur.year < 1980));
for(let index in birth70) {
    console.log(birth70[index].first + " " + birth70[index].last);
}
console.log("")
console.log('2- Noms et prenoms des entrepreneurs:');
let identity = [];
for(let index in entrepreneurs) {
    let temp = entrepreneurs[index].first + " " + entrepreneurs[index].last;
    identity.push(temp);
    console.log(identity[index]);
}
console.log("")
console.log('3- Age des entrepreneurs today:');
for(let index in entrepreneurs) {
    console.log(entrepreneurs[index].first + " " + entrepreneurs[index].last + " aurait :" + (2019 - entrepreneurs[index].year) + " ans");
}
console.log("")
console.log('4- Les entrepreneurs par ordre alphabetique de noms de famille:');
let lastName = []; //mise de nom dans un array
for(let index in entrepreneurs) {
    let tmp = entrepreneurs[index].last + " " + entrepreneurs[index].first;
    lastName.push(tmp);
}
lastName.sort(); //sort va trier
let name = [];
for(let index in lastName) {
    name = lastName[index].split(' ');
    console.log(name[0] + " " + name[1]);
}
