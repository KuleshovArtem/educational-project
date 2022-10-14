/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img');
const genre = document.querySelector('.promo__genre');
const promoBg = document.querySelector('.promo__bg');
const interactiveList = document.querySelector('.promo__interactive-list');



adv.forEach(item => 
    item.remove());

genre.textContent = 'драма';

promoBg.style.backgroundImage = 'url("../img/bg.jpg")';

interactiveList.innerHTML = '';

movieDB.movies.sort();

movieDB.movies.forEach((item, index) => {
    interactiveList.innerHTML += `
    <li class="promo__interactive-item">${index+1} ${item}
         <div class="delete"></div>
    </li>`;
});

const interactiveItem = document.querySelectorAll('.promo__interactive-item');

interactiveItem.forEach(function (item) {
    item.addEventListener('click', () => {
        item.remove();
    }); 
});



