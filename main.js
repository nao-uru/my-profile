{
const setImage = [
  "./back-imgs/usa.jpg",
  "./back-imgs/Czech.jpg",
  "./back-imgs/France.jpg",
  "./back-imgs/German.jpg",
  "./back-imgs/Tiwan.jpg",
]

let counter = 0;

function slideimage() {
  if(counter >= (setImage.length)) {
    counter = 0;
  }

  document.getElementById("header-back").style.backgroundImage = "url(" + setImage[counter] + ")";
  counter++;
}
  
setInterval("slideimage()",3000);


}