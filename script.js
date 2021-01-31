// Task 1 
// Создайте два файла css - один подключите сразу. Во втором пропишите стили так, чтобы скрывались все изображения, фоны и блоки. Оставался один текст, весь текст черным, выравнивание по левому краю, шрифт - serif. Добавьте кнопку при нажатии на которую вы должны получить элемент link href - где прописан путь к файлу css и заменить его на второй файл. Кнопка также должна скрываться.

let change = document.querySelector('.changeStyle');

change.onclick = otherStyle;

function otherStyle() {
   document.querySelector('link').href = "style2.css";
}

// Task 2
// Создайте параграф с текстом Hello. Добавьте кнопку. При нажатии кнопки к содержимому параграфа добавьте word. При каждом нажатии - добавляйте слово word. Сколько нажатий - столько word и добавляете.

let t2 = document.querySelector('.t2');

t2.onclick = addWord;

function addWord() {
   document.querySelector('.p2').innerHTML += ' word';
}

// Task 3
// Создайте параграф с текстом Hello. При нажатии кнопки между тегом p и словом Hello добавьте любой текст. Используйте insertAdjacentHTML.

let t3 = document.querySelector('.t3');

t3.onclick = insertAfter;

function insertAfter() {
   document.querySelector('.p3').insertAdjacentHTML('afterbegin', 'Hi or ');
}

// Task 4
// Создайте параграф с текстом Hello. При нажатии кнопки перед тегом p добавьте любой текст. Используйте insertAdjacentHTML.

let t4 = document.querySelector('.t4');

t4.onclick = insertBefore;

function insertBefore() {
   document.querySelector('.p4').insertAdjacentHTML('beforebegin', 'Hi or ');
}

// Task 5
// Создайте параграф с текстом Hello. При нажатии кнопки после слова Hello и перед закрывающимся тегом p добавьте любой текст. Используйте insertAdjacentHTML.

let t5 = document.querySelector('.t5');

t5.onclick = insertBeforeEnd;

function insertBeforeEnd() {
   document.querySelector('.p5').insertAdjacentHTML('beforeend', ' or Hi');
}

// Task 6
// Создайте параграф с текстом Hello. При нажатии кнопки перезатрите содержимое параграфа строкой <b>Hi</b>. Вставку произведите сналача с помощью innerHTML, затем с помощью innerText. Изучите отличия вставки.

let t6 = document.querySelector('.t6');
let p6 = document.querySelector('.p6');

t6.onclick = noHello;

function noHello() {
   // p6.innerHTML = '<b>Hi</b>';
   p6.innerText = '<b>Hi</b>';
}

// Task 7
// Создайте параграф с текстом Hello. При нажатии кнопки перезатрите параграф строкой <b>Hi</b>. Вставку произведите сналача с помощью outerHTML, затем с помощью outerText. Изучите отличия вставки.

let t7 = document.querySelector('.t7');
let p7 = document.querySelector('.p7');

t7.onclick = outer;

function outer() {
   // p7.outerHTML = "<b>Hi</b>";
   p7.outerText = "<b>Hi</b>";
}
