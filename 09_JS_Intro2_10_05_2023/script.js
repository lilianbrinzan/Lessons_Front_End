const arr = [1,2,3, 'four', 'five'];
console.log(typeof arr);
console.log('===== push =====');
let res = arr.push(6,7,8);
console.log(arr); // Method push добавляет элементы в конец массива;
console.log(res); // Method push возвращает новую длину массива;
console.log('===== pop =====');
res = arr.pop();
console.log(arr); // Method pop удаляет элемент с конца массива;
console.log(res); // Method pop возвращает удалённый элемент;
console.log('===== shift =====');
res = arr.shift();
console.log(arr); // Method shift удаляет элемент с начала массива;
console.log(res); // Method shift возвращает удалённый элемент;
console.log('===== unshift =====');
res = arr.unshift(0, 1);
console.log(arr); // Method unshift вставляет элементы в начало массива;
console.log(res); // Method unshift возвращает новую длину массива;
console.log('===== concat =====');
const arr1 = [1,2,3];
const arr2 = [4,5,6];
res = arr1.concat(arr2);
console.log(arr1); // Method  concat не изменяет исходные массивы;
console.log(arr2); // Method  concat не изменяет исходные массивы;
console.log(res); // Method concat возвращает новый массив;
console.log('===== slice =====');
res = arr.slice(2,6);
console.log(arr); // Method slice не изменяет исходный массив;
console.log(res); // Method slice (start, finish) возвращает новый массив (старт входит, конец не входит);
console.log('===== SPLICE =====');
res = arr.splice(1,4);
console.log(arr); // Method SPLICE вырезает элементы из исходного массива;
console.log(res); // Method SPLICE (start, countElement) возвращает вырезанный отрезок массива;

console.log('===== spread =====');
const uniteArr = [...arr1, ...arr2];
console.log(arr1);
console.log(arr2);
console.log(uniteArr);

let arr4 = [1,2,3];
let arr5 = [...arr4]; //  глубокая копия массива, изменение одного массива не повлечёт изменение второго
//arr5 = arr4; // поверхностная копия массива, изменение одного массива повлечёт изменение второго

arr5[0] = 100;
console.log(arr5);
console.log(arr4);

console.log('===== destructive =====');

const [id, name, family] = arr4; // [a,b,c,d] = arr4;
console.log(a,b,c,d);  