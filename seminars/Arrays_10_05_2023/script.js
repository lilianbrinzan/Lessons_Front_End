console.log('==== Destructurizatia: ====');

const infoFullName = ['John', 'Doe'];
const [firstName, lastName] = infoFullName; // Destructurizatia: firstName('John');  lastName ('Doe');
console.log(firstName, lastName);

const numbers = [1,2,3,4];
const [first, , , fourth] = numbers;
console.log(first, fourth);

//[ {isbn, author, title, year}, {}] .........homework
const book = ["1", "Theodore Dreiser", "Finansist", 1912 ];
const [isbn, author, title, year] = book;
console.log(isbn, author, title, year);

const [a,b,...rest] = numbers;
console.log(a, b, rest); // a = 1, b = 2, rest = [3,4]

console.log('==== Spread syntax ====');
let arr1 = [1,2,3];
let arr2 = [4,5,6];
const newArr = [...arr1, ...arr2];
console.log(arr1, arr2);
console.log(newArr);

arr1 = ['a', 'b', 'c'];
arr2 = [...arr1, 'd', 'e', 'f'];
console.log(arr2);

console.log("==== Array's methods ====");

arr1 = [1,2,3];
let res = arr1.push(5); // Adauga elemet in svirsit de masiv Array, intoarce o noua demensiune/lungime a masivului
console.log(arr1);  // 1,2,3,5
console.log(res);   // 4

res = arr1.pop();  // Sterge un element la sfirsit de masiv, si  il intoarce pe cel sters
console.log(arr1);  // 1,2,3
console.log(res);   // 5

res = arr1.shift(); // Sterge un element la inceput de masiv, si  il intoarce pe cel sters
console.log(arr1);  // 2,3
console.log(res);   // 1

res = arr1.unshift(0); // Adauga un element la inceput de masiv, intoarce o noua demensiune/lungime a masivului
console.log(arr1);  // 0, 2, 3
console.log(res); // 3

res = arr1.splice(1, 2, 8, 9, 10); // Sterge un element  din masivul incepator, si  il intoarce pe cel sters
console.log(arr1);  // 0, 8, 9,10
console.log(res); // 2, 3

res = arr1.slice(1, 3); // Nu schimba masivul  incepator, intoarce elementul schters ///intoarce pe cel sters
console.log(arr1);  // 0, 8, 9, 10
console.log(res); // 8, 9

const combArray = arr1.concat(arr2);
console.log(arr1);  // 0, 8, 9, 10
console.log(arr2); //  'a', 'b', 'c', 'd', 'e', 'f'
console.log(combArray); // 0, 8, 9, 10, 'a', 'b', 'c', 'd', 'e', 'f'
