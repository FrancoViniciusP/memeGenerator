const inputText = document.getElementById('text-input');
const textContainer = document.getElementById('meme-text');

inputText.addEventListener('keyup', () => {
  textContainer.innerText = inputText.value;
});

const memeImage = document.getElementById('meme-image');
const imageContainer = document.getElementById('meme-image-container');

const insert = (event) => {
  const file = event.target.files[0];
  memeImage.src = URL.createObjectURL(file);
  memeImage.style.height = '400px';
  memeImage.style.width = '400px';
};
console.log(insert);

const buttonFire = document.getElementById('fire');
const buttonWater = document.getElementById('water');
const buttonEarth = document.getElementById('earth');

buttonFire.addEventListener('click', () => {
  imageContainer.style.border = '3px dashed rgb(255, 0, 0)';
});
buttonWater.addEventListener('click', () => {
  imageContainer.style.border = '5px double rgb(0, 0, 255)';
});
buttonEarth.addEventListener('click', () => {
  imageContainer.style.border = '6px groove rgb(0, 128, 0)';
});

const memes = document.getElementsByClassName('meme-box');

function selectMeme(event) {
  memeImage.src = event.target.src;
  memeImage.style.height = '400px';
  memeImage.style.width = '400px';
}

function memeButtons() {
  for (let i = 0; i < memes.length; i += 1) {
    memes[i].addEventListener('click', selectMeme);
  }
}

memeButtons();
