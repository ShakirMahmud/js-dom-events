//! option-1 directly set on the html element

// ! Event Onclick function. Option-2
function makeRed() {
  document.body.style.backgroundColor = "red";
}
// ! Event Onclick function. Option-3
const makeBlueButton = document.getElementById("make-blue");
makeBlueButton.onclick = makeBlue; //do not call function just write the func name. call korle function set hoye jabe. na korle then click korle kaj korbe.
function makeBlue() {
  document.body.style.backgroundColor = "blue";
}

// ! Event Onclick function. Option-3 another [important]
const greenButton = document.getElementById("make-green");
greenButton.onclick = function makeGreen() {
  document.body.style.backgroundColor = "green";
}

// ! Option-4
const purpleButton = document.getElementById("make-purple");
purpleButton.addEventListener('click', makePurple);
function makePurple() {
    document.body.style.backgroundColor = "purple";
}
// ! option-4.5
const pinkButton = document.getElementById("make-pink");
pinkButton.addEventListener('click', function makePink(){
    document.body.style.backgroundColor = "pink";
});

// ! Option-4 final [important]
document.getElementById('make-orange').addEventListener('click', function(){
    document.body.style.backgroundColor = "orange";
});

// document.getElementById('make-orange').addEventListener('click', function(){
//     document.body.style.backgroundColor = 'black';
//     document.body.style.color = 'white';
//     const buttonWhiteColor = document.getElementsByTagName('button');
//     for(let whiteButton of buttonWhiteColor){
//         whiteButton.style.color = 'white';
//     }
// });