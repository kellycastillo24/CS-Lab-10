//question 1
function greetUser(Username){
    document.getElementById('output').innerText = "Hello," +Username;
}

greetUser('Harry')

//question 2
function buttonchanges(){
    document.getElementById('message').innerText = "Hello, World!"
}

//question 3 
function addNumbers(){
    const num1 = parseFloat (document.getElementById('num1').value);
    const num2 = parseFloat (document.getElementById('num2').value);

    const sum = num1 + num2;

    document.getElementById('result').textContent = `The result is: ${sum}`;
}


//question 4
const inputField = document.getElementById('inputField');
const updateButton = document.getElementById('updateButton');
const title = document.getElementById('title');

//event listener updates in real time
updateButton.addEventListener('click', () => {
   
    title.textContent = inputField.value;
});

//question 5 
const inputchange1 = document.getElementById('inputchange1');
const inputchange2 = document.getElementById('inputchange2');
const concatButton = document.getElementById('concatButton');
const combinedText = document.getElementById('combinedText');

concatButton.addEventListener('click', () => {
    
    const result = inputchange1.value + " " + inputchange2.value;
    combinedText.textContent = result;
});

//question 6
const changeColorButton = document.getElementById('changeColorButton');
const colorBox = document.getElementById('colorBox');

changeColorButton.addEventListener('click', () => {
    
    colorBox.style.backgroundColor = 'blue';
});