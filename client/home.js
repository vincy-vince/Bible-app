let updatedBook = document.getElementById("selectedBook");
let bookArray = document.querySelectorAll(".onBookClicked");
let dailyBread = document.querySelector('.verse-div');

// dailyBread.innerText = `<p class="dailyverse"> ${dailyBread.verse1.verse} <br> ${dailyBread.verse1.reference} </p>`


updatedBook.addEventListener("click", () => {
  book.style.display = "none";
  book.style.display = "block";
  book.innerHTML = `
    <section class="book-head-section md:mb-24" id="book">
    <section class="book-subSection md:mt-28 lg:mt-32">

      <div class="testaments lg:text-3xl">
        Old Testament
      </div>
      <div class="bookName-div">
       <div class="old-books">
          <ul class="md:text-xl lg:text-xl">
            <li class="bookClicked" data-bookName="genesis">📖 Genesis</li>
            <li class="bookClicked" data-bookName="exodus">📖 Exodus</li>
            <li class="bookClicked" data-bookName="leviticus">📖 Leviticus</li>
            <li class="bookClicked" data-bookName="numbers">📖 Numbers</li>
            <li class="bookClicked" data-bookName="deuteronomy">📖 Deuteronomy
            </li>
            <li class="bookClicked" data-bookName="joshua">📖 Joshua</li>
            <li class="bookClicked" data-bookName="judges">📖 Judges</li>
            <li class="bookClicked" data-bookName="ruth">📖 Ruth</li>
            <li class="bookClicked" data-bookName="1samuel">📖 1 Samuel</li>
            <li class="bookClicked" data-bookName="2samuel">📖 2 Samuel</li>
            <li class="bookClicked" data-bookName="1kings">📖 1 Kings</li>
            <li class="bookClicked" data-bookName="2kings">📖 2 Kings</li>
            <li class="bookClicked" data-bookName="1chronicles">📖 1
              Chronicles</li>
            <li class="bookClicked" data-bookName="2chronicles">📖 2
              Chronicles</li>
            <li class="bookClicked" data-bookName="ezra">📖 Ezra</li>
            <li class="bookClicked" data-bookName="nehemiah">📖 Nehemiah</li>
            <li class="bookClicked" data-bookName="esther">📖 Esther</li>
            <li class="bookClicked" data-bookName="job">📖 Job</li>
            <li class="bookClicked" data-bookName="psalms">📖 Psalms</li>
            <li class="bookClicked" data-bookName="proverbs">📖 Proverbs</li>
          </ul>
        </div>

        <div class="old-books">
          <ul class="md:text-xl lg:text-xl">
            <li class="bookClicked" data-bookName="ecclesiastes">📖
              Ecclesiastes</li>
            <li class="bookClicked" data-bookName="songofsolomon">📖 Song of
              Solomon</li>
            <li class="bookClicked" data-bookName="isaiah">📖 Isaiah</li>
            <li class="bookClicked" data-bookName="jeremiah">📖 Jeremiah</li>
            <li class="bookClicked" data-bookName="lamentations">📖
              Lamentations</li>
            <li class="bookClicked" data-bookName="ezekiel">📖 Ezekiel</li>
            <li class="bookClicked" data-bookName="daniel">📖 Daniel</li>
            <li class="bookClicked" data-bookName="hosea">📖 Hosea</li>
            <li class="bookClicked" data-bookName="joel">📖 Joel</li>
            <li class="bookClicked" data-bookName="amos">📖 Amos</li>
            <li class="bookClicked" data-bookName="obadiah">📖 Obadiah</li>
            <li class="bookClicked" data-bookName="jonah">📖 Jonah</li>
            <li class="bookClicked" data-bookName="micah">📖 Micah</li>
            <li class="bookClicked" data-bookName="nahum">📖 Nahum</li>
            <li class="bookClicked" data-bookName="habakkuk">📖 Habakkuk</li>
            <li class="bookClicked" data-bookName="zephaniah">📖 Zephaniah</li>
            <li class="bookClicked" data-bookName="haggai">📖 Haggai</li>
            <li class="bookClicked" data-bookName="zechariah">📖 Zechariah</li>
            <li class="bookClicked" data-bookName="malachi">📖 Malachi</li>
          </ul>
        </div>
      </div>

    </section>

    <!-- New testament -->
    <section class="md:mt-20" id="new">
      <div class="testaments lg:text-3xl">
        New Testament
      </div>
      <div class="bookName-div2 h-svh text-orange-100 flex justify-around p-2 pb-4">
        <div class="new-books">
          <ul class="md:text-xl lg:text-xl ">
            <li class="bookClicked" data-bookName="matthew">📖 Matthew</li>
            <li class="bookClicked" data-bookName="mark">📖 Mark</li>
            <li class="bookClicked" data-bookName="luke">📖 Luke</li>
            <li class="bookClicked" data-bookName="john">📖 John</li>
            <li class="bookClicked" data-bookName="acts">📖 Acts</li>
            <li class="bookClicked" data-bookName="romans">📖 Romans</li>
            <li class="bookClicked" data-bookName="1corinthians">📖 1
              Corinthians</li>
            <li class="bookClicked" data-bookName="2corinthians">📖 2
              Corinthians</li>
            <li class="bookClicked" data-bookName="galatians">📖 Galatians</li>
            <li class="bookClicked" data-bookName="ephesians">📖 Ephesians</li>
            <li class="bookClicked" data-bookName="philippians">📖 Philippians
            </li>
            <li class="bookClicked" data-bookName="colossians">📖 Colossians
            </li>
            <li class="bookClicked" data-bookName="1thessalonians">📖 1
              Thessalonians</li>
            <li class="bookClicked" data-bookName="2thessalonians">📖 2
              Thessalonians</li>
          </ul>
        </div>

        <div class="new-books">
          <ul class="md:text-xl lg:text-xl ">
            
            <li class="bookClicked" data-bookName="1timothy">📖 1 Timothy</li>
            <li class="bookClicked" data-bookName="2timothy">📖 2 Timothy</li>
            <li class="bookClicked" data-bookName="titus">📖 Titus</li>
            <li class="bookClicked" data-bookName="philemon">📖 Philemon</li>
            <li class="bookClicked" data-bookName="hebrews">📖 Hebrews</li>
            <li class="bookClicked" data-bookName="james">📖 James</li>
            <li class="bookClicked" data-bookName="1peter">📖 1 Peter</li>
            <li class="bookClicked" data-bookName="2peter">📖 2 Peter</li>
            <li class="bookClicked" data-bookName="1john">📖 1 John</li>
            <li class="bookClicked" data-bookName="2john">📖 2 John</li>
            <li class="bookClicked" data-bookName="3john">📖 3 John</li>
            <li class="bookClicked" data-bookName="jude">📖 Jude</li>
            <li class="bookClicked" data-bookName="revelation">📖 Revelation
            </li>
          </ul>
        </div>
      </div>

    </section>
  </section>
  `;
  let bookclicked = document.querySelectorAll(".bookClicked");
  bookclicked.forEach((onBookClicked) => {
    onBookClicked.addEventListener("click", (event) => {
      updateBook(event.target.dataset.bookname);
    });
  });
});

bookArray.forEach((onBookClicked) => {
  onBookClicked.addEventListener("click", (event) => {
    updateBook(event.target.dataset.bookname);
  });
});

function updateBook(bookName) {
  updatedBook.innerText = bookName;
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
    <div class="div-js" id="chap-js"> ${i} </a></div>
    `;
    book.style.display = "grid";
    book.classList.add("book-css");

    var list = document.getElementsByClassName("div-js");
    for (var i = 0; i < list.length; i++) {
      list[i].classList.add("chap-css");
    }
  }

  chapters.addEventListener("click", () => {
    book.style.display = "none";
    book.innerHTML = "";

    let n = chap;
    for (i = 1; i <= n; i++) {
      book.innerHTML += `
      <div class="div-js" id="chap-js" >${i}</a></div>
      `;
      book.style.display = "grid";
      book.classList.add("book-css");

      var list = document.getElementsByClassName("div-js");
      for (var i = 0; i < list.length; i++) {
        list[i].classList.add("chap-css");
      }
    }
    let chapInnerDiv = document.querySelectorAll(".div-js");
    chapInnerDiv.forEach((ele) => {
      ele.addEventListener("click", (event) => {
        book.style.display = "none";
        book.innerHTML = `<div class="chapter-number">CHAPTER  ${event.currentTarget.innerText}</div>`;
        fetch(
          `https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/en-kjv/books/${bookname}/chapters/${event.currentTarget.innerText}.json`
        )
          .then((res) => res.json())
          .then((res) => {
            let verseArray = res.data;

            const resultVerse = verseArray.reduce(
              (finalVerse, currentVerse) => {
                let obj = finalVerse.find(
                  (item) => item.verse === currentVerse.verse
                );
                if (obj) {
                  return finalVerse;
                } else {
                  return finalVerse.concat([currentVerse]);
                }
              },
              []
            );

            // book.innerHTML = "";
            for (r = 0; r < resultVerse.length; r++) {
              let finVerse = resultVerse[r].verse + ". " + resultVerse[r].text;
              (book.innerHTML += `
            <div class="verse-js verse-css">${finVerse}</div>
            `),
                (book.style.display = "block");
            }
          });
      });
    });
  });

  let chapInnerDiv = document.querySelectorAll(".div-js");
  chapInnerDiv.forEach((ele) => {
    ele.addEventListener("click", (event) => {
      fetch(
        `https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/en-kjv/books/${bookname}/chapters/${event.currentTarget.innerText}.json`
      )
        .then((res) => res.json())
        .then((res) => {
          let verseArray = res.data;
          const resultVerse = verseArray.reduce((finalVerse, currentVerse) => {
            let obj = finalVerse.find(
              (item) => item.verse === currentVerse.verse
            );
            if (obj) {
              return finalVerse;
            } else {
              return finalVerse.concat([currentVerse]);
            }
          }, []);

          book.style.display = "none";
          book.innerHTML = "";
          book.innerHTML =`<div class="chapter-number">CHAPTER  ${verseArray[1].chapter}</div>`;
          for (r = 0; r < resultVerse.length; r++) {
            let finVerse = resultVerse[r].verse + ". " + resultVerse[r].text;
            (book.innerHTML += `
            <div class="verse-js verse-css">${finVerse}</div>
            `),
              (book.style.display = "block");
          }
        });
    });
  });
}

//bookArray[0].innerText
//https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/en-kjv/books/john/chapters/3/verses/16.json
