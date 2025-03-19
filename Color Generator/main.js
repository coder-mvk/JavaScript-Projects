let colorCode = document.querySelector('#color-code');
let btn = document.querySelector('#btn');


const getColor = () => {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = randomCode;
    colorCode.innerHTML = randomCode;
}

btn.addEventListener("click", getColor);

getColor();