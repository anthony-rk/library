let myLibrary = [];

// function Book() {
//     // The constructor
// }

function Book(title, author, pages, read) {
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

const book1 = new Book('1Q84', 'Haruki Murakami', 1342, true);
const book2 = new Book('Pride and Predujice', 'Jane Austen', 432, false);

console.log(book1.info());
console.log(book2.info());