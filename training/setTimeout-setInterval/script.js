const btn = document.querySelector('.btn');



//let timerId;
//let i = 0;

//анимация box 
function myAnimation() {
    let pos = 0;
    const box = document.querySelector('.box');

    const id = setInterval(frame, 10);
    function frame () {
        if (pos === 300) {
            clearInterval(id);
        } else {
            pos++;
            box.style.left = pos +'px';
            box.style.top = pos +'px';
        }
    }
}

btn.addEventListener('click', myAnimation);


// const timerId = setTimeout(logger, 2000);

// function logger() {
//     if(i === 5) {
//         clearInterval(timerId);
//     } else {
//         console.log('test');
//         i++;
//     }
// }

// btn.addEventListener('click', () => {
//     //const timerId = setTimeout(logger, 1000);
//     timerId = setInterval(logger, 1000);
// });

// let id = setTimeout(function log () {
//     console.log('Helloy');
//     id = setTimeout(log,500);
// },500);

