

// // animation for text  letter after letter 

const about = document.getElementById("aboutTxt");

const aboutMe = about.innerText;

about.innerText = '';
let count = 0;
 function letterbyletter(elementid,elementtext){
 const t = setInterval(function() {
  elementid.textContent += elementtext[count];
  count++;
  if (elementtext[count] === undefined) clearInterval(t);
}, 1000/20);}

letterbyletter(about,aboutMe )