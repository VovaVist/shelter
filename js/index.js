

const burger = document.querySelector('.burger');
const header = document.querySelector('.header');
const body = document.querySelector('.body');

burger.addEventListener('click', function() {
    header.classList.toggle('open');
    body.classList.toggle('overflow-body');
    body.classList.toggle('shadowed-background');
})

document.querySelector('.nav-list').addEventListener('click', function() {
    header.classList.toggle('open');
    body.classList.toggle('overflow-body');
    body.classList.toggle('shadowed-background');
})


