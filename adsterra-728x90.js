<script>
document.addEventListener("DOMContentLoaded", function() {
  // Buat elemen iklan
  let adContainer = document.createElement("div");
  adContainer.id = "adsterra-container";
  adContainer.style.textAlign = "center";
  adContainer.style.margin = "15px 0";

  // Masukkan ke dalam body (bisa kamu ubah ke posisi lain)
  document.body.appendChild(adContainer);

  // Tambahkan konfigurasi iklan
  let configScript = document.createElement("script");
  configScript.type = "text/javascript";
  configScript.innerHTML = `
    atOptions = {
      'key' : 'c38112be63d5116bd3c4f447604955e4',
      'format' : 'iframe',
      'height' : 90,
      'width' : 728,
      'params' : {}
    };
  `;

  // Tambahkan script pemanggil Adsterra
  let invokeScript = document.createElement("script");
  invokeScript.type = "text/javascript";
  invokeScript.src = "//www.highperformanceformat.com/c38112be63d5116bd3c4f447604955e4/invoke.js";

  // Masukkan kedua script ke container
  adContainer.appendChild(configScript);
  adContainer.appendChild(invokeScript);
});
</script>
