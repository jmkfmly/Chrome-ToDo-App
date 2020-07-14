const body = document.querySelector('body');

const IMAGE_NUMBER = 3;
const BACKGROUND_CN = 'bodyBackground'
function randomNumber(){
    return (Math.floor(Math.random()*IMAGE_NUMBER)+1);
}

function init(){
    const imageNumber = randomNumber();
    const imageUrl = `/images/${imageNumber}.jpg`;
    const img = document.createElement('img');
    img.src = imageUrl;
    img.classList.add('bodyBackground')
    body.prepend(img);
}

init();