var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 5){
        counter = 1;
    }
}, 5000);

// Funktion til at tilføje det aktuelle billede til ønskelisten
function addToWishlist() {
  var currentSlideIndex = counter - 1;
  var currentSlideImage = slides[currentSlideIndex].querySelector('img').src;
  
  // Gem billedet i localStorage med et unikt nøgleværdi
  localStorage.setItem('wishlistItem_' + currentSlideIndex, currentSlideImage);
}