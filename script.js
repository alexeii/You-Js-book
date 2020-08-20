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

//Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")
Books[4].querySelector('a').textContent = 'Книга 3. this и Прототипы Объектов';

//Восстановить порядок глав во второй и пятой книге(внимательно инспектируйте индексы элементов, поможет dev tools)
let elemLi2 = Books[0].querySelectorAll('li');
elemLi2[9].after(elemLi2[2]);
elemLi2[3].after(elemLi2[6]);
elemLi2[6].after(elemLi2[8]);

let elemLi5 = Books[5].querySelectorAll('li');
elemLi5[1].after(elemLi5[9]);
elemLi5[9].after(elemLi5[3]);
elemLi5[3].after(elemLi5[4]);
elemLi5[7].after(elemLi5[5]);

//в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место
let elemLi6 = Books[2].querySelectorAll('li');
elemLi6[8].insertAdjacentHTML('afterend', '<li>Глава 8: За пределами ES6</li>');