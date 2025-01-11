// fetch("https://www.biblegateway.com/passage/?search=Jude&version=KJV").then(
//   (res) => res.json()
// );

let chapters = document.getElementById('chapters')
let book = document.getElementById('book')
chapters.addEventListener('click',(event)=>{
  // if selectbook ? "" - > genis 
  book.style.display = 'none'
})