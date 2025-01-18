fetch("https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/bibles.json")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    // var version = [190, 139, 26, 136, 30, 22];
    // version.forEach((i) => {
    //   console.log(190 + ".) " + data[190].version + "     , ID => " + data[190].id);
    // });
      console.log(190 + ".) " + data[190].version + "     , ID => " + data[190].id)
  });
fetch(
  "https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/en-kjv/books/genesis/chapters/23.json"
)
  .then((response) => response.json())
  .then((data) => console.log(data));

// fetch(
//   "https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/ml-omcv/books/ഉൽപ്പത്തി/chapters/1.json"
// )
//   .then((response) => response.json())
//   .then((data) => console.log(data));

//https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/en-asv/books/psalms/chapters/23.json
//bibles/ta-IN-otcv/books/ஆதியாகமம்/chapters/1/verses

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
    for (var i = 0; i < list.length; i++) {
      list[i].classList.add("chap-css");
    }
  }
});

//  english (kjv)                     ID => en-kjv
//  Tamil - 2019[139]                 ID => ta-irvtam YES
//  Malayalam Script                  ID => sa-Mlym-IN-laukika-sanml
//  Hindi - 2019                      ID => hi-IN-irvhin
//  Telugu Script                     ID => sa-Telu-IN-laukika-sante
//  Kannada Script                    ID => sa-Knda-IN-laukika-sanka


// To Do
// according to the number of verses and chapters we should generate the HTML / the page should be updated.