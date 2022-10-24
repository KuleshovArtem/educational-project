const btns = document.querySelectorAll('button');
const wrapper = document.querySelector('.btn-block');
const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);

// console.log(btns[0].classList.remove('blue'));
// console.log(btns[1].classList.add('red'));




// btns[0].addEventListener('click', () => {
//     if (!btns[2].classList.contains('red')) {
//         btns[2].classList.add('red');
//     } else {
//         btns[2].classList.remove('red');
//     }
// }); 

wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.tagName == 'BUTTON') {
        console.log('go');
    } 
});

wrapper