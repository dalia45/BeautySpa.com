let index = 0;
displayImages();
function displayImages() {
  let i;
  const images = document.getElementsByClassName("image");
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  index++;
  if (index > images.length) {
    index = 1;
  }
  images[index-1].style.display = "block";
  setTimeout(displayImages, 2000); 
}

const hasVisitedBefore = sessionStorage.getItem('hasVisitedBefore');
 if (!hasVisitedBefore) {
      
        confirm('"Tози сайт използва "бисквитки"');
      sessionStorage.setItem('hasVisitedBefore', true);
    }