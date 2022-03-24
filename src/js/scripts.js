let books = [
  {
    title: "ata",
    location: "Boston",
    price: 200,
  },
  {
    title: "The alchemist",
    location: "Egypt",
    price: 500,
  },
  {
    title: "the 40 rules of love",
    location: "Paris",
    price: 100,
  },
  {
    title: "Harry Putter",
    location: "Chicago",
    price: 300,
  },
  {
    title: "We were liars",
    location: "Singapore",
    price: 200,
  },
];
let Oldbooks = books;

function populateBooks(books) {
  let BookEl = document.getElementById("books");
  BookEl.innerHTML = `<div id="row0" class="row">
    <div class="column center">
      <span id="span1-1">Title</span>
    </div>
    <div class="column center">
      <span id="span1-2">Price</span>
    </div>
    <div class="column center">
      <span id="span1-3">Location</span>
    </div>
  </div>`;
  for (let i = 0; i < books.length; i++) {
    let bigdivEl = document.createElement("div");
    let divTitle = document.createElement("div");
    let spanTitle = document.createElement("span");

    let divPrice = document.createElement("div");
    let spanPrice = document.createElement("span");
    let divLocation = document.createElement("div");
    let spanLocation = document.createElement("span");

    bigdivEl.classList.add("row");
    divTitle.classList.add("column");
    divPrice.classList.add("column");
    divLocation.classList.add("column");

    divTitle.appendChild(spanTitle);
    bigdivEl.appendChild(divTitle);
    bigdivEl.appendChild(divPrice);
    bigdivEl.appendChild(divLocation);

    divPrice.appendChild(spanPrice);
    divLocation.appendChild(spanLocation);
    spanLocation.innerText = books[i].location;
    spanPrice.innerText = books[i].price;
    spanTitle.innerText = books[i].title;
    BookEl.appendChild(bigdivEl);
  }
}

function clearBooks() {
  let BookEl = document.getElementById("books");
  BookEl.innerHTML = "";
}
function sortBooks() {
  clearBooks();
  let sortedBooks = JSON.parse(JSON.stringify(books))
  
  sortedBooks.sort((a, b) => {
    return a.title.localeCompare(b.title);
  });
  populateBooks(sortedBooks);
}

function resetBooks() {
    clearBooks(); 
    populateBooks(books); 
};
populateBooks(books);
