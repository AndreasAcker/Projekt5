// Hent søgefeltet
var searchInput = document.getElementById('search-input');

// Tilføj event listener til søgefeltet
searchInput.addEventListener('input', performSearch);

function performSearch() {
  var searchValue = searchInput.value.toLowerCase(); // Hent værdien af søgefeltet og konverter til små bogstaver

  // Gennemgå hver kategori og skjul eller vis dem baseret på søgeværdien
  var kategorier = document.getElementsByClassName('kategori');
  for (var i = 0; i < kategorier.length; i++) {
    var kategori = kategorier[i];
    var kategoriTekst = kategori.getElementsByTagName('h3')[0].textContent.toLowerCase(); // Hent kategoriteksten og konverter til små bogstaver

    if (kategoriTekst.includes(searchValue)) {
      kategori.style.display = 'block'; // Vis kategorien, hvis søgeværdien matcher
    } else {
      kategori.style.display = 'none'; // Skjul kategorien, hvis søgeværdien ikke matcher
    }
  }
}