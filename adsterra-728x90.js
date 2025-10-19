// ✅ Adsterra Banner 728x90 (FINAL FIX)

(function() {
  // buat elemen container iklan
  var adContainer = document.createElement("div");
  adContainer.id = "adsterra-banner-728x90";
  adContainer.style = "text-align:center;margin:15px auto;position:relative;z-index:9999;";
  document.body.prepend(adContainer);

  // definisikan konfigurasi sebelum script dimuat
  window.atOptions = {
    key: "c38112be63d5116bd3c4f447604955e4",
    format: "iframe",
    height: 90,
    width: 728,
    params: {}
  };

  // load script HTTPS aman
  var s = document.createElement("script");
  s.type = "text/javascript";
  s.src = "https://www.highperformanceformat.com/" + atOptions.key + "/invoke.js";

  // untuk debug: tampilkan status di console
  s.onload = function() {
    console.log("✅ Adsterra script loaded.");
  };
  s.onerror = function(e) {
    console.warn("❌ Adsterra gagal dimuat - mungkin diblokir oleh browser/adblock atau HTTPS.");
  };

  adContainer.appendChild(s);
})();
