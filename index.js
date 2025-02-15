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

function login() {
  let username = document.getElementById("login-username").value.trim();
  let password = document.getElementById("login-password").value.trim();
  let message = document.getElementById("login-message");

  // Validation: Check if fields are empty
  if (!username || !password) {
      message.style.color = "red";
      message.innerText = "Please enter both email and password.";
      return;
  }

  // Get stored user data
  let storedUserData = localStorage.getItem(username);

  if (storedUserData) {
      let userData = JSON.parse(storedUserData); // Parse JSON data

document.addEventListener("DOMContentLoaded", function () {
  const text = "Coding Club";
  let index = 0;

  function typeEffect() {
      document.getElementById("typingText").textContent = text.slice(0, index);
      index++;

      if (index <= text.length) {
          setTimeout(typeEffect, 100); 
      }
       else{
         document.getElementById("typingText").style.borderRight = "none"; 
       }
  }
  typeEffect();
});

      if (userData.password === password) {
          localStorage.setItem("loggedInUser", username);
          message.style.color = "green";
          message.innerText = "Login successful! Redirecting...";
          setTimeout(() => window.location.href = "index.html", 2000);
      } else {
          message.style.color = "red";
          message.innerText = "Invalid credentials!";
      }
  } else {
      message.style.color = "red";
      message.innerText = "User not found!";
  }
}

function login() {
    let email = document.getElementById("login-username").value.trim();
    let password = document.getElementById("login-password").value.trim();
    let message = document.getElementById("login-message");

    // Validation: Check if fields are empty
    if (!email || !password) {
        message.style.color = "red";
        message.innerText = "Please enter both email and password.";
        return;
    }

    // Get stored user data using email (correct key)
    let storedUserData = localStorage.getItem(email);

    if (storedUserData) {
        let userData = JSON.parse(storedUserData); // Parse JSON data

        if (userData.password === password) {
            localStorage.setItem("loggedInUser", email);
            message.style.color = "green";
            message.innerText = "Login successful! Redirecting...";
            setTimeout(() => window.location.href = "index.html", 2000);
        } else {
            message.style.color = "red";
            message.innerText = "Invalid credentials!";
        }
    } else {
        message.style.color = "red";
        message.innerText = "User not found!";
    }
}

// Move this function outside of login()
document.addEventListener("DOMContentLoaded", function () {
    const text = "Coding Club";
    let index = 0;

    function typeEffect() {
        document.getElementById("typingText").textContent = text.slice(0, index);
        index++;

        if (index <= text.length) {
            setTimeout(typeEffect, 100); 
        } else {
            document.getElementById("typingText").style.borderRight = "none"; 
        }
    }
    typeEffect();
});

  