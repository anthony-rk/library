// https://www.valentinog.com/blog/html-table/

let myLibrary = [];

// Object Constructor
function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}

addBookToLibray = function(newBook, myArray) {
    myArray.push(newBook);
};

Book.prototype.toggleRead = function(book) {
    // Toggle "Read" to "Not Read"
    return book.read === true ? book.read = false : book.read = true;
};

const book1Q84 = new Book('1Q84', 'Haruki Murakami', 1342, true);
const bookCleanCode = new Book('Clean Code', 'Robert C. Martin', 407, true);
const bookPridePrejudice = new Book('Pride and Prejudice', 'Jane Austen', 432, false);

addBookToLibray(book1Q84, myLibrary);
addBookToLibray(bookCleanCode, myLibrary);
addBookToLibray(bookPridePrejudice, myLibrary);

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
// Runder renderBookInfor for the headers
let renderBookHeader = function(inputBook) {
    let lineBreak = document.createElement('br');

    let baseNode = document.getElementById("books");
    let parent = document.createElement('div');
    parent.classList.add('root');
    baseNode.append(parent);
    parent.append(lineBreak);

    // Make 4 divs here, one for Title, Author, Pages, and Read. Use CSS Classes to format
    let divTitle = document.createElement('div')
    divTitle.classList.add('headerTitle');
    parent.append(divTitle);

    let divAuthor = document.createElement('div');
    divAuthor.classList.add('headerAuthor');
    parent.append(divAuthor);

    let divPages = document.createElement('div');
    divPages.classList.add('headerPages');
    parent.append(divPages);

    let divRead = document.createElement('div');
    divRead.classList.add('headerRead');
    parent.append(divRead);

    divTitle.innerText = "Title";
    divAuthor.innerText = 'Author';
    divPages.innerText = 'Pages';
    divRead.innerText = 'Read';

}();

// Run renderBooKInfo for the myLibrary array
let renderOnPage = function(inputArray) {
    let length = inputArray.length;

    for (let i = 0; i < length; i++) {
        renderBookInfo(inputArray[i]);
    }
}(myLibrary);

// let addNewUserAddedBook = function(newBookObject) {
//     myLibrary.push(newBookObject);
// };

let getNewBookData = function() {
    let newBookObject = {};
    
    // Add conditions for if user puts wrong info inside or if it is blank
    newBookObject.title = prompt("Please enter new book title:", "War & Peace");
    newBookObject.author = prompt("Please enter new book author:", "Leo Tolstoy");
    newBookObject.pages = prompt("Please enter new book pages:", "1225");
    newBookObject.read = prompt("Please enter if new book has been read: (True/False)", "True");

    console.log(newBookObject);
    // return newBookObject;
    myLibrary.push(newBookObject);
    renderBookInfo(myLibrary[myLibrary.length - 1]);
};

