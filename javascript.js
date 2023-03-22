// Task1
// Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"]; Вырезать из массива "David", "Lambert", "Eddie" и записать их в отдельный массив

// let arr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// let res = arr.splice(2,3);
// console.log(res);

// Task2
// Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"]; Переставить "Janett", "Franz" в начало массива

// let arr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// arr.splice(5, 2);
// arr. unshift('Janett', 'Franz');
// console.log(arr);

// Task3

// Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"]; Заменить "Eddie", "Janett" на "Oleg","Valerchik"

// let arr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// let res = arr.splice(4, 2, 'Oleg', 'Valerchik');
// console.log(arr);

// Task4
// Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"]; "Перевернуть" массив, заменить первые 4 элемента на Митрофанов ("Mitrofan")

// let arr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"]; 
// arr.reverse();
// arr.splice(0, 4, 'Mitrofan', 'Mitrofan', 'Mitrofan', 'Mitrofan');
// console.log(arr);

// Task5
// Даны два массива 
// ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"] 
// ["Nikodim","Evlampij","Aristarkh","Drogolub","Vitalij"] 
// Взять из второго массива все имена начина с "Aristarkh" (включительно) и добавить их в 1ый массив (не должно получится двумерного массива)

// let arr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// let arr2 = ["Nikodim","Evlampij","Aristarkh","Drogolub","Vitalij"];
// let res = arr2.slice(2);

// console.log(res);
// let arr3 = arr.concat(res);
// console.log(arr3);

// Task6
// Дана строка 'Мама мыла раму' С помощью prompt() получите строку. Поменяйте в строке 'Мама мыла раму' слово раму на полученное слово Например:

// prompt() ===>>> 'машину'
// // ‘Мама мыла машину’
// prompt() ===>>> 'рябину'
// // ‘Мама мыла рябину’
// prompt() ===>>> 'картину'
// // ‘Мама мыла картину’

// let name = prompt('Enter word');
// let arr = ['Мама', 'мыла', 'раму'];
// let res = arr.splice(2, 1, name);
// console.log(arr);

