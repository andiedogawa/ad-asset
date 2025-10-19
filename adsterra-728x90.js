// adsterra-728x90.js
document.addEventListener("DOMContentLoaded", function () {
  try {
    if (document.getElementById("adsterra-728x90")) return;

    // Buat wadah iklan
    const container = document.createElement("div");
    container.id = "adsterra-728x90";
    container.style.textAlign = "center";
    container.style.margin = "10px auto";
    document.body.insertBefore(container, document.body.firstChild);

    // Tambah script konfigurasi
    const config = document.createElement("script");
    config.type = "text/javascript";
    config.innerHTML = `
      atOptions = {
        'key' : 'c38112be63d5116bd3c4f447604955e4',
        'format' : 'iframe',
        'height' : 90,
        'width' : 728,
        'params' : {}
      };
    `;
    container.appendChild(config);

    // Tambah script Adsterra
    const invoke = document.createElement("script");
    invoke.type = "text/javascript";
    invoke.src = "https://www.highperformanceformat.com/c38112be63d5116bd3c4f447604955e4/invoke.js";
    container.appendChild(invoke);
  } catch (err) {
    console.error("Error loading Adsterra 728x90:", err);
  }
});
