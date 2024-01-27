const title = document.getElementById('places-name');
title.setAttribute('title', 'Colo ghure asi');

const fruits = document.getElementsByClassName('fruits-container');
const changeDom = fruits[0].innerHTML = '<h2>Wow,its really Noise < /h2>'
console.log(changeDom);
