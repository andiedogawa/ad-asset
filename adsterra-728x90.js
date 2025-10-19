// Adsterra Banner Script (728x90)

document.addEventListener("DOMContentLoaded", function () {
  // Buat elemen container iklan
  const adContainer = document.createElement("div");
  adContainer.id = "adsterra-banner";
  adContainer.style.textAlign = "center";
  adContainer.style.margin = "15px 0";

  // Tambahkan ke dalam body (bisa diganti ke posisi lain)
  document.body.insertBefore(adContainer, document.body.firstChild);

  // Inisialisasi konfigurasi iklan
  const atOptions = {
    key: "c38112be63d5116bd3c4f447604955e4",
    format: "iframe",
    height: 90,
    width: 728,
    params: {},
  };

  // Buat elemen <script> untuk Adsterra
  const adScript = document.createElement("script");
  adScript.type = "text/javascript";
  adScript.src = "//www.highperformanceformat.com/" + atOptions.key + "/invoke.js";

  // Masukkan konfigurasi dan script iklan ke dalam container
  const configScript = document.createElement("script");
  configScript.type = "text/javascript";
  configScript.text = `
    atOptions = ${JSON.stringify(atOptions)};
  `;

  adContainer.appendChild(configScript);
  adContainer.appendChild(adScript);
});
