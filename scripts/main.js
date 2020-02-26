// https://www.valentinog.com/blog/html-table/

let myLibrary = [];

var render = function (template, node) {
	node.innerHTML = template;
};

function Book(title, author, pages, read) {
    // Constructor
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
    this.info = function() {
        if (read === true) {
            return title + " by " + author + ", " + pages + " pages, has been read." ;     
        } else {
            return title + " by " + author + ", " + pages + " pages, not read yet."; 
        }
    }
}

function addBookToLibray(newBook) {
    myLibrary.push(newBook);
}

const book1Q84 = new Book('1Q84', 'Haruki Murakami', 1342, true);
const bookPridePrejudice = new Book('Pride and Predujice', 'Jane Austen', 432, false);

addBookToLibray(book1Q84);
addBookToLibray(bookPridePrejudice);

console.table(myLibrary);

let booksDisplay = document.getElementById('books');
myLibrary.forEach(book => render(book + ' ', booksDisplay));
// render(myLibrary, booksDisplay);