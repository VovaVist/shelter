const burger = document.querySelector('.burger');
const header = document.querySelector('.header');
const body = document.querySelector('.body');
const popup = document.querySelector('.popup'); 
const katrine = document.querySelector('.popup-katrine');
const jennifer = document.querySelector('.popup-jennifer');
const woody = document.querySelector('.popup-woody');
const popupBtn = document.querySelector('.popup-btn');
const popupTitle = document.querySelector('.popup-title');
const popupSubtitle = document.querySelector('.popup-subtitle');
const popupImg = document.querySelector('.popup-img');
const petDesc = document.querySelector('.popup-pet-desc');


burger.addEventListener('click', function() {
    header.classList.toggle('open');
})

document.querySelector('.nav-list').addEventListener('click', function() {
    header.classList.toggle('open');
})

katrine.addEventListener('click', function() {
    popup.classList.toggle('popup-visible');
    body.classList.add('overflow-body');
    popupTitle.innerHTML = 'Katrine';
    petDesc.innerHTML = 'Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.';
    popupSubtitle.innerHTML = 'Cat - British Shorthair';
    popupImg.src = '/assets/img/pets-katrine.png';
})

jennifer.addEventListener('click', function() {
    popup.classList.toggle('popup-visible');
    body.classList.add('overflow-body');
    popupTitle.innerHTML = 'Jennifer';
    petDesc.innerHTML = 'Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but wont hesitate to play up a storm in the house if she has all of her favorite toys.';
    popupSubtitle.innerHTML = 'Dog - Labrador';
    popupImg.src = '/assets/img/pets-jennifer.png';
})

woody.addEventListener('click', function() {
    popup.classList.toggle('popup-visible');
    body.classList.add('overflow-body');
    popupTitle.innerHTML = 'Woody';
    petDesc.innerHTML = 'Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.';
    popupSubtitle.innerHTML = 'Dog - Golden Retriever';
    popupImg.src = '/assets/img/pets-woody.png';
})

popupBtn.addEventListener('click', function() {
    popup.classList.remove('popup-visible');
    body.classList.remove('overflow-body');
})






