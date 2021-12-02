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

/* predefined objects to show in table */
const bookobj0 = new Book ("maha ko ma", "madan bdr.", 250, "read");
const bookobj1 = new Book ("elon musk: tesla.", "elon musk.", 450, "read");
const bookobj2 = new Book ("steve jobs", "walter isaacson", 420, "read");
const bookobj3 = new Book ("physics of everyday.", "isac kaka", 850, "not read");
const bookobj4 = new Book ("gone girl", "gillian flynn", 432, "read");
const bookobj5 = new Book ("the martian", "andy weir", 369, "read");
const bookobj6 = new Book ("exit west", "mohsin hamid", 229, "not read");
const bookobj7 = new Book ("homegoing", "yaa gyasi", 320, "not read");

let myLibrary = [bookobj0, bookobj1, bookobj2, bookobj3, bookobj4, bookobj5, bookobj6, bookobj7];

function displayBooks() {

    /* displays the predefined object in table format */
    const table_body = document.querySelector(".table-body");

    for (i=0; i<myLibrary.length; i++) {
        let row_element = document.createElement("tr");
        table_body.appendChild(row_element);

        /* adds to node title of book */
        let title_node = document.createElement("td");
        title_node.textContent = myLibrary[i].title;
        document.querySelectorAll(".table-body tr")[i].appendChild(title_node);

        /* adds to node author of book */
        let author_node = document.createElement("td");
        author_node.textContent = myLibrary[i].author;        
        document.querySelectorAll(".table-body tr")[i].appendChild(author_node);
        
        /* add to node how many pages of book */
        let pages_node = document.createElement("td");
        pages_node.textContent = myLibrary[i].pages;
        document.querySelectorAll(".table-body tr")[i].appendChild(pages_node);

        /* adds to node the response for book */
        let response_node = document.createElement("td");
        response_node.textContent = myLibrary[i].response;
        document.querySelectorAll(".table-body tr")[i].appendChild(response_node);

        /* adds remove button to each row */
        let remove_node = document.createElement("button");
        remove_node.textContent = "remove";
        remove_node.classList.add("remove_btn");
        remove_node.setAttribute('onclick', 'deleteRow(this)');
        document.querySelectorAll(".table-body tr")[i].appendChild(remove_node);
    }
}

displayBooks();

function fetchData(){
    /*
     ** this function fetches data from user input form 
     */

    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let response = document.getElementById("response").value;

    myLibrary.push(new Book(title, author, pages, response));
    document.querySelectorAll("input").forEach(function(element) {
        element.value = '';
    });

    /* adds each information to the table creating new row */
    const table_body = document.querySelector(".table-body");

    let row_element = document.createElement("tr");
    table_body.appendChild(row_element);

    /* title of book */
    let title_node = document.createElement("td");
    title_node.textContent = myLibrary[myLibrary.length-1].title;
    let nodes = document.querySelectorAll(".table-body tr");
    document.querySelectorAll(".table-body tr")[nodes.length-1].appendChild(title_node);

    /* author of book */
    let author_node = document.createElement("td");
    author_node.textContent = myLibrary[myLibrary.length-1].author;        
    document.querySelectorAll(".table-body tr")[nodes.length-1].appendChild(author_node);
    
    /* pages of book */
    let pages_node = document.createElement("td");
    pages_node.textContent = myLibrary[myLibrary.length-1].pages;
    document.querySelectorAll(".table-body tr")[nodes.length-1].appendChild(pages_node);

    /* response for book */
    let response_node = document.createElement("td");
    response_node.textContent = myLibrary[myLibrary.length-1].response;
    document.querySelectorAll(".table-body tr")[nodes.length-1].appendChild(response_node);

    /* adds remove button to each row */
    let remove_node = document.createElement("button");
    remove_node.textContent = "remove";
    remove_node.classList.add("remove_btn");
    remove_node.setAttribute('onclick', 'deleteRow(this)');
    document.querySelectorAll(".table-body tr")[nodes.length-1].appendChild(remove_node);

    document.querySelector(".form-bg").style.display = 'none';
}

/* check for add book button pressed or cancel button pressed */
document.querySelector(".add-entry").addEventListener("click", function() {
    document.querySelector(".form-bg").style.display = 'flex';
});

document.querySelector(".cancel-btn").addEventListener("click", function() {
    document.querySelector(".form-bg").style.display = 'none';
});


function deleteRow(row) {
     /* 
     ** deletes the specified row of a table
     ** remove button when pressed invokes this function which in
     ** return deletes the same row in the table
    */
    let index = row.parentNode.rowIndex;

    document.querySelector(".content-table").deleteRow(index);
}
