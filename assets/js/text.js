document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('text');
    const button = document.getElementById('toggle-button');
    const fullText = textElement.innerText;
    const words = fullText.split(' ');
    const previewText = words.slice(0, 19).join(' ') + '..';

    let isExpanded = false;

    textElement.innerText = previewText;

    button.addEventListener('click', () => {
        if (isExpanded) {
            textElement.innerText = previewText;
            button.innerHTML = 'Read full description <img src="./img/hero/plus.svg" alt="plus">';
        } else {
            textElement.innerText = fullText;
            button.innerHTML = 'Show less <img src="./img/hero/minus.svg" alt="minus">';
        }
        isExpanded = !isExpanded;
    });
});

