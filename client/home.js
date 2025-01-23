let updatedBook = document.getElementById("selectedBook");
let bookArray = document.querySelectorAll(".onBookClicked");

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
            <li class="onBookClicked" data-bookName="genesis">📖 Genesis</li>
            <li class="onBookClicked" data-bookName="exodus">📖 Exodus</li>
            <li class="onBookClicked" data-bookName="leviticus">📖 Leviticus</li>
            <li class="onBookClicked" data-bookName="numbers">📖 Numbers</li>
            <li class="onBookClicked" data-bookName="deuteronomy">📖 Deuteronomy
            </li>
            <li class="onBookClicked" data-bookName="joshua">📖 Joshua</li>
            <li class="onBookClicked" data-bookName="judges">📖 Judges</li>
            <li class="onBookClicked" data-bookName="ruth">📖 Ruth</li>
            <li class="onBookClicked" data-bookName="1 samuel">📖 1 Samuel</li>
            <li class="onBookClicked" data-bookName="2 samuel">📖 2 Samuel</li>
            <li class="onBookClicked" data-bookName="1 kings">📖 1 Kings</li>
            <li class="onBookClicked" data-bookName="2 kings">📖 2 Kings</li>
            <li class="onBookClicked" data-bookName="1 chronicles">📖 1
              Chronicles</li>
            <li class="onBookClicked" data-bookName="2 chronicles">📖 2
              Chronicles</li>
            <li class="onBookClicked" data-bookName="ezra">📖 Ezra</li>
            <li class="onBookClicked" data-bookName="nehemiah">📖 Nehemiah</li>
            <li class="onBookClicked" data-bookName="esther">📖 Esther</li>
            <li class="onBookClicked" data-bookName="job">📖 Job</li>
            <li class="onBookClicked" data-bookName="psalms">📖 Psalms</li>
            <li class="onBookClicked" data-bookName="proverbs">📖 Proverbs</li>
          </ul>
        </div>

        <div class="old-books">
          <ul class="md:text-xl lg:text-xl">
            <li class="onBookClicked" data-bookName="ecclesiastes">📖
              Ecclesiastes</li>
            <li class="onBookClicked" data-bookName="song of solomon">📖 Song of
              Solomon</li>
            <li class="onBookClicked" data-bookName="isaiah">📖 Isaiah</li>
            <li class="onBookClicked" data-bookName="jeremiah">📖 Jeremiah</li>
            <li class="onBookClicked" data-bookName="lamentations">📖
              Lamentations</li>
            <li class="onBookClicked" data-bookName="ezekiel">📖 Ezekiel</li>
            <li class="onBookClicked" data-bookName="daniel">📖 Daniel</li>
            <li class="onBookClicked" data-bookName="hosea">📖 Hosea</li>
            <li class="onBookClicked" data-bookName="joel">📖 Joel</li>
            <li class="onBookClicked" data-bookName="amos">📖 Amos</li>
            <li class="onBookClicked" data-bookName="obadiah">📖 Obadiah</li>
            <li class="onBookClicked" data-bookName="jonah">📖 Jonah</li>
            <li class="onBookClicked" data-bookName="micah">📖 Micah</li>
            <li class="onBookClicked" data-bookName="nahum">📖 Nahum</li>
            <li class="onBookClicked" data-bookName="habakkuk">📖 Habakkuk</li>
            <li class="onBookClicked" data-bookName="zephaniah">📖 Zephaniah</li>
            <li class="onBookClicked" data-bookName="haggai">📖 Haggai</li>
            <li class="onBookClicked" data-bookName="zechariah">📖 Zechariah</li>
            <li class="onBookClicked" data-bookName="malachi">📖 Malachi</li>
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
            <li class="onBookClicked" data-bookName="matthew">📖 Matthew</li>
            <li class="onBookClicked" data-bookName="mark">📖 Mark</li>
            <li class="onBookClicked" data-bookName="luke">📖 Luke</li>
            <li class="onBookClicked" data-bookName="john">📖 John</li>
            <li class="onBookClicked" data-bookName="acts">📖 Acts</li>
            <li class="onBookClicked" data-bookName="romans">📖 Romans</li>
            <li class="onBookClicked" data-bookName="1 corinthians">📖 1
              Corinthians</li>
            <li class="onBookClicked" data-bookName="2 corinthians">📖 2
              Corinthians</li>
            <li class="onBookClicked" data-bookName="galatians">📖 Galatians</li>
            <li class="onBookClicked" data-bookName="ephesians">📖 Ephesians</li>
            <li class="onBookClicked" data-bookName="philippians">📖 Philippians
            </li>
            <li class="onBookClicked" data-bookName="colossians">📖 Colossians
            </li>
            <li class="onBookClicked" data-bookName="1 thessalonians">📖 1
              Thessalonians</li>
            <li class="onBookClicked" data-bookName="2 thessalonians">📖 2
              Thessalonians</li>
          </ul>
        </div>

        <div class="new-books">
          <ul class="md:text-xl lg:text-xl ">
            
            <li class="onBookClicked" data-bookName="1 timothy">📖 1 Timothy</li>
            <li class="onBookClicked" data-bookName="2 timothy">📖 2 Timothy</li>
            <li class="onBookClicked" data-bookName="titus">📖 Titus</li>
            <li class="onBookClicked" data-bookName="philemon">📖 Philemon</li>
            <li class="onBookClicked" data-bookName="hebrews">📖 Hebrews</li>
            <li class="onBookClicked" data-bookName="james">📖 James</li>
            <li class="onBookClicked" data-bookName="1 peter">📖 1 Peter</li>
            <li class="onBookClicked" data-bookName="2 peter">📖 2 Peter</li>
            <li class="onBookClicked" data-bookName="1 john">📖 1 John</li>
            <li class="onBookClicked" data-bookName="2 john">📖 2 John</li>
            <li class="onBookClicked" data-bookName="3 john">📖 3 John</li>
            <li class="onBookClicked" data-bookName="jude">📖 Jude</li>
            <li class="onBookClicked" data-bookName="revelation">📖 Revelation
            </li>
          </ul>
        </div>
      </div>

    </section>
  </section>
  `;
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

            book.style.display = "none";
            book.innerHTML = "";

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
