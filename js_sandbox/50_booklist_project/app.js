// Book Constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI Constructor
function UI() {

}

UI.prototype.addBookToList = function (book) {
    const list = document.getElementById('book-list');
    // Create tr element
    const row = document.createElement('tr');
    // Insert cols
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X<a></td>
    `;
    list.appendChild(row);
};

// Show alert
UI.prototype.showAlert = function (message, className) {
    // Create div
    const div = document.createElement('div');
    // Add classes
    div.className = `alert ${className}`;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector('.container');
    // Get form
    const form = document.querySelector('#book-form');
    // Insert alert
    container.insertBefore(div, form);

    // Timeout after 3 seconds
    setTimeout(function () {
        document.querySelector('.alert').remove();
    }, 3000);
}

// Delete Book
UI.prototype.deleteBook = function (target) {
    if (target.className === 'delete') {
        target.parentElement.parentElement.remove();
    }
}

UI.prototype.clearFields = function () {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
};

// Store Constructor
function Store() {

}


Store.prototype.getBooks = function () {
    let books;
    if (localStorage.getItem('books') === null) {
        books = [];
    } else {
        books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
}
Store.prototype.displayBooks = function () {
    const books = new Store().getBooks();

    books.forEach(function (book) {
        const ui = new UI();
        ui.addBookToList(book);
    });
}
Store.prototype.addBook = function (book) {
    const books = new Store().getBooks();

    books.push(book);

    localStorage.setItem('books', JSON.stringify(books));
}

Store.prototype.removeBook = function (isbn) {
    const books = new Store().getBooks();


    books.forEach(function (book, index) {
        if (book.isbn === isbn) {
            books.splice(index, 1);
        }
    });

    localStorage.setItem('books', JSON.stringify(books));
}

// DOM Load event
document.addEventListener('DOMContentLoaded', function () {
    const store = new Store().displayBooks();
});

// Event listeners for add book
document.getElementById('book-form').addEventListener('submit',
    function (e) {
        // Get form values
        const title = document.getElementById('title').value,
            author = document.getElementById('author').value,
            isbn = document.getElementById('isbn').value;
        // Instantiate book
        const book = new Book(title, author, isbn);
        // Instantiate UI
        const ui = new UI();

        // Validate
        if (title === '' || author === '' || isbn === '') {
            // Error alert
            ui.showAlert('Please fill in all  fields!', 'error');
        } else {
            // Add book to list
            ui.addBookToList(book);
            // Add to LS
            const store = new Store().addBook(book);
            // Clear fields
            ui.clearFields();
            // Show success
            ui.showAlert('Book added!', 'success')
        }
        e.preventDefault();
    });

// Event listener for delete
document.getElementById('book-list').addEventListener('click', function (e) {
    // Instantiate UI
    const ui = new UI();

    // Remove from LS
    const store = new Store().removeBook(e.target.parentElement.previousElementSibling.textContent);;

    // Delete book
    ui.deleteBook(e.target);

    // Show success
    ui.showAlert('Book Removed!', 'success')

    e.preventDefault();
});    