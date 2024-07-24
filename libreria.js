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
      for (let i = 0; i < books.length; i++) {
        const element = books[i];
        const div1 = document.createElement("div");
        div1.className = "col-12 col-md-6 col-lg-3";
        div1.id = i;
        const container = document.querySelector(".row");
        container.appendChild(div1);
        const div2 = document.createElement("div");
        div2.className = "card w-50";
        div1.appendChild(div2);
        const img = document.createElement("img");
        img.classList.add("card-img-top");
        img.src = element.img;
        div2.appendChild(img);
        const div3 = document.createElement("div");
        div3.classList.add("card-body");
        div2.appendChild(div3);
        const h5 = document.createElement("h5");
        const p = document.createElement("p");
        const a = document.createElement("a");
        div3.appendChild(h5);
        h5.classList.add("card-title");
        h5.innerText = element.title;
        div3.appendChild(p);
        p.classList.add("card-text");
        p.innerText = element.price;
        div3.appendChild(a);
        a.className = "btn btn-primary";
        a.innerText = "cancella";
        const canc = function () {
          div1.classList.add("d-none");
        };
        a.addEventListener("click", canc);
      }
    })
    .catch((err) => {
      console.log("ERRORE!", err);
    });
};
getBooks();
