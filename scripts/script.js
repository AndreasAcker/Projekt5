// Lyt efter klik på ønskelisteknappen
var wishlistButton = document.querySelector('.wishlist-icon');
wishlistButton.addEventListener('click', toggleWishlist);

// Funktion til at ændre knappens tilstand
function toggleWishlist() {
  wishlistButton.classList.toggle('clicked');
}

document.querySelector('.tilbage-button').addEventListener('click', function() {
    history.back();
  });
  
