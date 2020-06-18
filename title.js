const myName = document.getElementById('nameInput');

const myTitle = document.getElementById('titleField');

const myButton = document.getElementById('titleButton');


const theTitle = function titleMaker() {
    const num1 = Math.floor(Math.random()*5+1);
    console.log(num1);

    if (num1 === 1) {
        return ' the Jewel of Many Shadows';
    } else if (num1 === 2) {
        return ' the Purple Dragon Whisperer';
    } else if (num1 === 3) {
        return ' the Water Spirit of Falls';
    } else if (num1 === 4) {
        return ' the Green Wild Mage';
    } else {
        return ' the Swift Leaper';
    }
}


myButton.addEventListener('click', () => {
    const spanTitle = myName.value + theTitle();
    myTitle.textContent = spanTitle;


});




