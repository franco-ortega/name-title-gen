const myName = document.getElementById('nameInput');

const myTitle = document.getElementById('titleField');

const myCongrats = document.getElementById('congrats');

const myButton = document.getElementById('titleButton');


const theTitle = function titleMaker() {
    const num1 = Math.floor(Math.random()*10+1);
    console.log(num1);

    if (num1 === 1) {
        return ' the Jewel of Many Shadows';
    } else if (num1 === 2) {
        return ' the Purple Dragon Whisperer';
    } else if (num1 === 3) {
        return ' the Water Spirit of Falls';
    } else if (num1 === 4) {
        return ' the Green Wild Mage';
    } else if (num1 === 5) {
        return ' the Ghost Shadow';
    } else if (num1 === 6) {
        return ' the Archdruid of Spring Blooms';
    } else if (num1 === 7) {
        return ' the Feywild Wanderer';
    } else if (num1 === 8) {
        return ' the Rainbow Shard Weaver';
    } else if (num1 === 9) {
        return ' the Moon Heart';
    } else {
        return ' the Swift Leaper';
    }
}


myButton.addEventListener('click', () => {
    const spanTitle = myName.value + theTitle();
    myTitle.textContent = spanTitle;
    const spanCongrats = 'Congratulations!! I dub thee...'
    myCongrats.textContent = spanCongrats;


});




