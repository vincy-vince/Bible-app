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
    <div class="chap-inner-div"><a href="dup-verse.html">${i}</a></div>
    `
    book.style.display = 'grid'
    book.style.fontSize = '18px'
    book.style.color = '#FFDFC2'
    book.style.marginTop = '100px'
    book.style.grid = 'auto/ auto auto auto auto auto'
    book.style.textAlign = 'center'
    book.style.gap = '12px'
    let chapInnerdiv = document.querySelector('.chap-inner-div');
    chapInnerdiv.style.backgroundColor = 'orange'
  }
})