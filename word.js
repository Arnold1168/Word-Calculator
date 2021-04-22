let textbox = document.querySelector('#textbox');
let word = document.querySelector('.w');
let letter = document.querySelector('.l');
let vowel = document.querySelector('.v');
let consonant = document.querySelector('.c');

let btn = document.querySelector('#btn');
let resetBtn = document.querySelector('#reset');


let wLength, lLength, vLength, cLength, vL, sub;
//word function
function wordLength(str) {
  wLength = str.split(' ');
  word.innerHTML = wLength.length;
}

//letter function
function letterLength(str) {
  lLength = str.split('');
  sub = lLength.join('').replace(/\s/gi, '');
  letter.innerHTML = sub.length;
}

//vowel function
function vowelLength(str) {
   vL = str.match(/[a-z]^|a|e|i|o|u/gi);
  if (vL == null) {
    vowel.innerHTML = 0;
  } else {
    vowel.innerHTML = vL.length;
  }
}

//consonant function 1
function consonantLength(str) {
  if (wLength.length > 1) {
    cLength = str.split(' ');
    let cL = cLength.map(x => x.replace(/[aeiou]/gi, '')).join('').length;
    consonant.innerHTML = cL;
  } else {
    cLength = str.split('');
    let cL = cLength.map(x => x.replace(/[aeiou]/gi, '')).join('').length;
    consonant.innerHTML = cL;
  }
}
//consonant function 2
//function consonantLength2(){
//consonant.innerHTML = sub.length-vL.length;
//console.log(sub.length - voLength);
//}

btn.addEventListener('click', () => {
  wordLength(textbox.value);
  letterLength(textbox.value)
  vowelLength(textbox.value)
  consonantLength(textbox.value);
  //consonantLength2();
});

//reset button
resetBtn.addEventListener('click', () => {
  consonant.innerHTML = '';
  vowel.innerHTML = '';
  letter.innerHTML = '';
  word.innerHTML = '';
  textbox.value = '';
});