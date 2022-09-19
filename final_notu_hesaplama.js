//**not yazdırma uygulaması */
/* 1) kullanıcıdan aldığın bilgiye göre aşağıdaki değerleri infoya yazdır
  AA 90-100
  BA 85-90
  BB 80-84
  CB 75-79
  CC 70-79
  DC 65-69
  DD 60-64
  FD 50-59
  FF 0-49


  2) kullanıcının girdiği verinin istediğimiz aralıkta olup olmadığını kontrol et
  3) ff bilgisinde üzgün surat ikonu çıkart diğerlerinde gülücük olsun
  4) ff class bilgisi text-danger diğerleri text primary olsun
  */

let examGrade = prompt("Notunuzu girin")
let info = document.querySelector("#info")

const smile = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
<path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>`

const sad = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
<path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>` 

if (examGrade >= 0 && examGrade <= 100) {
  // kapsayıcı blok en genel kural burda diğer ifler bunu içine gelsin
  info.classList.add("text-success")
  if (examGrade >= 90) {
    info.innerHTML = `${smile} AA / GEÇTİNİZ`
  } else if (examGrade >= 85) {
    info.innerHTML = `${smile} BA / GEÇTİNİZ`
  } else if (examGrade >= 80) {
    info.innerHTML = `${smile} BB / GEÇTİNİZ`
  } else if (examGrade >= 75) {
    info.innerHTML = `${smile} CB / GEÇTİNİZ`
  } else if (examGrade >= 70) {
    info.innerHTML = `${smile} CC / GEÇTİNİZ`
  } else if (examGrade >= 65) {
    info.innerHTML = `${smile} DC / GEÇTİNİZ`
  } else if (examGrade >= 60) {
    info.innerHTML = `${smile} DD / KOŞULLU GEÇTİNİZ `
  } else if (examGrade >= 50) {
    info.innerHTML = `${sad} FD / KALDINIZ`
    info.classList.remove("text-primary")
    info.classList.add("text-danger")
  } else if (examGrade <= 49) {
    info.innerHTML = `${sad} FF / KALDINIZ`
    info.classList.remove("text-primary")
    info.classList.add("text-danger")
  } 
} else {
  info.innerHTML = "GEÇERLİ BİR DEĞER GİRİNİZ"
  info.classList.remove ("text-primary")
  info.classList.add ("text-warning")
}

