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
    book.innerText += `
    <div class=" mt-16 bg-amber-600 border-none rounded-full text-orange-300 w-8 h-8"><a href="genesis1.html>full</a>${i}</div>
    `
    book.style.display = 'block'
  }
})