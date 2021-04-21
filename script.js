let gallery = document.getElementById("gallery"),
    buttons = document.querySelectorAll('button');

let imgArray = [ 'images/img-1.jpg', 'images/img-2.jpg', 'images/img-3.jpg', 'images/img-4.jpg', 'images/img-5.jpg', 'images/img-6.jpg', 'images/img-7.jpg', 'images/img-8.jpg' ]  

let count = 0;

// Function on Arrow Buttons click
buttons.forEach( btn => {
  btn.addEventListener('click', () => {
    if(btn.classList.contains('arrowPrevious')){
      console.log('Previous');
      count--;
      if( count < 0 ){
        count = imgArray.length-1;
      }
    }
    if(btn.classList.contains('arrowNext')){
      console.log('Next');
      count++;
      if( count === imgArray.length ){
        count = 0;
      }
    }
    gallery.src = imgArray[count]
  })
})

// Images Auto Slide
let autoSlide = () => {
  count++;
  if(count == imgArray.length){
    count =  0
  }
  gallery.src = imgArray[count];
}

setInterval(autoSlide, 3000)