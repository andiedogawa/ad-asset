// Adsterra Banner 300x250
(function() {
  var atOptions = {
    'key': 'd43705b6418c1e827f424e5b713c95be',
    'format': 'iframe',
    'height': 250,
    'width': 300,
    'params': {}
  };

  // Buat elemen script untuk memanggil Adsterra
  var adScript = document.createElement('script');
  adScript.type = 'text/javascript';
  adScript.src = '//www.highperformanceformat.com/d43705b6418c1e827f424e5b713c95be/invoke.js';

  // Sisipkan ke dalam elemen banner container
  var container = document.currentScript.parentNode;
  container.style.textAlign = 'center';
  container.style.margin = '15px auto';
  container.style.maxWidth = atOptions.width + 'px';
  container.style.height = atOptions.height + 'px';

  container.appendChild(adScript);
})();
