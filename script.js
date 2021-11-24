let myLibrary = [];

function Book(title, author, pages, response) {
    /* 
     ** constructor for Book object
     ** returns information about a single Book object
    */
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.response = response;
    this.info = function() {
        let information = this.title + " by " + this.author + ", " + this.pages + ", " + this.response;
        return information;
    }
}

function addBookToLibrary() {
    
}