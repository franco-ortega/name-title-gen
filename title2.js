const myName2 = document.getElementById('nameInput2');

const myTitle2 = document.getElementById('titleField2');

const myCongrats2 = document.getElementById('congrats2');

const myButton2 = document.getElementById('titleButton2');


const theAdjective2 = function adjectiveMaker2() {
    const num1 = Math.floor(Math.random()*10+1);
    console.log(num1);

    if (num1 === 1) {
        return 'the Jewel';
    } else if (num1 === 2) {
        return 'the Purple';
    } else if (num1 === 3) {
        return 'the Water Spirit';
    } else if (num1 === 4) {
        return 'the Green';
    } else if (num1 === 5) {
        return 'the Ghost';
    } else if (num1 === 6) {
        return 'the Archdruid';
    } else if (num1 === 7) {
        return 'the Feywild';
    } else if (num1 === 8) {
        return 'the Rainbow Shard';
    } else if (num1 === 9) {
        return 'the Moon';
    } else {
        return 'the Swift';
    }
}

const theTitle2 = function titleMaker2() {
    const num2 = Math.floor(Math.random()*10+1);
    console.log(num2);

    if (num2 === 1) {
        return 'of Many Shadows';
    } else if (num2 === 2) {
        return 'Dragon Whisperer';
    } else if (num2 === 3) {
        return 'of Thunder Falls';
    } else if (num2 === 4) {
        return 'Wild Mage';
    } else if (num2 === 5) {
        return 'Shadow';
    } else if (num2 === 6) {
        return 'of Spring Blooms';
    } else if (num2 === 7) {
        return 'Wanderer';
    } else if (num2 === 8) {
        return 'Weaver';
    } else if (num2 === 9) {
        return 'Heart';
    } else {
        return 'Leaper';
    }
}

myButton2.addEventListener('click', () => {
    const spanTitle2 = myName2.value + ' ' + theAdjective2() + ' ' + theTitle2();
    myTitle2.textContent = spanTitle2;
    const spanCongrats2 = 'Congratulations!!!! I dub thee...'
    myCongrats2.textContent = spanCongrats2;

});
