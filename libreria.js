const getBooks = function () {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => {
      console.log(response);
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Errore nel caricamneto della pagina");
      }
    })
    .then((books) => {
      console.log(books);
      const firstBook = books[0];
      console.log(firstBook);
      const cardTitle = document.getElementById("cardTitle");
      cardTitle.innerText = firstBook.title;
      const cardPrice = document.getElementById("cardPrice");
      cardPrice.innerText = firstBook.price;
      const img = document.getElementById("img");
      img.src = firstBook.img;
      const cancella = document.getElementById("scarta");
      const col = document.getElementById("col");
      const canc = function () {
        col.classList.add("d-none");
      };
      cancella.addEventListener("click", canc);
    })
    .catch((err) => {
      console.log("ERRORE!", err);
    });
};
getBooks();
