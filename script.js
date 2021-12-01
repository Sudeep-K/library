function Book(title, author, pages, response) {
    /* 
     ** constructor for Book object
     ** returns information about a single Book object
    */
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.response = response;
}

const bookobj0 = new Book ("maha ko ma", "madan bdr.", 250, "read");
const bookobj1 = new Book ("elon musk: tesla.", "elon musk.", 450, "read");
const bookobj2 = new Book ("steve jobs", "walter isaacson", 420, "read");
const bookobj3 = new Book ("physics of everyday.", "isac kaka", 850, "not read");

let myLibrary = [bookobj0, bookobj1, bookobj2, bookobj3];

function displayBooks() {

    const table_body = document.querySelector(".table-body");

    for (i=0; i<myLibrary.length; i++) {
        let row_element = document.createElement("tr");
        table_body.appendChild(row_element);

        /* title of book */
        let title_node = document.createElement("td");
        title_node.textContent = myLibrary[i].title;
        document.querySelectorAll(".table-body tr")[i].appendChild(title_node);

        /* author of book */
        let author_node = document.createElement("td");
        author_node.textContent = myLibrary[i].author;        
        document.querySelectorAll(".table-body tr")[i].appendChild(author_node);
        
        /* pages of book */
        let pages_node = document.createElement("td");
        pages_node.textContent = myLibrary[i].pages;
        document.querySelectorAll(".table-body tr")[i].appendChild(pages_node);

        /* response for book */
        let response_node = document.createElement("td");
        response_node.textContent = myLibrary[i].response;
        document.querySelectorAll(".table-body tr")[i].appendChild(response_node);
    }
}

displayBooks();
