// var min = function(list){
//     list.sort(compareNum);

//     return list[0];
// }

// var max = function(list){
//     list.sort(compareNum).reverse();

//     return list[0];
// }

// function compareNum(a, b) {
//     return a - b;
// }

// console.log(min([4,6,2,1,9,63,-134,566]));

// function correct(string)
// {
//     return string.replace(/'5'/g,'S').replace(/'0'/g,'O').replace(/'1'/g,'I');
    
// }
// console.log(correct('fg05dil'));



// Таракан - одно из самых быстрых насекомых. Напишите функцию, которая принимает скорость в километрах в час и возвращает ее в сантиметрах в секунду, округленную до целого числа.

// function cockroachSpeed(s) {
//     return Math.floor(s*100000/3600);
//   }

// console.log(cockroachSpeed(1.08));

// Нам нужна простая функция, которая определяет, нужно ли множественное число или нет. Он должен принимать число и возвращать true, если с этим числом следует использовать множественное число, или false, если нет. Это было бы полезно при распечатке строки, такой как 5 minutes, 14 apples, или 1 sun.

//   function plural(n) {
//     if ( n == 1) {
//       return false;
//     } else {
//       return true;
//     }
//   }

// console.log(plural(0));

// Можете ли вы найти иголку в стоге сена?

// Напишите функциюfindNeedle(), которая принимает array полный мусор, но содержит один "needle"

// После того, как ваша функция найдет иглу, она должна вернуть сообщение (в виде строки), в котором говорится:

// "found the needle at position " плюс indexон нашел иглу, так что:

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 

// function findNeedle(haystack) {
//   let i = haystack.indexOf("needle");
//   return `found the needle at position ${i}`;
// }

// console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]));

//Вы были в походе со своими друзьями далеко от дома, но когда приходит время возвращаться, вы понимаете, что ваше топливо на исходе, а ближайшая заправка находится 50 за много миль! Вы знаете, что в среднем ваш автомобиль расходует около 25миль на галлон. Остались 2галлоны.

//Учитывая эти факторы, напишите функцию, которая сообщает вам, возможно ли добраться до насоса или нет.

//Функция должна возвращатьtrue, если это возможно, а falseесли нет.


// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//   if (distanceToPump <= (fuelLeft*mpg)) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(zeroFuel(50, 25, 2));

// Вам нужно удвоить целое число и вернуть его.

// function doubleInteger(i) {

//   return i*2;
// }
// console.log(doubleInteger(2));

// В этом ката вас просят возвести в квадрат каждую цифру числа и объединить их.
// Например, если мы запустим 9119 через функцию 811181 выйдет наружу, потому что 9 **2 это 81 и 1**2 это 1

// function squareDigits(num){
//   const newArr = String(num).split('').map(value => value**2).join('');

//   return +newArr;
// }

// function squareDigits(num){
//   return +num.toString().split('').map(i => i*i).join('');
// }
// console.log(squareDigits(9119));

//Напишите функцию bmi, которая вычисляет индекс массы тела (bmi = вес / рост2).

//if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

// function bmi(weight, height) {
//   let bmi = weight/height**2;
//   if (bmi <= 18.5) {
//     return "Underweight";
//   } else if (bmi <= 25.0) {
//     return "Normal";
//   } else if (bmi <= 30.0) {
//     return "Overweight";
//   } else if (bmi > 30) {
//     return "Obese";
//   }
// }

// console.log(bmi(95, 1.8));

// Если указано число от 0 до 9, верните его прописью.

// Ввод :: 1

// Вывод :: "Один".

// Если ваш язык поддерживает это, попробуйте использовать оператор switch.

// function switchItUp(number){

//   switch (number) {
//     case 1:
//       return 'One';
//     case 2:
//       return 'Two';
//     case 3:
//       return 'Three';
//     case 4:
//       return 'Four';
//     case 5:
//       return 'Five';
//     case 6:
//       return 'Six';
//     case 7:
//       return 'Seven';
//     case 8:
//       return "Eight";
//     case 9:
//       return 'Nine';
//     case 0:
//       return 'Zero';
//   }
// }

//   console.log(switchItUp(7));

// Завершите метод, который принимает логическое значение и возвращает "Yes"строку для true или "No"строку для false.

// function boolToWord( bool ){
//   if (bool) {
//     return "Yes";
//   } else {
//     return "No";
//   }
// }

// Подсчитайте количество делителей положительного целого n числа . Случайные тесты доходят до n = 500000.
// 4 --> 3 (1, 2, 4)
// 5 --> 2 (1, 5)
// 12 --> 6 (1, 2, 3, 4, 6, 12)
// 30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)
// Обратите внимание, что вы должны возвращать только число, количество делителей. Цифры в круглых скобках показаны только для того, чтобы вы могли видеть, какие числа учитываются в каждом конкретном случае.

// function getDivisorsCnt(n){
//   let count = 0;
//   for (let i = 1; i <= n; i++ ) {
//     if (n % i == 0) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(getDivisorsCnt(30));
// Учитывая массив целых чисел, удалите наименьшее значение. Не изменяйте исходный массив / список.Если есть несколько элементов с одинаковым значением, удалите тот, у которого индекс меньше. Если вы получаете пустой массив / список, верните пустой массив / список.

// Не меняйте порядок оставшихся элементов.

// function removeSmallest(numbers) {
//     let sortArr = numbers.indexOf(numbers.sort((a, b) => a - b)[0]);

//     let result = numbers.concat([]);
//     result.splice(sortArr, 1);
    
//     return result;
// }

// console.log(removeSmallest([5,3,2,1,4]));

// Создайте функцию, которая будет возвращать оператор приветствия, использующий входные данные; ваша программа должна возвращать, "Hello, <name> how are you doing today?".

// function greet(name){
//     return `Hello, ${name} how are you doing today?`;
//   }

// Учитывая два целых aчисла и b, которые могут быть положительными или отрицательными, найдите сумму всех целых чисел между ними и включая их, и верните ее. Если два числа равны, верните aили b.

// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

// function getSum( a,b ){ 
//     let result = 0;  
//     if (a < b) {
//         for (let i = 0; i <= b-a; i++) {
//             result += (b-i);
//         }
//     } else {
//         for (let i = 0; i <= a-b; i++) {
//             result += (a-i);
//         }
//     }
//     return result;

// }

// console.log(getSum(-1, 2));


// У мистера Скруджа есть сумма денег "P", которую он хочет инвестировать. Прежде чем он это сделает, он хочет знать, сколько лет "Y" эта сумма "P" должна храниться в банке, чтобы она составила желаемую сумму денег "D".

// Сумма хранится в течение "Y" лет в банке, где проценты "I" выплачиваются ежегодно. После уплаты налогов 'T' за год новая сумма реинвестируется.

// Примечание к налогообложению: налогом облагается не инвестированная основная сумма, а только начисленные проценты за год
// Let P be the Principal = 1000.00      
// Let I be the Interest Rate = 0.05      
// Let T be the Tax Rate = 0.18      
// Let D be the Desired Sum = 1100.00


// After 1st Year -->
// P = 1041.00
// After 2nd Year -->
// P = 1083.86
// After 3rd Year -->
// P = 1128.30

// Таким образом, мистеру Скруджу приходится ждать 3 года, пока первоначальная сумма основного долга не достигнет желаемой суммы.

// Ваша задача - выполнить предоставленный метод и вернуть количество лет "Y" в целом, чтобы мистер Скрудж получил желаемую сумму.

// Предположение: Предположим, что желаемый принципал 'D' всегда больше, чем начальный принципал. Однако лучше всего принять во внимание, что при желании основной 'D' равен основному 'P', это должно вернуть 0 лет.

// function calculateYears(principal, interest, tax, desired) {
        
//         if (principal == desired) {
//             return 0;
//         } else {

//             let Y = 0;
        
//             for (let i = 0; principal <= desired; i++) {
//                 principal += principal * interest * (1 - tax);
//                 Y ++;
//             }
//             return Y;
//         }
//     }
// console.log(calculateYears(1000,0.05,0.18,1100));

// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++) {
//     result += '\n';
//     for (let j = 0; j < i; j++) {
//         result += '*';
//     }
// }

// console.log(result);


// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 5; j > i; j--) {
//         result += ' ';
//     }
//     for (let k = 0; k < i+1; k++) {
//         result += '*';
//     }
//     for (let l= 0; l < i; l++) {
//         result += '*';
//     }
//     result += '\n';ч
// }

// console.log(result);

// Создайте функцию, которая выдает персонализированное приветствие. Эта функция принимает два параметра: nameи owner.

// Используйте условные обозначения, чтобы вернуть правильное сообщение:


// кейс	Возврат
// имя равно владельцу	"Привет, босс"
// в противном случае	"Привет, гость"

// function greet (name, owner) {
//     if(name == owner) {
//         return 'Hello boss';
//     } else {
//         return 'Hello guest';
//     }
//   }

//   Создайте функцию, которая принимает 2 целых числа в виде строки в качестве входных данных и выводит сумму (также в виде строки):

// //   Пример: (Ввод1, Ввод2 --> Вывод)

// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"

// function sumStr(a,b) {
//   return String(+a + +b );
// }
//   String.prototype.toJadenCase = function () {
//     return this.split(' ').map(element => {
//         return element[0].toUpperCase() + element.slice(1);
//     }).join(' ');
    
//    };


// const NotJadenCased = "How can mirrors be real if our eyes aren't real";

// console.log(NotJadenCased.toMy());


// function testEven(n) {
//   return (0 == (n % 2)) ? true : false;
// }
// testEven(0.5);

// function digitize(n) {
//   return String(n).split('').reverse().map(item => + item).join('');
// }

// console.log(digitize(35231));

// function sumTwoSmallestNumbers(numbers) {  
//   numbers.sort((a, b) => a - b);
//   return numbers[0] + numbers[1];
// }

// console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]));

// function XO(str) {
//   str = str.toLowerCase().split('');
//   return str.filter(x => x === 'x').length == str.filter(x => x ==='o').length;
// }

// console.log(XO('oX'));
// console.log(XO('oXxx'));
// console.log(XO('oXoxdjj'));

// const result = getSum(5, 6);
// const getSum = function(a, b) {
//     return a + b;
// }


// function disemvowel(str) {
//     const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
//     let newStr = '';

//     for (let i = 0; i < str.length; i++) {
//         let symbol = str.charAt(i);
//         if (vowels.indexOf(symbol) == -1) {
//             newStr += symbol;
//         }
//     }
//     return  newStr;
//     }

// console.log(disemvowel("aeiodubaeriou"));

// function filter_list(l) {
//     // let result = [];
//     // l.map(item => {
//     //     if(typeof(item) === 'number') {
//     //         result.push(item);
//     //     }
//     // });
//     // return result;

//     return l.filter((i) => { return typeof i == "number"});
//   }

// console.log(filter_list([1,2,'a','b']));


// function evenOrOdd(number) {
//     return number % 2 == 0 ? "Even" : "Odd" ;
//   }

// function validatePIN (pin) {
//     let arr = pin.split('');
    
//     if ((arr.indexOf(' ', 0) !== -1) && (arr.indexOf('\n', 0) !== -1)) {
//         return false;
//     } else {
//         let newArr = arr.map(item => +item);
//         if (newArr.includes(NaN)) {
//             return false; 
//         } else {
//             return (newArr.length === 4 || newArr.length === 6)? true : false;
//         }
//     }   
//   }
// //   
// console.log(validatePIN('1234'));

//doTest([2, 3, 1], 0);
 
// function gimme (triplet) {
//     return triplet.indexOf([...triplet].sort((a,b) => a-b)[1]);   
// }

// console.log(gimme([2,3,1]));


// function countBy(x, n) {
//     let z = [];
//         for (let i = 1; i <= n; i++) {
//             z[i-1]=i * x;
//         }
  
//     return z;
//   }
//   console.log(countBy(1,10));

function friend(friends){
        return friends.filter(item => item.length === 4);
  }


  console.log(friend(["Ryan", "Kieran", "Mark"]));
  //(friend(["Ryan", "Kieran", "Mark"]), ["Ryan", "Mark"])