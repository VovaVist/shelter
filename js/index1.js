const burger = document.querySelector('.burger');
const header = document.querySelector('.header');
const link = document.querySelector('.link');
const body = document.querySelector('.body');
const ourFriends = document.querySelector('.ourFriends');

burger.addEventListener('click', function() {
    header.classList.toggle('open');
    body.classList.toggle('overflow-body');
    ourFriends.classList.toggle('shadowed-background');
})

document.querySelector('.nav-list').addEventListener('click', function() {
    header.classList.toggle('open');
    body.classList.toggle('overflow-body');
    ourFriends.classList.toggle('shadowed-background');
})