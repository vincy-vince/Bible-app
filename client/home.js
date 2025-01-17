// fetch("https://www.biblegateway.com/passage/?search=Jude&version=KJV").then(
//   (res) => res.json()
// );

let chapters = document.getElementById('chapters')
let book = document.getElementById('book')
chapters.addEventListener('click',(event)=>{
  // if selectbook ? "" - > genis 
  book.style.display = 'none'
  book.innerHTML = ''
  let n=50;
  for(i=1; i<=n; i++){
    book.innerHTML += `
    <div id="chap-js"><a href="dup-verse.html">${i}</a></div>
    `
    book.style.display = 'grid'
    book.classList.add("book-css")
    let chapInnerdiv = document.getElementById('chap-js');
    chapInnerdiv.style.backgroundColor = 'orange'
  }
})