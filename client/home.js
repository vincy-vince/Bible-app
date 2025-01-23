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

// const { data } = require("autoprefixer");

// fetch(
//   "https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/ml-omcv/books/ഉൽപ്പത്തി/chapters/1.json"
// )
//   .then((response) => response.json())
//   .then((data) => console.log(data));

//https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/en-asv/books/psalms/chapters/23.json
//bibles/ta-IN-otcv/books/ஆதியாகமம்/chapters/1/verses

let updatedBook = document.getElementById("selectedBook");
let bookArray = document.querySelectorAll(".onBookClicked");

updatedBook.addEventListener('click',() => {

  book.style.display = "none"
  book.style.display = "block"
  book.innerHTML = `
  <section class="mb-6 md:mb-24" id="book">
    <section class="mt-24 mb-7 md:mt-28 lg:mt-32">

      <div class="text-center text-orange-100 text-2xl lg:text-3xl font-bold mt-2">
        Old Testament
      </div>
      <div class="h-svh text-orange-100 flex justify-around p-2">
        <div>
          <ul class="md:text-xl lg:text-xl">
            <li class="onBookClicked list-none border-b-2 border-orange-100"  data-bookName="genesis">📖 Genesis</li>
            <li class="onBookClicked list-none border-b-2 border-orange-100"  data-bookName="exodus">📖 Exodus</li>
            <li class="onBookClicked list-none border-b-2 border-orange-100"  data-bookName="leviticus">📖 Leviticus</li>
            <li class="onBookClicked list-none border-b-2 border-orange-100"  data-bookName="numbers">📖 Numbers</li>
            <li class="onBookClicked list-none border-b-2 border-orange-100"  data-bookName="deuteronomy">📖 Deuteronomy</li>
            <li class="onBookClicked list-none border-b-2 border-orange-100"  data-bookName="joshua">📖 Joshua</li>
            <li class="onBookClicked list-none border-b-2 border-orange-100"  data-bookName="judges">📖 Judges</li>
            <li class="onBookClicked list-none border-b-2 border-orange-100"  data-bookName="ruth">📖 Ruth</li>
            <li class="onBookClicked list-none border-b-2 border-orange-100"  data-bookName="1 samuel">📖 1 Samuel</li>
            <li class="onBookClicked list-none border-b-2 border-orange-100"  data-bookName="2 samuel">📖 2 Samuel</li>
            <li class="onBookClicked list-none border-b-2 border-orange-100"  data-bookName="1 kings">📖 1 Kings</li>
            <li class="onBookClicked list-none border-b-2 border-orange-100"  data-bookName="2 kings">📖 2 Kings</li>
            <li class="onBookClicked list-none border-b-2 border-orange-100"  data-bookName="1 chronicles">📖 1 Chronicles</li>
            <li class="onBookClicked list-none border-b-2 border-orange-100"  data-bookName="2 chronicles">📖 2 Chronicles</li>
            <li class="onBookClicked list-none border-b-2 border-orange-100"  data-bookName="ezra">📖 Ezra</li>
            <li class="onBookClicked list-none border-b-2 border-orange-100"  data-bookName="nehemiah">📖 Nehemiah</li>
            <li class="onBookClicked list-none border-b-2 border-orange-100"  data-bookName="esther">📖 Esther</li>
            <li class="onBookClicked list-none border-b-2 border-orange-100"  data-bookName="job">📖 Job</li>
            <li class="onBookClicked list-none border-b-2 border-orange-100"  data-bookName="psalms">📖 Psalms</li>
            <li class="onBookClicked list-none border-b-2 border-orange-100"  data-bookName="proverbs">📖 Proverbs</li>
          </ul>
        </div>

        <div>
          <ul class="md:text-xl lg:text-xl">
            <li class="onBookClicked list-none border-b-2 border-orange-100"  data-bookName="ecclesiastes">📖 Ecclesiastes</li>
            <li class="onBookClicked list-none border-b-2 border-orange-100"  data-bookName="song of solomon">📖 Song of Solomon</li>
            <li class="onBookClicked list-none border-b-2 border-orange-100"  data-bookName="isaiah">📖 Isaiah</li>
            <li class="onBookClicked list-none border-b-2 border-orange-100"  data-bookName="jeremiah">📖 Jeremiah</li>
            <li class="onBookClicked list-none border-b-2 border-orange-100"  data-bookName="lamentations">📖 Lamentations</li>
            <li class="onBookClicked list-none border-b-2 border-orange-100"  data-bookName="ezekiel">📖 Ezekiel</li>
            <li class="onBookClicked list-none border-b-2 border-orange-100"  data-bookName="daniel">📖 Daniel</li>
            <li class="onBookClicked list-none border-b-2 border-orange-100"  data-bookName="hosea">📖 Hosea</li>
            <li class="onBookClicked list-none border-b-2 border-orange-100"  data-bookName="joel">📖 Joel</li>
            <li class="onBookClicked list-none border-b-2 border-orange-100"  data-bookName="amos">📖 Amos</li>
            <li class="onBookClicked list-none border-b-2 border-orange-100"  data-bookName="obadiah">📖 Obadiah</li>
            <li class="onBookClicked list-none border-b-2 border-orange-100"  data-bookName="jonah">📖 Jonah</li>
            <li class="onBookClicked list-none border-b-2 border-orange-100"  data-bookName="micah">📖 Micah</li>
            <li class="onBookClicked list-none border-b-2 border-orange-100"  data-bookName="nahum">📖 Nahum</li>
            <li class="onBookClicked list-none border-b-2 border-orange-100"  data-bookName="habakkuk">📖 Habakkuk</li>
            <li class="onBookClicked list-none border-b-2 border-orange-100"  data-bookName="zephaniah">📖 Zephaniah</li>
            <li class="onBookClicked list-none border-b-2 border-orange-100"  data-bookName="haggai">📖 Haggai</li>
            <li class="onBookClicked list-none border-b-2 border-orange-100"  data-bookName="zechariah">📖 Zechariah</li>
            <li class="onBookClicked list-none border-b-2 border-orange-100"  data-bookName="malachi">📖 Malachi</li>
          </ul>
        </div>
      </div>

    </section>

    <!-- New testament -->
    <section class="md:mt-20" id="new">
      <div class="text-center text-orange-100 text-2xl lg:text-3xl font-bold mt-2">
        New Testament
      </div>
      <div class="h-svh text-orange-100 flex justify-around p-2 pb-4">
        <div>
          <ul class="md:text-xl lg:text-xl new-test-books">
            <li class="onBookClicked list-none border-b-2 border-orange-100"  data-bookName="matthew">📖 Matthew</li>
            <li class="onBookClicked list-none border-b-2 border-orange-100"  data-bookName="mark">📖 Mark</li>
            <li class="onBookClicked list-none border-b-2 border-orange-100"  data-bookName="luke">📖 Luke</li>
            <li class="onBookClicked list-none border-b-2 border-orange-100"  data-bookName="john">📖 John</li>
            <li class="onBookClicked list-none border-b-2 border-orange-100"  data-bookName="acts">📖 Acts</li>
            <li class="onBookClicked list-none border-b-2 border-orange-100"  data-bookName="romans">📖 Romans</li>
            <li class="onBookClicked list-none border-b-2 border-orange-100"  data-bookName="1 corinthians">📖 1 Corinthians</li>
            <li class="onBookClicked list-none border-b-2 border-orange-100"  data-bookName="2 corinthians">📖 2 Corinthians</li>
            <li class="onBookClicked list-none border-b-2 border-orange-100"  data-bookName="galatians">📖 Galatians</li>
            <li class="onBookClicked list-none border-b-2 border-orange-100"  data-bookName="ephesians">📖 Ephesians</li>
            <li class="onBookClicked list-none border-b-2 border-orange-100"  data-bookName="philippians">📖 Philippians</li>
            <li class="onBookClicked list-none border-b-2 border-orange-100"  data-bookName="colossians">📖 Colossians</li>
            <li class="onBookClicked list-none border-b-2 border-orange-100"  data-bookName="1 thessalonians">📖 1 Thessalonians</li>
            <li class="onBookClicked list-none border-b-2 border-orange-100"  data-bookName="2 thessalonians">📖 2 Thessalonians</li>
            <li class="onBookClicked list-none border-b-2 border-orange-100"  data-bookName="1 timothy">📖 1 Timothy</li>
            <li class="onBookClicked list-none border-b-2 border-orange-100"  data-bookName="2 timothy">📖 2 Timothy</li>
            <li class="onBookClicked list-none border-b-2 border-orange-100"  data-bookName="titus">📖 Titus</li>
            <li class="onBookClicked list-none border-b-2 border-orange-100"  data-bookName="philemon">📖 Philemon</li>
            <li class="onBookClicked list-none border-b-2 border-orange-100"  data-bookName="hebrews">📖 Hebrews</li>
            <li class="onBookClicked list-none border-b-2 border-orange-100"  data-bookName="james">📖 James</li>
          </ul>
        </div>

        <div>
          <ul class="md:text-xl lg:text-xl new-test-books">
            <li class="onBookClicked list-none border-b-2 border-orange-100"  data-bookName="1 peter">📖 1 Peter</li>
            <li class="onBookClicked list-none border-b-2 border-orange-100"  data-bookName="2 peter">📖 2 Peter</li>
            <li class="onBookClicked list-none border-b-2 border-orange-100"  data-bookName="1 john">📖 1 John</li>
            <li class="onBookClicked list-none border-b-2 border-orange-100"  data-bookName="2 john">📖 2 John</li>
            <li class="onBookClicked list-none border-b-2 border-orange-100"  data-bookName="3 john">📖 3 John</li>
            <li class="onBookClicked list-none border-b-2 border-orange-100"  data-bookName="jude">📖 Jude</li>
            <li class="onBookClicked list-none border-b-2 border-orange-100"  data-bookName="revelation">📖 Revelation</li>
          </ul>
        </div>
      </div>

    </section>
  </section>
  `
})

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

function chaptersUpdate(bookname, chap) {
  book.style.display = "none";
  book.innerHTML = "";
  let n = chap;
  for (i = 1; i <= n; i++) {
    book.innerHTML += `
    <div class="div-js" id="chap-js" > ${i} </a></div>
    `;
    book.style.display = "grid";
    book.classList.add("book-css");
    let chapInnerDiv = document.getElementById("chap-js");
  

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

      var list = document.getElementsByClassName("div-js");
      for (var i = 0; i < list.length; i++) {
        list[i].classList.add("chap-css");
      }
    }
    let chapInnerDiv = document.querySelectorAll(".div-js");
    chapInnerDiv.forEach((ele) => {
      ele.addEventListener("click", (event) => {
        console.log(event);
        fetch(
          `https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/en-kjv/books/${bookname}/chapters/${event.currentTarget.innerText}.json`
        )
          .then((res) => res.json())
          .then((res) => { 
          let verseArray = res.data
  
          const resultVerse = verseArray.reduce((finalVerse,currentVerse) => {
            let obj = finalVerse.find((item)=>item.verse === currentVerse.verse)
              if(obj){
                return finalVerse
              }else{
                return finalVerse.concat([currentVerse])
              }
          },[])

          console.log(resultVerse);
         
          book.style.display = "none"
          book.innerHTML = ""
          
            for(r=0; r < resultVerse.length; r++){
            let finVerse = resultVerse[r].verse + ". "+ resultVerse[r].text
            book.innerHTML += `
            <div class="verse-js verse-css">${finVerse}</div>
            `,
            book.style.display = "block"
            }
         
           
          });
      });
    });
  });

  let chapInnerDiv = document.querySelectorAll(".div-js");
  chapInnerDiv.forEach((ele) => {
    ele.addEventListener("click", (event) => {
      console.log(event.currentTarget.innerText);
      fetch(
        `https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/en-kjv/books/${bookname}/chapters/${event.currentTarget.innerText}.json`
      )
        .then((res) => res.json())
        .then((res) => {
          
          let verseArray = res.data
          const resultVerse = verseArray.reduce((finalVerse,currentVerse) => {
            let obj = finalVerse.find((item)=>item.verse === currentVerse.verse)
              if(obj){
                return finalVerse
              }else{
                return finalVerse.concat([currentVerse])
              }
          },[])

          console.log(resultVerse);
         
          book.style.display = "none"
          book.innerHTML = ""
          
            for(r=0; r < resultVerse.length; r++){
            let finVerse = resultVerse[r].verse + ". "+ resultVerse[r].text
            book.innerHTML += `
            <div class="verse-js verse-css">${finVerse}</div>
            `,
            book.style.display = "block"
            }

          
        });
    });
  });

}

//bookArray[0].innerText
//https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/en-kjv/books/john/chapters/3/verses/16.json
