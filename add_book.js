document.getElementById("bookForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const condition = document.getElementById("condition").value;
    const price = document.getElementById("price").value;
    const image = document.getElementById("image").value;


    const newBook = { title, author, condition, price, image };

    let books = JSON.parse(localStorage.getItem("books")) || [];
    books.push(newBook);


    localStorage.setItem("books", JSON.stringify(books));

    window.location.href = "index.html";
});
