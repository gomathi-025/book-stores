const books = [
    { title: "Book 1", author: "Author 1", image: "book11.jpeg" },
    { title: "Book 2", author: "Author 2", image: "book10.jpeg" },
    { title: "Book 3", author: "Author 3", image: "book8.jpeg" },
    { title: "Book 4", author: "Author 4", image: "book12.jpeg" },
    { title: "Book 5", author: "Author 5", image: "book5.jpeg" },
    { title: "Book 6", author: "Author 6", image: "book 1.jpeg" }
  ];
  
  const bestsellers = [
    { title: "Bestseller 1", author: "Author A", image: "book2.jpeg" },
    { title: "Bestseller 2", author: "Author B", image: "book13.jpeg" }
  ];
  
  // Function to display books
  function displayBooks() {
    const bookGrid = document.getElementById('bookGrid');
    books.forEach(book => {
      const bookElement = document.createElement('div');
      bookElement.classList.add('book');
      bookElement.innerHTML = `
        <img src="${book.image}" alt="${book.title}">
        <h3>${book.title}</h3>
        <p>${book.author}</p>
      `;
      bookGrid.appendChild(bookElement);
    });
  }
  
  // Function to display bestsellers
  function displayBestsellers() {
    const bestsellerGrid = document.getElementById('bestsellerGrid');
    bestsellers.forEach(book => {
      const bookElement = document.createElement('div');
      bookElement.classList.add('book');
      bookElement.innerHTML = `
        <img src="${book.image}" alt="${book.title}">
        <h3>${book.title}</h3>
        <p>${book.author}</p>
      `;
      bestsellerGrid.appendChild(bookElement);
    });
  }
  
  // Load books and bestsellers on page load
  window.onload = () => {
    displayBooks();
    displayBestsellers();
  };
  
