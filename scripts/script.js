document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScript er forbundet og fungerer.');
  
    // Resten af din JavaScript-kode herunder
    // ...
  });
  
document.addEventListener('DOMContentLoaded', function() {
    var counter = 0;
    var slides = document.querySelectorAll('.slide');
  
    function updateSlideMargin() {
      var marginLeft = '-' + (counter * 100) + '%';
      document.querySelector('.slidestart').style.marginLeft = marginLeft;
    }
  
    setInterval(function() {
      counter++;
      if (counter >= slides.length) {
        counter = 0;
      }
      updateSlideMargin();
    }, 5000);
  
    // Lyt efter ændringer i radioknapperne
    var radioBtns = document.querySelectorAll('input[name="radio-btn"]');
    radioBtns.forEach(function(radioBtn, index) {
      radioBtn.addEventListener('change', function() {
        counter = index;
        updateSlideMargin();
      });
    });
  });
  