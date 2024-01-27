const sections = document.querySelectorAll('section');
for (const section of sections) {
    section.style.border = '2px solid steelblue';
    section.style.margin = '5px';
    section.style.borderRadius = '15px';
    section.style.paddingLeft = '5px';
    section.style.backgroundColor = 'lightgray';
}

const places = document.getElementById('visited-place');
places.style.backgroundColor = 'yellow';
