const books = ["Мастер и Маргарита", "Гарри Поттер", "За пропастью во ржи", "Властелин колец", "Дюна", "Отцы и дети"];

const bookList = document.getElementById("book-list");
const addBookButton = document.getElementById("add-book");
const searchBookButton = document.getElementById("search-book");

function displayBooks() {
    bookList.innerHTML = "";
    books.forEach((book, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}) ${book}`;
        bookList.appendChild(li);
    });
}


addBookButton.addEventListener("click", () => {
    const newBook = prompt("Введите название книги:");
    if (newBook && newBook.trim() !== "") {
        books.push(newBook.trim());
        displayBooks();
    } else {
        alert("Название книги не введено!");
    }
});

searchBookButton.addEventListener("click", () => {
    const query = prompt("Введите название книги для поиска:");
    if (query && query.trim() !== "") {
        const bookItems = bookList.querySelectorAll("li");
        let found = false;
        bookItems.forEach((item) => {
            if (item.textContent.toLowerCase().includes(query.trim().toLowerCase())) {
                item.classList.add("highlight");
                found = true;
            } else {
                item.classList.remove("highlight");
            }
        });
        if (!found) {
            alert("Книга не найдена!");
        }
    } else {
        alert("Вы ничего не ввели!");
    }
});

displayBooks();