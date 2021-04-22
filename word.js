let textbox = document.querySelector('#textbox');
let word = document.querySelector('.w');
let letter = document.querySelector('.l');
let vowel = document.querySelector('.v');
let consonant = document.querySelector('.c');

let btn = document.querySelector('.btn');


let wLength, lLength, vLength, cLength;
//word function
function wordLength(str) {
  wLength = str.split(' ');
  //console.log(wLength)
  word.innerHTML = wLength.length;
  //remive space found after words
}

function letterLength(str) {
  lLength = str.split('');
  letter.innerHTML = lLength.length;
  //remove space
}

function vowelLength(str) {
  vLength = textbox.value;
  let vL = vLength.match(/[a-z]^|a|e|i|o|u/gi);
  //console.log(vL)
  vowel.innerHTML = vL.length;
}

function consonantLength(str) {
  cLength = str.split(' ');
  let cL = cLength.map(x =>x.replace(/[aeiou]/gi,'')).join('').length;
  consonant.innerHTML = cL
  //console.log(cL)
}


btn.addEventListener('click', () => {
  wordLength(textbox.value);
  letterLength(textbox.value)
  vowelLength(textbox.value)
  consonantLength(textbox.value);
});