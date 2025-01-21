// fetch("https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/bibles.json")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//     // var version = [190, 139, 26, 136, 30, 22];
//     // version.forEach((i) => {
//     //   console.log(190 + ".) " + data[190].version + "     , ID => " + data[190].id);
//     // });
//     console.log(
//       190 + ".) " + data[190].version + "     , ID => " + data[190].id
//     );
//   });

// fetch(
//   "https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/ml-omcv/books/ഉൽപ്പത്തി/chapters/1.json"
// )
//   .then((response) => response.json())
//   .then((data) => console.log(data));

//https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/en-asv/books/psalms/chapters/23.json
//bibles/ta-IN-otcv/books/ஆதியாகமம்/chapters/1/verses
let updatedBook = document.getElementById("selectedBook");
let bookArray = document.querySelectorAll(".onBookClicked");

bookArray.forEach((onBookClicked) => {
  onBookClicked.addEventListener("click", (event) => {
    updateBook(event.target.dataset.bookname);
  });
});

function updateBook(bookName) {
  updatedBook.innerText = bookName;
  console.log(bookName, meta[`${bookName}`].chapters);
  chaptersUpdate(bookName, meta[`${bookName}`].chapters);
}

let chapters = document.getElementById("chapters");
let book = document.getElementById("book");
//   // if selectbook ? "" - > genis
//   book.style.display = "none";
//   book.innerHTML = "";
//   let n = 2;
//   for (i = 1; i <= n; i++) {
//     book.innerHTML += `
//     <div class="div-js" id="chap-js" ><a href="dup-verse.html">${i}</a></div>
//     `;
//     book.style.display = "grid";
//     book.classList.add("book-css");
//     let chapInnerDiv = document.getElementById("chap-js");
//     chapInnerDiv.style.backgroundColor = "orange";

//     var list = document.getElementsByClassName("div-js");
//     for (var i = 0; i < list.length; i++) {
//       list[i].classList.add("chap-css");
//     }
//   }
// });

function chaptersUpdate(bookname, chap) {
  book.style.display = "none";
  book.innerHTML = "";
  let n = chap;
  for (i = 1; i <= n; i++) {
    book.innerHTML += `
    <div class="div-js" id="chap-js" >${i}</a></div>
    `;
    book.style.display = "grid";
    book.classList.add("book-css");
    let chapInnerDiv = document.getElementById("chap-js");
    chapInnerDiv.style.backgroundColor = "orange";

    var list = document.getElementsByClassName("div-js");
    for (var i = 0; i < list.length; i++) {
      list[i].classList.add("chap-css");
    }
  }


  chapters.addEventListener("click", (event) => {
    book.style.display = "none";
    book.innerHTML = "";
    let n = chap;
    for (i = 1; i <= n; i++) {
      book.innerHTML += `
      <div class="div-js" id="chap-js" >${i}</a></div>
      `;
      book.style.display = "grid";
      book.classList.add("book-css");
      let chapInnerDiv = document.getElementById("chap-js");
      chapInnerDiv.style.backgroundColor = "orange";
  
      var list = document.getElementsByClassName("div-js");
      for (var i = 0; i < list.length; i++) {
        list[i].classList.add("chap-css");
      }
    }

  });

  let chapInnerDiv = document.querySelectorAll(".div-js");
  chapInnerDiv.forEach(ele =>{
    ele.addEventListener("click",()=>{
      console.log('verse');
      fetch( `https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/en-kjv/books/${bookname}/chapters/${chap}.json`)
      .then((res) => res.json())
      .then((data) => console.log(data))
    })
  })
}

      //bookArray[0].innerText
      //https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/en-kjv/books/john/chapters/3/verses/16.json
