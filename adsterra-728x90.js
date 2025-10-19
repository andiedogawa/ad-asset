// ✅ FIX Adsterra Banner 728x90

(function() {
  // buat elemen container iklan
  var adContainer = document.createElement("div");
  adContainer.id = "adsterra-banner-728x90";
  adContainer.style = "text-align:center;margin:15px 0;";
  document.body.insertBefore(adContainer, document.body.firstChild);

  // set konfigurasi global yang wajib dikenali Adsterra
  window.atOptions = {
    key: "c38112be63d5116bd3c4f447604955e4",
    format: "iframe",
    height: 90,
    width: 728,
    params: {}
  };

  // load script iklan setelah konfigurasi terpasang
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "//www.highperformanceformat.com/" + atOptions.key + "/invoke.js";
  adContainer.appendChild(script);
})();
