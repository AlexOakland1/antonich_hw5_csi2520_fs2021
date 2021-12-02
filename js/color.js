let colorButton = document.querySelector('#colorButton');

console.log(colorButton.className);

let color;

if (colorButton.className === `blue`) {
    color = `rgb(0, 200, 255)`;
} else if (colorButton.className === `yellow`) {
    color = `rgb(255, 255, 0)`;
} else if (colorButton.className === `orange`) {
    color = `rgb(255, 180, 0)`;
} else {
    color = `rgb(255, 0, 255)`;
}

colorButton.addEventListener('click', function () {
    let listItems = document.body.getElementsByTagName("*");
    for (let index = 0; index < listItems.length; index++) {
         listItems[index].style.color = color;
    }

})

