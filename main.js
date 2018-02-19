const current = document.querySelector('#current');
const images = document.querySelectorAll('.images img');
const opacity = 0.6;
// set first image opacity 
images[0].style.opacity = opacity;

function imgClick (e) {
  // reset opacity
  images.forEach(img => (img.style.opacity = 1));
  // change current img to src of clicked img 
  current.src = e.target.src;
  // add fadeIn class
  current.classList.add ('fade-in');
  // remove fadeIn class
  setTimeout(() =>  current.classList.remove('fade-in'), 500 );
  // change opacity of clicked img 
  e.target.style.opacity = opacity;
};

images.forEach(img => img.addEventListener('click', imgClick ));