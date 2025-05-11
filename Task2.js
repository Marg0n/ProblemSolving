
const books = [
    { title: "Harry Potter", author: "J K Rowling", year: 1997 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 }
];

//* Function to return an array of book titles
function getBookTitles(arrayOfBooks) {
    return arrayOfBooks.map(book => book.title);
}


const titles = getBookTitles(books);
console.log(titles);
