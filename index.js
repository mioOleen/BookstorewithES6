// eslint-disable-next-line import/no-unresolved
import { DateTime } from 'https://cdn.skypack.dev/luxon';
import BookList from './modules/BookList.js';
// eslint-disable-next-line no-unused-vars
import showSection from './modules/showSection.js';

const newTitle = document.getElementById('inputTitle');
const newAuthor = document.getElementById('inputAuthor');
const addButton = document.getElementById('addBtn');

const currentDate = document.getElementById('currentDate');
currentDate.textContent = DateTime.local().toLocaleString(DateTime.DATETIME_MED);

const bookList = new BookList();
function addBook() {
  const title = newTitle.value.trim();
  const author = newAuthor.value.trim();

  if (title && author) {
    bookList.addBook(title, author);
    newTitle.value = '';
    newAuthor.value = '';
  } else {
    // eslint-disable-next-line no-alert
    alert('Please enter title and author');
  }
}

bookList.displayBooks();
addButton.addEventListener('click', addBook);
