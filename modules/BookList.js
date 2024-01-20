import Book from './Book.js';

export default class BookList {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
  }

  addBook(title, author) {
    const newBook = new Book(title, author);
    this.books.push(newBook);
    this.updateLocalData();
    this.displayBooks();
  }

  removeBook(index) {
    this.books = this.books.filter((book, i) => i !== index);
    this.updateLocalData();
    this.displayBooks();
  }

  updateLocalData() {
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  displayBooks() {
    const bookContainer = document.getElementById('bookContainer');
    bookContainer.innerHTML = '';

    this.books.forEach((book, index) => {
      const div = document.createElement('div');
      div.classList.add('container');
      const p = document.createElement('p');
      p.innerText = `${book.title}  by  ${book.author} `;
      const removeButton = document.createElement('button');
      removeButton.innerText = 'Remove';
      removeButton.classList.add('removeBtn');
      removeButton.onclick = () => this.removeBook(index);

      div.append(p);
      div.append(removeButton);
      bookContainer.appendChild(div);
    });
  }
}
