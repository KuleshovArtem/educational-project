// 'use strict';

// const movieDB = {
//     movies: [
//         "Логан",
//         "Лига справедливости",
//         "Ла-ла лэнд",
//         "Одержимость",
//         "Скотт Пилигрим против..."
//     ]
// };

// const adv = document.querySelectorAll('.promo__adv img');
// const genre = document.querySelector('.promo__genre');
// const promoBg = document.querySelector('.promo__bg');
// const interactiveList = document.querySelector('.promo__interactive-list');



// adv.forEach(item => 
//     item.remove());

// genre.textContent = 'драма';

// promoBg.style.backgroundImage = 'url("../img/bg.jpg")';

// interactiveList.innerHTML = '';

// movieDB.movies.sort();

// movieDB.movies.forEach((item, index) => {
//     interactiveList.innerHTML += `
//     <li class="promo__interactive-item">${index+1} ${item}
//          <div class="delete"></div>
//     </li>`;
// });

// const interactiveItem = document.querySelectorAll('.promo__interactive-item');
// const btnDelete = document.querySelectorAll('.delete');

// const deleteItem = (e) => {
//     e.target.parentElement.remove();
// };

// btnDelete.forEach((item) => {
//     item.addEventListener('click',deleteItem); 
// });

let students = {
    js: [{
        name: 'John',
        progress: 100
    }, {
        name: 'Ivan',
        progress: 60 
    }],

    html: {
        basic:[{
            name: 'Peter',
            progress: 20
        }, {
            name: 'Ann',
            progress: 18
        }],

        pro: [{
            name: 'Sam',
            progress: 10
        }]
    }
};

function getTotalProgressByInteration(data) {
    let total = 0;
    let students = 0;

    for (let course of Object.values(data)) {
        if (Array.isArray(course)) {
            students += course.length;

            for (let i = 0; i < course.length; i++) {
                total += course[i].progress;
            }
        } else {
            for (let subcourse of Object.values(course)) {
                students += subcourse.length;

                for (let i = 0; i < subcourse.length; i++) {
                    total += subcourse[i].progress;
                }
            }
        }
    }

    return total / students;

}

// console.log(getTotalProgressByInteration(students));

function getTotalProgressByRecursion(data) {
    if (Array.isArray(data)) {
        let total = [];

        for (let i = 0; i < data.length; i++) {
            total += data[i].progress;
        }

        return [total , data.length];
    } else {
        let total= [0, 0];

        for (let subData of Object.values(data)) {
            const subDataArr = getTotalProgressByRecursion(subData);

            total[0] +=subDataArr[0];
            total[1] +=subDataArr[1];
        }
        return total;
    } 
}

const result = getTotalProgressByRecursion(students);

console.log(result[0] / result[1]);

function factorial(number) {
    if (number === 1) {
        return number;
    } else {
        return number * factorial(number - 1);
    }
}

console.log(factorial(1));
