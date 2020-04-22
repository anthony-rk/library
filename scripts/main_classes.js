// Update the Object Constructor to Class per https://www.theodinproject.com/courses/javascript/lessons/classes

let myLibrary = [];

class Book {
    constructor(title, author, pages, read, index){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.index = index;
    }
    toggleRead() {
        // Toggle "Read" to "Not Read"
        console.log(this.read);

        if (this.read === true) {
            this.read = false;
        } else {
            this.read = true;
        }
        console.log(this.read);
    }
    sayHello() {
        console.log(this.title);
    }
}

// ORIGINAL OBJECT CONSTRUCTOR BELOW
// // Object Constructor
// function Book(title, author, pages, read, index) {
//     this.title = title,
//     this.author = author,
//     this.pages = pages,
//     this.read = read,
//     this.index = index;
// }

// Book.prototype.toggleRead = function() {
//     // Toggle "Read" to "Not Read"
//     console.log(this.read);

//     if (this.read === true) {
//         this.read = false;
//     } else {
//         this.read = true;
//     }
//     console.log(this.read);
// }

// Book.prototype.sayHello = function() {
//     console.log(this.title);
// }

addBookToLibray = function(newBook, myArray) {
    myArray.push(newBook);
};

// Initialize the Library with some Data
const book1Q84 = new Book('1Q84', 'Haruki Murakami', 1342, true, (myLibrary.length));
addBookToLibray(book1Q84, myLibrary);
const bookCleanCode = new Book('Clean Code', 'Robert C. Martin', 407, true, (myLibrary.length));
addBookToLibray(bookCleanCode, myLibrary);
const bookPridePrejudice = new Book('Pride and Prejudice', 'Jane Austen', 432, false, (myLibrary.length));
addBookToLibray(bookPridePrejudice, myLibrary);

// make render work on 1 entry in the array, and then loop over the full myLibrary array
let renderBookInfo = function(inputBook) {
    let lineBreak = document.createElement('br');

    let baseNode = document.getElementById("books");
    let parent = document.createElement('div');
    parent.classList.add('root');
    baseNode.append(parent);
    parent.append(lineBreak);

    // Make a div for the Remove button
    let buttonRemoveBook = document.createElement('button');
    let currentIndex = inputBook.index;
    buttonRemoveBook.classList.add('buttonRemoveBook');
    buttonRemoveBook.classList.add(currentIndex); // newly added
    buttonRemoveBook.innerHTML = "Remove";
    buttonRemoveBook.addEventListener("click", function() {
        // Remove the book object from myLibrary array. 
        myLibrary.splice(currentIndex, 1);
        // Re-run the renderBookInfo() on each in the array.
        removeCurrentRenderingOnPage();
        renderOnPage(myLibrary);
        // Need to have the indexes update dynamically when I reload the rendering
    });
    parent.append(buttonRemoveBook);

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

    let divReadButton = document.createElement('button');
    divReadButton.classList.add('divReadButton');
    divReadButton.innerHTML = "Update Read";
    divReadButton.addEventListener("click", function() {
        // Update the contents of read using toggleRead prototype function
        myLibrary[currentIndex].toggleRead();

        // Re-run the renderBookInfo() on each in the array.
        removeCurrentRenderingOnPage();
        renderOnPage(myLibrary);
    });
    parent.append(divReadButton);

    divTitle.innerText = inputBook.title;
    divAuthor.innerText = inputBook.author;
    divPages.innerText = inputBook.pages;
    divRead.innerText = inputBook.read;
};

// Render renderBookInfo for the headers
let renderBookHeader = function(inputBook) {
    let lineBreak = document.createElement('br');

    let baseNode = document.getElementById("books");
    let parent = document.createElement('div');
    parent.classList.add('root-header');
    baseNode.append(parent);
    parent.append(lineBreak);

    // Make 1 div for the remove button column
    let divRemoveButton = document.createElement('div')
    divRemoveButton.classList.add('headerRemoveButton');
    parent.append(divRemoveButton);

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

}(); // IFFE to display on page immediately

// Run renderBooKInfo for the myLibrary array
let renderOnPage = function(inputArray) {
    let length = inputArray.length;

    for (let i = 0; i < length; i++) {
        inputArray[i].index = i;
        renderBookInfo(inputArray[i]);
    }
    console.table(myLibrary); // For data validation
};
renderOnPage(myLibrary);

let removeCurrentRenderingOnPage = function() {
    // remove the current renderings on page
    removeElementsByClass('root');
};

let removeElementsByClass = function(className){
    var elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
};

let getNewBookData = function() {
    let newBookObject = {};
    
    // Add conditions for if user puts wrong info inside or if it is blank
    newBookObject.title = prompt("Please enter new book title:", "War & Peace");
    newBookObject.author = prompt("Please enter new book author:", "Leo Tolstoy");
    newBookObject.pages = prompt("Please enter new book pages:", "1225");
    newBookObject.read = prompt("Please enter if new book has been read: (True/False)", "True");
    newBookObject.index = (myLibrary.length);

    addBookToLibray(newBookObject, myLibrary);
    removeCurrentRenderingOnPage();
    renderOnPage(myLibrary);
};

