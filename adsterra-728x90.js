// Adsterra Banner 728x90 Auto Center
document.addEventListener("DOMContentLoaded", function() {
  // Buat elemen container iklan
  const adContainer = document.createElement("div");
  adContainer.style.cssText = `
    width: 100%;
    text-align: center;
    margin: 15px 0;
  `;

  // Tambahkan script Adsterra ke dalam container
  adContainer.innerHTML = `
    <script type="text/javascript">
      atOptions = {
        'key' : 'c38112be63d5116bd3c4f447604955e4',
        'format' : 'iframe',
        'height' : 90,
        'width' : 728,
        'params' : {}
      };
    <\/script>
    <script type="text/javascript" src="//www.highperformanceformat.com/c38112be63d5116bd3c4f447604955e4/invoke.js"><\/script>
  `;

  // Sisipkan di bagian atas body
  document.body.insertBefore(adContainer, document.body.firstChild);
});
