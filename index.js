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

function searchBooks() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let bookCards = document.querySelectorAll(".book-card");
    let clearBtn = document.getElementById("clearBtn");

    bookCards.forEach(card => {
        let title = card.querySelector("h3").textContent.toLowerCase();
        let author = card.querySelector("p").textContent.toLowerCase();

        if (title.includes(input) || author.includes(input)) {
            card.style.display = "block"; 
        } else {
            card.style.display = "none"; 
        }
    });

    // Show clear button if there's input
    clearBtn.style.display = input.length > 0 ? "block" : "none";
}

function clearSearch() {
    document.getElementById("searchInput").value = "";
    document.getElementById("clearBtn").style.display = "none";
    let bookCards = document.querySelectorAll(".book-card");
    bookCards.forEach(card => {
        card.style.display = "block"; 
    });
}

function addToCart(id, name, price,author,condition,image) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let existingProduct = cart.find(item => item.id === id);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ id, name, price,author,condition,image, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Item added to cart!");
}
