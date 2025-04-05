const openModalBtn = document.getElementById('open-modal-btn');
const addBookModal = document.getElementById('add-book-modal');
const addBtn = addBookModal.querySelector("#add-btn");
const libraryContainer = document.getElementById('library-container');

const myLibraryOld = [
    {
        title: "Harry Potter and the Philosopher's Stone",
        author: "J.K. Rowling",
        coverUrl: "https://m.media-amazon.com/images/I/81q77Q39nEL.jpg",
        id: crypto.randomUUID(),
        pages: 223,
        isRead: true
    },
    {
        title: "Hunger Games",
        author: "Suzanne Collins",
        coverUrl: "https://m.media-amazon.com/images/I/71WSzS6zvCL._AC_UF1000,1000_QL80_.jpg",
        id: crypto.randomUUID(),
        pages: 374,
        isRead: false
    },
    {
        title: "The Lord of The Rings",
        author: "J.R.R. Tolkien",
        coverUrl: "https://m.media-amazon.com/images/I/81nV6x2ey4L._AC_UF1000,1000_QL80_.jpg",
        id: crypto.randomUUID(),
        pages: 1216,
        isRead: true
    },
    {
        title: "The Name of the Rose",
        author: "Umberto Eco",
        coverUrl: "https://m.media-amazon.com/images/I/61pzkt+y9BL.jpg",
        id: crypto.randomUUID(),
        pages: 512,
        isRead: true
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        coverUrl: "https://m.media-amazon.com/images/I/81aY1lxk+9L._SL1500_.jpg",
        id: crypto.randomUUID(),
        pages: 281,
        isRead: false
    },
    {
        title: "1984",
        author: "George Orwell",
        coverUrl: "https://m.media-amazon.com/images/I/71kxa1-0mfL.jpg",
        id: crypto.randomUUID(),
        pages: 328,
        isRead: false
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        coverUrl: "https://m.media-amazon.com/images/I/612eioh-AFL._AC_UL640_QL65_.jpg",
        id: crypto.randomUUID(),
        pages: 279,
        isRead: true
    },
    {
        title: "Moby Dick",
        author: "Herman Melville",
        coverUrl: "https://m.media-amazon.com/images/I/71Xdjmx39uL._AC_UL640_QL65_.jpg",
        id: crypto.randomUUID(),
        pages: 635,
        isRead: true
    },
    {
        title: "War and Peace",
        author: "Leo Tolstoy",
        coverUrl: "https://m.media-amazon.com/images/I/61UyS0rJc2L._SL1200_.jpg",
        id: crypto.randomUUID(),
        pages: 1225,
        isRead: false
    },
    {
        title: "Crime and Punishment",
        author: "Fyodor Dostoevsky",
        coverUrl: "https://m.media-amazon.com/images/I/81t2CVWEsUL.jpg",
        id: crypto.randomUUID(),
        pages: 671,
        isRead: true
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        coverUrl: "https://m.media-amazon.com/images/I/91b0C2YNSrL.jpg",
        id: crypto.randomUUID(),
        pages: 310,
        isRead: true
    },
    {
        title: "Brave New World",
        author: "Aldous Huxley",
        coverUrl: "https://m.media-amazon.com/images/I/71GNqqXuN3L._SL1500_.jpg",
        id: crypto.randomUUID(),
        pages: 311,
        isRead: false
    },
    {
        title: "The Picture of Dorian Gray",
        author: "Oscar Wilde",
        coverUrl: "https://m.media-amazon.com/images/I/61FdXlJX0-L._SL1200_.jpg",
        id: crypto.randomUUID(),
        pages: 254,
        isRead: true
    },
    {
        title: "Wuthering Heights",
        author: "Emily Brontë",
        coverUrl: "https://m.media-amazon.com/images/I/61CM-bYfT4S._SL1500_.jpg",
        id: crypto.randomUUID(),
        pages: 416,
        isRead: false
    }
];

class Book {
    constructor(title, author, coverUrl, pages, isRead) {
        this.title = title;
        this.author = author;
        this.coverUrl = coverUrl;
        this.id = crypto.randomUUID();
        this.pages = pages;
        this.isRead = isRead;
    }

    toggleRead() {
        this.isRead = !this.isRead;
    }
}

const myLibrary = [
    new Book(
      "Harry Potter and the Philosopher's Stone",
      "J.K. Rowling",
      "https://m.media-amazon.com/images/I/81q77Q39nEL.jpg",
      223,
      true
    ),
    new Book(
      "Hunger Games",
      "Suzanne Collins",
      "https://m.media-amazon.com/images/I/71WSzS6zvCL._AC_UF1000,1000_QL80_.jpg",
      374,
      false
    ),
    new Book(
      "The Lord of The Rings",
      "J.R.R. Tolkien",
      "https://m.media-amazon.com/images/I/81nV6x2ey4L._AC_UF1000,1000_QL80_.jpg",
      1216,
      true
    ),
    new Book(
      "The Name of the Rose",
      "Umberto Eco",
      "https://m.media-amazon.com/images/I/61pzkt+y9BL.jpg",
      512,
      true
    ),
    new Book(
      "To Kill a Mockingbird",
      "Harper Lee",
      "https://m.media-amazon.com/images/I/81aY1lxk+9L._SL1500_.jpg",
      281,
      false
    ),
    new Book(
      "1984",
      "George Orwell",
      "https://m.media-amazon.com/images/I/71kxa1-0mfL.jpg",
      328,
      false
    ),
    new Book(
      "Pride and Prejudice",
      "Jane Austen",
      "https://m.media-amazon.com/images/I/612eioh-AFL._AC_UL640_QL65_.jpg",
      279,
      true
    ),
    new Book(
      "Moby Dick",
      "Herman Melville",
      "https://m.media-amazon.com/images/I/71Xdjmx39uL._AC_UL640_QL65_.jpg",
      635,
      true
    ),
    new Book(
      "War and Peace",
      "Leo Tolstoy",
      "https://m.media-amazon.com/images/I/61UyS0rJc2L._SL1200_.jpg",
      1225,
      false
    ),
    new Book(
      "Crime and Punishment",
      "Fyodor Dostoevsky",
      "https://m.media-amazon.com/images/I/81t2CVWEsUL.jpg",
      671,
      true
    ),
    new Book(
      "The Hobbit",
      "J.R.R. Tolkien",
      "https://m.media-amazon.com/images/I/91b0C2YNSrL.jpg",
      310,
      true
    ),
    new Book(
      "Brave New World",
      "Aldous Huxley",
      "https://m.media-amazon.com/images/I/71GNqqXuN3L._SL1500_.jpg",
      311,
      false
    ),
    new Book(
      "The Picture of Dorian Gray",
      "Oscar Wilde",
      "https://m.media-amazon.com/images/I/61FdXlJX0-L._SL1200_.jpg",
      254,
      true
    ),
    new Book(
      "Wuthering Heights",
      "Emily Brontë",
      "https://m.media-amazon.com/images/I/61CM-bYfT4S._SL1500_.jpg",
      416,
      false
    )
  ];

function addBookToLibrary(title, author, coverUrl, pages, isRead) {
    if (!title || !author) {
        alert('Required values are missing!');
        return;
    }
    if (myLibrary.some(book => book.title === title)) {
        alert('The book is already in the library.');
        return;
    }
    const book = new Book(title, author, coverUrl, pages, isRead);
    myLibrary.push(book);
}

//Function for refreshing the main section in html
const refreshLibraryDisplay = () => {
    libraryContainer.innerHTML = '';
    myLibrary.forEach(book => {
        libraryContainer.innerHTML +=  `
        <div class="book-card">
            <div class="book-cover">
                <button id="delete-btn" class="delete-btn" data-bookid="${book.id}">
                    <span class="material-symbols-rounded">delete</span>
                </button>
                <img src="${book.coverUrl ? book.coverUrl : 'https://store.bookbaby.com/BookShop/CommonControls/BookshopThemes/bookshop/OnePageBookCoverImage.jpg?BookID=BK90018441&abOnly=False&ImageType=FrontLarge'}" alt="${book.title} cover">
            </div>
            <div class="book-info">
                <div class="author-name">${book.author}</div>
                <div class="book-title">${book.title}</div>
                <div class="reading-info">
                    <span class="pages">${book.pages ? book.pages + ' pages' : 'N/D pages'}</span>
                    <span class="read-status-msg">click to toggle</span>
                    <span class="${book.isRead ? 'read-status read badge' : 'read-status not-read badge'}" data-bookid="${book.id}"></span>
                </div>
            </div>
        </div>
        `
    });
};

//Open modal
openModalBtn.addEventListener('click', () => {
    addBookModal.showModal();
});

//Add book to library
addBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const title = document.getElementById('book-title').value;
    const author = document.getElementById('author-name').value;
    const cover = document.getElementById('cover-url').value;
    const pages = document.getElementById('page-number').value;
    const isRead = document.getElementById('read-status').checked;
    addBookToLibrary(title, author, cover, pages, isRead);
    refreshLibraryDisplay();
    addBookModal.close();
});

//Setting up html on load
window.addEventListener('DOMContentLoaded', () => {
    refreshLibraryDisplay();
    deleteBtn = document.querySelectorAll('.delete-btn');
});

//Delete Books
libraryContainer.addEventListener("click", (e) => {
    const deleteBtn = e.target.closest(".delete-btn");
    if (deleteBtn) {
        const bookId = deleteBtn.dataset.bookid;
        const deleteIndex = myLibrary.findIndex(book => book.id === bookId);
        myLibrary.splice(deleteIndex, 1);
        refreshLibraryDisplay();
    }
});

//Toggle read status
libraryContainer.addEventListener("click", (e) => {
    const readStatus = e.target.closest(".read-status");
    if (readStatus) {
        readStatus.classList.toggle('read');
        readStatus.classList.toggle('not-read');
        const bookId = readStatus.dataset.bookid;
        const changeStatusIndex = myLibrary.findIndex(book => book.id === bookId);
        myLibrary[changeStatusIndex].toggleRead();
        console.log(myLibrary[changeStatusIndex]);
    }
});
  
    