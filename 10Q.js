let books = [
    { title: "Book A", author: "Author 1", cost: 400 },
    { title: "Book B", author: "Mahatma Gandhi", cost: 600 },
    { title: "Book C", author: "Author 2", cost: 800 }
];

// Books costing more than 500
console.log("Books costing > 500:", books.filter(book => book.cost > 500));

// Book written by Mahatma Gandhi
let gandhiBook = books.find(book => book.author === "Mahatma Gandhi");
if (gandhiBook) console.log("Book by Mahatma Gandhi:", gandhiBook.title);