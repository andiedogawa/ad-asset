(function() {
  var adContainer = document.getElementById("banner-top") || document.body;
  var adBox = document.createElement("div");
  adBox.style = "text-align:center;margin:15px auto;z-index:9999;position:relative;";
  adContainer.prepend(adBox);

  window.atOptions = {
    key: "c38112be63d5116bd3c4f447604955e4",
    format: "iframe",
    height: 90,
    width: 728,
    params: {}
  };

  var s = document.createElement("script");
  s.type = "text/javascript";
  s.src = "https://www.highperformanceformat.com/" + atOptions.key + "/invoke.js";
  adBox.appendChild(s);
})();
