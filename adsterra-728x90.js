// Adsterra 728x90 Auto Inject + Center FIXED
document.addEventListener("DOMContentLoaded", function () {
  const adContainer = document.createElement("div");
  adContainer.style.cssText = `
    width: 100%;
    text-align: center;
    margin: 15px auto;
  `;
  document.body.insertBefore(adContainer, document.body.firstChild);

  window.atOptions = {
    'key': 'c38112be63d5116bd3c4f447604955e4',
    'format': 'iframe',
    'height': 90,
    'width': 728,
    'params': {}
  };

  const invoke = document.createElement("script");
  invoke.type = "text/javascript";
  invoke.src = "https://www.highperformanceformat.com/c38112be63d5116bd3c4f447604955e4/invoke.js";
  adContainer.appendChild(invoke);
});
