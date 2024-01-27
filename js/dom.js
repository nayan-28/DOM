const places = document.getElementsByClassName('important-name');
console.log(places);

for (const place of places) {
    console.log(place.innerText);
}

const title = document.getElementById('places-name');
title.setAttribute('title', 'Colo ghure asi');
