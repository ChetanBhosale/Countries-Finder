const searchBar = document.querySelector('.search-bar');

searchBar.addEventListener('input', () => {
  searchBar.style.textAlign = searchBar.value ? 'left' : 'center';
});

let sec;
let inp = document.querySelector('input')
let buttons = document.querySelectorAll('button')
buttons[0].addEventListener('click', () =>{
    buttons[0].style.backgroundColor = 'rgb(69, 4, 129)';
    buttons[1].style.backgroundColor = 'rgb(91, 0, 175)';
    buttons[2].style.backgroundColor = 'rgb(91, 0, 175)';
    inp.value= ''
    sec = 1
})

buttons[1].addEventListener('click', () =>{
    buttons[0].style.backgroundColor = "rgb(91, 0, 175)";
    buttons[1].style.backgroundColor = "rgb(69, 4, 129)";
    buttons[2].style.backgroundColor = "rgb(91, 0, 175)";
    inp.value= ''
    sec = 2
})

buttons[2].addEventListener('click', () =>{
    buttons[0].style.backgroundColor = 'rgb(91, 0, 175)';
    buttons[1].style.backgroundColor = 'rgb(91, 0, 175)';
    buttons[2].style.backgroundColor = 'rgb(69, 4, 129)';
    inp.value= ''
    sec = 3
})