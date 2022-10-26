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

function cockroachSpeed(s) {
    return Math.floor(s*100000/3600);
  }

console.log(cockroachSpeed(1.08));