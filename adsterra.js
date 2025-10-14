/*
=========================================================
 Adsterra Banner Combo vGitHub Final
 Version: 1.0
 Description:
 - Auto-center banner
 - Responsive (Desktop & Mobile)
 - Load via single script from GitHub/jsDelivr
=========================================================
*/

(function() {
  // === Inject CSS ===
  const css = `
    <style>
      .ad-wrapper {
        display: flex !important;
        justify-content: center !important;
        align-items: center !important;
        width: 100% !important;
        margin: 20px auto !important;
        text-align: center !important;
      }
      iframe {
        border: none !important;
        display: block !important;
        margin: 0 auto !important;
      }
      @media (min-width:768px) {
        .desktop-ad { display: flex !important; }
        .mobile-ad { display: none !important; }
      }
      @media (max-width:767px) {
        .desktop-ad { display: none !important; }
        .mobile-ad { display: flex !important; }
      }
    </style>
  `;
  document.head.insertAdjacentHTML("beforeend", css);

  // === Create main container ===
  const container = document.createElement("div");
  container.id = "adsterra-wrapper";
  document.body.appendChild(container);

  // === Function to load Adsterra banner ===
  function loadAd(key, width, height, className) {
    const wrapper = document.createElement("div");
    wrapper.className = `ad-wrapper ${className}`;
    container.appendChild(wrapper);

    // Config Adsterra
    const configScript = document.createElement("script");
    configScript.text = `
      atOptions = {
        'key': '${key}',
        'format': 'iframe',
        'height': ${height},
        'width': ${width},
        'params': {}
      };
    `;
    wrapper.appendChild(configScript);

    // Load banner
    const loadScript = document.createElement("script");
    loadScript.src = \`//www.highperformanceformat.com/${key}/invoke.js\`;
    loadScript.async = true;
    wrapper.appendChild(loadScript);
  }

  // Desktop & Mobile banners
  loadAd('c38112be63d5116bd3c4f447604955e4', 728, 90, 'desktop-ad'); // Desktop
  loadAd('a2587c5abac6fb7c05cd2e91eac1c480', 320, 50, 'mobile-ad'); // Mobile
})();
