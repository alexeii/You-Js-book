'use strict';
//удаление рекламы
let advReklama = document.querySelector('.adv');
advReklama.remove();
//Заменить картинку заднего фона на другую из папки imag
document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';
//Восстановить порядок книг.
let Books = document.querySelectorAll('.book');

Books[0].before(Books[1]);
Books[2].before(Books[4]);
Books[5].after(Books[2]);








console.log(Books);