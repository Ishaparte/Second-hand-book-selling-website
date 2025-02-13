document.addEventListener("DOMContentLoaded", function () {
    const booksContainer = document.getElementById("booksContainer");

    
    let books = JSON.parse(localStorage.getItem("books")) || [];

    books.forEach(book => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");

        bookCard.innerHTML = `
            <img src="${book.image}" alt="Book Cover">
            <div class="book-details">
                <h3>${book.title}</h3>
                <p><strong>Author:</strong> ${book.author}</p>
                <p><strong>Condition:</strong> ${book.condition}</p>
                <p class="price">₹${book.price}</p>
                <a href="#" class="button">Buy Now</a>
            </div>
        `;

        booksContainer.appendChild(bookCard);
    });
});
