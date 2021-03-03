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


const setFlameImage = [
  "./imgs/profile.flame.png",
  "./imgs/cafa.flame.png",
  "./imgs/sushi.flame.png",
  "./imgs/pronto.jpg",
]
const nextButton = document.getElementById('next');
const flameImgs = document.getElementById('flame-img');
const flameName = document.getElementById('flame-name');
const flameContents = document.getElementById('flame-contents');




function slideFlame() {

    if(counter >= (setFlameImage.length)) {
      counter = 0;
    }
    
  // flameImgs.src = setFlameImage[counter];

  function flameNameContents() {
    switch(counter) {
      case 0:
        flameName.textContent = 'My Profile';
        flameContents.textContent = '';  
        break;
      case 1:
        flameName.textContent = 'Cafe design';
        flameContents.textContent = '';  
        break;
      case 2:
        flameName.textContent = 'Restaurant design';
        flameContents.textContent = '';  
        break;  
      case 3:
        flameName.textContent = 'PRONTO MENU';
        flameContents.textContent = 'アルバイト先のカフェ（PRONTO）で使われているメニューを作りました！';  
    }
  }
  
  flameNameContents();

}


nextButton.addEventListener('click', ()=> {
  flameImgs.src = setFlameImage[counter];
  counter++;
})


}