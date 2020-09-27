const myName = document.getElementById('name-input');
const myTitle = document.getElementById('title-field');
const myCongrats = document.getElementById('congrats');
const myButton = document.getElementById('title-button');
const entryBoxArea = document.getElementById('entry-box-area');
const nameTitleArea = document.getElementById('name-title-area');

const theAdjective = function adjectiveMaker() {
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

const theTitle = function titleMaker() {
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


myButton.addEventListener('click', () => {
    const spanTitle = myName.value + ' ' + theAdjective() + ' ' + theTitle();
    myTitle.textContent = spanTitle;
    const spanCongrats = 'Congratulations!!!! I dub thee...'
    myCongrats.textContent = spanCongrats;
    myName.value = '';

/*    entryBoxArea.style.display = 'none';
*/
});
