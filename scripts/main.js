// https://www.valentinog.com/blog/html-table/

let myLibrary = [];

// Object Constructor
function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}

function addBookToLibray(newBook) {
    myLibrary.push(newBook);
}

Book.prototype.toggleRead = function(book) {
    // Toggle "Read" to "Not Read"
    return book.read === true ? book.read = false : book.read = true;
}

const book1Q84 = new Book('1Q84', 'Haruki Murakami', 1342, true);
const bookCleanCode = new Book('Clean Code', 'Robert C. Martin', 407, true);
const bookPridePrejudice = new Book('Pride and Prejudice', 'Jane Austen', 432, false);

addBookToLibray(book1Q84);
addBookToLibray(bookCleanCode);
addBookToLibray(bookPridePrejudice);

// To display the table in the console
console.table(myLibrary);

// Need to take myLibrary array and stick each data point under the correct field
// myLibrary.forEach(book => {
//     console.log(book.title);
// });

// make render work on 1 entry in the array, and then foreach() it to the rest
let renderBookInfo = function(inputBook) {
    let lineBreak = document.createElement('br');

    let baseNode = document.getElementById("books");
    let parent = document.createElement('div');
    parent.classList.add('root');
    baseNode.append(parent);
    parent.append(lineBreak);


    // Make 4 divs here, one for Title, Author, Pages, and Read. Use CSS Classes to format
    let divTitle = document.createElement('div')
    divTitle.classList.add('divTitle');
    parent.append(divTitle);

    let divAuthor = document.createElement('div');
    divAuthor.classList.add('divAuthor');
    parent.append(divAuthor);

    let divPages = document.createElement('div');
    divPages.classList.add('divPages');
    parent.append(divPages);

    let divRead = document.createElement('div');
    divRead.classList.add('divRead');
    parent.append(divRead);

    divTitle.innerText = inputBook.title;
    divAuthor.innerText = inputBook.author;
    divPages.innerText = inputBook.pages;
    divRead.innerText = inputBook.read;

};

// Run renderBooKInfo for the myLibrary array
let renderOnPage = function(inputArray) {
    let length = inputArray.length;

    for (let i = 0; i < length; i++) {
        renderBookInfo(inputArray[i]);
    }
}(myLibrary);
