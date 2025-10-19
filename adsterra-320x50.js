// Adsterra 320x50 Auto Inject + Center FIXED
document.addEventListener("DOMContentLoaded", function () {
  const adContainer = document.createElement("div");
  adContainer.style.cssText = `
    width: 100%;
    text-align: center;
    margin: 15px auto;
  `;
  document.body.appendChild(adContainer);

  window.atOptions = {
    'key': 'a2587c5abac6fb7c05cd2e91eac1c480',
    'format': 'iframe',
    'height': 50,
    'width': 320,
    'params': {}
  };

  const invoke = document.createElement("script");
  invoke.type = "text/javascript";
  invoke.src = "https://www.highperformanceformat.com/a2587c5abac6fb7c05cd2e91eac1c480/invoke.js";
  adContainer.appendChild(invoke);
});
