// const parent = document.querySelector('.v2');
// /**
//  *
//  * @param {{text:string, correctedText?:string}} phrase
//  * @param {Element} parent
//  */
// function writePhrase(phrase, parent) {
//     parent.insertAdjacentHTML('beforeend', `<span>${phrase.text}</span>` );
// }


// function writePhrases(phrases, parent) {
//  for (const phrase of phrases) {
//     writePhrase(phrase, parent)
//  }
// }

// writePhrases(phrases, parent);

function crossWord(id) {
    document.querySelector(`.word-box[data-id="${id}"] .wrong`).classList.add('strike');
    
}

function showWord(id) {
    document.querySelector(`.word-box[data-id="${id}"] .correct`).classList.add('visible');
} 

for (let id = 1; id <= 7; id++) {
    setTimeout(() => {
        crossWord(id)
    }, id * 1000) 
    setTimeout(() => {
        showWord(id)
    }, ((id * 1000)+1000))
}