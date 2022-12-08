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

function squareDigits(num){
  return +num.toString().split('').map(i => i*i).join('');
}
console.log(squareDigits(9119));