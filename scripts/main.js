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
}

// Book.prototype.info = function() {
//     if (read === true) {
//         return title + " by " + author + ", " + pages + " pages, has been read." ;     
//     } else {
//         return title + " by " + author + ", " + pages + " pages, not read yet."; 
//     }
// }

Book.prototype.toggleRead = function(book) {
    // Toggle "Read" to "Not Read"
    return book.read === true ? book.read = false : book.read = true;
}

function addBookToLibray(newBook) {
    myLibrary.push(newBook);
}

const book1Q84 = new Book('1Q84', 'Haruki Murakami', 1342, true);
const bookCleanCode = new Book('Clean Code', 'Robert C. Martin', 407, true);
const bookPridePrejudice = new Book('Pride and Prejudice', 'Jane Austen', 432, false);

addBookToLibray(book1Q84);
addBookToLibray(bookCleanCode);
addBookToLibray(bookPridePrejudice);

console.table(myLibrary);

let tbody = document.getElementsByName("tbody");

