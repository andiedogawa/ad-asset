// Adsterra banner 728x90 (auto insert)
document.addEventListener("DOMContentLoaded", function () {
  const container = document.createElement("div");
  container.id = "adsterra-728x90";
  container.style.textAlign = "center";
  container.style.margin = "10px auto";
  container.style.display = "block";
  document.body.insertBefore(container, document.body.firstChild);

  // Script config
  const config = document.createElement("script");
  config.type = "text/javascript";
  config.text = `
    atOptions = {
      'key' : 'c38112be63d5116bd3c4f447604955e4',
      'format' : 'iframe',
      'height' : 90,
      'width' : 728,
      'params' : {}
    };
  `;
  container.appendChild(config);

  // Script Adsterra
  const invoke = document.createElement("script");
  invoke.type = "text/javascript";
  invoke.src = "https://www.highperformanceformat.com/c38112be63d5116bd3c4f447604955e4/invoke.js";
  container.appendChild(invoke);
});
