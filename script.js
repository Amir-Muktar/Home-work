
const stringsArray = [];

const inputField = document.createElement('input');
inputField.setAttribute('type', 'text');
inputField.setAttribute('placeholder', 'Введите строку...');
document.body.append(inputField);

const addButton = document.createElement('button');
addButton.textContent = 'Добавить строку';
document.body.append(addButton);

const outputDiv = document.createElement('div');
document.body.append(outputDiv);

addButton.addEventListener('click', () => {
    const inputText = inputField.value.trim();

    if (inputText) {
        stringsArray.push(inputText);

        inputField.value = '';

        renderReversedStrings();
    }
});

function renderReversedStrings() {
    outputDiv.innerHTML = '';

    stringsArray.forEach((string, index) => {
        const reversedText = string.split('').reverse().join('');
        const para = document.createElement('p');
        para.textContent = `Строка ${index + 1}: ${reversedText}`;
        outputDiv.append(para);
    });
}
