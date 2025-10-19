// adsterra-728x90.js
// Responsive 728x90 Adsterra banner (auto-load on page)
document.addEventListener("DOMContentLoaded", function () {
  try {
    // Cek apakah sudah ada elemen iklan
    if (!document.querySelector("#adsterra-728x90")) {
      const adContainer = document.createElement("div");
      adContainer.id = "adsterra-728x90";
      adContainer.style.textAlign = "center";
      adContainer.style.margin = "10px auto";
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
      document.body.insertBefore(adContainer, document.body.firstChild);
    }
  } catch (e) {
    console.error("Adsterra 728x90 failed to load:", e);
  }
});
