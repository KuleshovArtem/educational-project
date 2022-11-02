/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    
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
    const btn = document.querySelector('button');
    const addForm = document.querySelector('form.add');
    const addInput = addForm.querySelector('.adding__input');
    const checkbox = addForm.querySelector('[type="checkbox"]');

    const deleteAdv = (arr) => {
        arr.forEach(item => 
            item.remove());
    };
    
    const makeChange = () => {
        genre.textContent = 'драма';

        promoBg.style.backgroundImage = 'url("../img/bg.jpg")';
    };

    const sortArr = (arr) => {
        arr.sort();
    };

    addForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let newFilm = addInput.value;
        const favorit = checkbox.checked;

        if (newFilm) {
            if(newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if(favorit) {
                console.log("Добавляем любимый фильм");
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);

            createMovieList(movieDB.movies, interactiveList );
        }
        e.target.reset();

        
    });

    function createMovieList (films, parent) {
        parent.innerHTML = '';
        sortArr(films);

        films.forEach((item, index) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">${index+1} ${item}
                <div class="delete"></div>
            </li>`;
        });

        document.querySelectorAll('.delete').forEach((item, i) => {
            item.addEventListener('click',() => {
                item.parentElement.remove();
                films.splice(i, 1);

                createMovieList(films, parent );
            }); 
        });
    }

    makeChange();
    deleteAdv(adv);
    createMovieList(movieDB.movies, interactiveList );
    

});
