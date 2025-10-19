// ✅ FIXED Adsterra 728x90 Auto Inject + Center + Debug
document.addEventListener("DOMContentLoaded", function () {
  console.log("Injecting Adsterra 728x90...");

  // Buat container iklan
  const adContainer = document.createElement("div");
  adContainer.id = "adsterra728x90";
  adContainer.style.cssText = `
    width: 100%;
    text-align: center;
    margin: 20px auto;
    z-index: 999;
  `;
  document.body.insertBefore(adContainer, document.body.firstChild);

  // Gunakan namespace unik biar gak bentrok
  window.atOptions728 = {
    'key': 'c38112be63d5116bd3c4f447604955e4',
    'format': 'iframe',
    'height': 90,
    'width': 728,
    'params': {}
  };

  // Buat script invoke.js
  const invoke = document.createElement("script");
  invoke.type = "text/javascript";
  invoke.src = "https://www.highperformanceformat.com/c38112be63d5116bd3c4f447604955e4/invoke.js";

  // Debug event
  invoke.onload = function () {
    console.log("✅ Adsterra 728x90 script loaded");
  };
  invoke.onerror = function () {
    console.error("❌ Failed to load Adsterra 728x90 invoke.js");
  };

  // Tambahkan ke container
  adContainer.appendChild(invoke);
});
