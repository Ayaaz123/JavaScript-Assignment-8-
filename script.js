const processString = (input) => {
    return input.split('').map((char, index) => index + char.toUpperCase()).join('');
};

const userInput = prompt("Enter a string:");

const result = processString(userInput);

document.body.innerHTML = `<h1>Processed String: ${result}</h1>`;


