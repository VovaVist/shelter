const burger = document.querySelector('.burger');
const header = document.querySelector('.header');
const body = document.querySelector('.body');
const popup = document.querySelector('.popup'); 
const katrine = document.querySelector('.popup-katrine');
const jennifer = document.querySelector('.popup-jennifer');
const woody = document.querySelector('.popup-woody');
const sophia = document.querySelector('.popup-sophia');
const timmy = document.querySelector('.popup-timmy');
const charly = document.querySelector('.popup-charly');
const scarlet = document.querySelector('.popup-scarlet');
const freddie = document.querySelector('.popup-freddie');
const popupBtn = document.querySelector('.popup-btn');
const popupTitle = document.querySelector('.popup-title');
const popupSubtitle = document.querySelector('.popup-subtitle');
const popupImg = document.querySelector('.popup-img');
const petDesc = document.querySelector('.popup-pet-desc');

burger.addEventListener('click', function() {
    header.classList.toggle('open');
    body.classList.toggle('overflow-body');
})

document.querySelector('.nav-list').addEventListener('click', function() {
    header.classList.toggle('open');
    body.classList.toggle('overflow-body');
})


katrine.addEventListener('click', function() {
    popup.classList.toggle('popup-visible');
    body.classList.add('overflow-body');
    popupTitle.innerHTML = 'Katrine';
    petDesc.innerHTML = 'Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.';
    popupSubtitle.innerHTML = 'Cat - British Shorthair';
    popupImg.src = '/assets/img/pets-katrine.png';
    popupImg.style.height = '490px';
})

jennifer.addEventListener('click', function() {
    popup.classList.toggle('popup-visible');
    body.classList.add('overflow-body');
    popupTitle.innerHTML = 'Jennifer';
    petDesc.innerHTML = 'Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but wont hesitate to play up a storm in the house if she has all of her favorite toys.';
    popupSubtitle.innerHTML = 'Dog - Labrador';
    popupImg.src = '/assets/img/pets-jennifer.png';
    popupImg.style.height = '490px';
})

woody.addEventListener('click', function() {
    popup.classList.toggle('popup-visible');
    body.classList.add('overflow-body');
    popupTitle.innerHTML = 'Woody';
    petDesc.innerHTML = 'Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.';
    popupSubtitle.innerHTML = 'Dog - Golden Retriever';
    popupImg.src = '/assets/img/pets-woody.png';
    popupImg.style.height = '490px';
})

sophia.addEventListener('click', function() {
    popup.classList.toggle('popup-visible');
    body.classList.add('overflow-body');
    popupTitle.innerHTML = 'Sophia';
    petDesc.innerHTML = 'Sophia here and I am looking for my forever home to live out the best years of my life. I am full of energy. Everyday I am learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.';
    popupSubtitle.innerHTML = 'Dog - Shih tzu';
    popupImg.src = '/assets/img/pets-sophia.png';
    popupImg.style.height = '500px';
    popupImg.style.width = '450px';
})

timmy.addEventListener('click', function() {
    popup.classList.toggle('popup-visible');
    body.classList.add('overflow-body');
    popupTitle.innerHTML = 'Timmy';
    petDesc.innerHTML = 'Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.';
    popupSubtitle.innerHTML = 'Cat - British Shorthair';
    popupImg.src = '/assets/img/pets-timmy.png';
    popupImg.style.height = '490px';
})

charly.addEventListener('click', function() {
    popup.classList.toggle('popup-visible');
    body.classList.add('overflow-body');
    popupTitle.innerHTML = 'Charly';
    petDesc.innerHTML = 'This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.';
    popupSubtitle.innerHTML = 'Dog - Jack Russell Terrier';
    popupImg.src = '/assets/img/pets-charly.png';
    popupImg.style.height = '500px';
})

scarlet.addEventListener('click', function() {
    popup.classList.toggle('popup-visible');
    body.classList.add('overflow-body');
    popupTitle.innerHTML = 'Scarlet';
    petDesc.innerHTML = 'Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.';
    popupSubtitle.innerHTML = 'Dog - Jack Russell Terrier';
    popupImg.src = '/assets/img/pets-scarlet.png';
    popupImg.style.height = '490px';
})

freddie.addEventListener('click', function() {
    popup.classList.toggle('popup-visible');
    body.classList.add('overflow-body');
    popupTitle.innerHTML = 'Freddie';
    petDesc.innerHTML = 'Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.';
    popupSubtitle.innerHTML = 'Cat - British Shorthair';
    popupImg.src = '/assets/img/pets-freddie.png';
    popupImg.style.height = '490px';
})


popupBtn.addEventListener('click', function() {
    popup.classList.remove('popup-visible');
    body.classList.remove('overflow-body');
})
