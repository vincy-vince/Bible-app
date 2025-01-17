fetch('https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/bibles.json')
.then((response)=> console.log(response.json()))
.then((data)=> console.log(data.id))

// fetch(
//   "https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/en-asv/books/genesis/chapters/1/verses/1.json"
// )
//   .then((response) => response.json())
//   .then((data) => console.log(data.text));

let chapters = document.getElementById("chapters");
let book = document.getElementById("book");
chapters.addEventListener("click", (event) => {
  // if selectbook ? "" - > genis
  book.style.display = "none";
  book.innerHTML = "";
  let n = 50;
  for (i = 1; i <= n; i++) {
    book.innerHTML += `
    <div class="div-js" id="chap-js" ><a href="dup-verse.html">${i}</a></div>
    `;
    book.style.display = "grid";
    book.classList.add("book-css");
    let chapInnerdiv = document.getElementById("chap-js");
    chapInnerdiv.style.backgroundColor = "orange";

    var list = document.getElementsByClassName("div-js");
    for(var i=0;i<list.length;i++){
    list[i].classList.add("chap-css");
    }
  }
});
