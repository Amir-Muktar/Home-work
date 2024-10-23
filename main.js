
const inputField = document.createElement('input');
inputField.setAttribute('type', 'text');
inputField.setAttribute('placeholder', 'Введите строку...');
document.body.append(inputField);

const outputDiv = document.createElement('div');
document.body.append(outputDiv);

inputField.addEventListener('input', () => {
    const inputText = inputField.value;

    const reversedText = inputText.split('').reverse().join('');


    outputDiv.textContent = `Реверсированная строка: ${reversedText}`;
});
