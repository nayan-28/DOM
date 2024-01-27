const places = document.getElementsByClassName('important-name');
console.log(places);

for (const place of places) {
    console.log(place.innerText);
}

const fruitsTitle = document.getElementById('fruits-title');
fruitsTitle.innerText = 'PineApple';
