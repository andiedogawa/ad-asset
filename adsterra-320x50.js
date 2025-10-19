// Adsterra Mobile Banner 320x50 Auto Center
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
        'key' : 'a2587c5abac6fb7c05cd2e91eac1c480',
        'format' : 'iframe',
        'height' : 50,
        'width' : 320,
        'params' : {}
      };
    <\/script>
    <script type="text/javascript" src="//www.highperformanceformat.com/a2587c5abac6fb7c05cd2e91eac1c480/invoke.js"><\/script>
  `;

  // Sisipkan di bagian atas body
  document.body.insertBefore(adContainer, document.body.firstChild);
});
