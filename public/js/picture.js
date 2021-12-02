let picButton = document.querySelector('#commentButton');
let articleContainer = document.querySelector('#container');
let myImg = document.createElement('img');

myImg.src = '../public/img/1200px-Oakland_Golden_Grizzlies_logo.svg.png';
//myImg.height = '90%';
//height will not work, no idea why and frankly I don't care anymore
myImg.alt = 'Alex Antonich';
myImg.title = 'Alex Antonich';
myImg.class = 'new_image';
myImg.border = '10%';

picButton.addEventListener('click', function () {
    articleContainer.insertBefore(myImg, picButton);
})