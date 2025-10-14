// === Adsterra Banner Combo (Iframe Safe Version) ===

(function () {
  // Tambahkan CSS untuk posisi dan responsive
  const style = document.createElement("style");
  style.textContent = `
    .adsterra-wrapper {
      width: 100%;
      text-align: center;
      margin: 20px auto;
    }
    iframe.adsterra-frame {
      border: none;
      display: none;
      margin: 0 auto;
      max-width: 100%;
    }
    @media (min-width:768px) {
      iframe.desktop { display: block; }
    }
    @media (max-width:767px) {
      iframe.mobile { display: block; }
    }
  `;
  document.head.appendChild(style);

  // Buat container utama
  const container = document.createElement("div");
  container.className = "adsterra-wrapper";
  document.body.appendChild(container);

  // === Iklan Desktop 728x90 ===
  const desktopFrame = document.createElement("iframe");
  desktopFrame.className = "adsterra-frame desktop";
  desktopFrame.width = "728";
  desktopFrame.height = "90";
  desktopFrame.loading = "lazy";
  desktopFrame.src = "https://www.highperformanceformat.com/c38112be63d5116bd3c4f447604955e4/invoke.js";
  container.appendChild(desktopFrame);

  // === Iklan Mobile 320x50 ===
  const mobileFrame = document.createElement("iframe");
  mobileFrame.className = "adsterra-frame mobile";
  mobileFrame.width = "320";
  mobileFrame.height = "50";
  mobileFrame.loading = "lazy";
  mobileFrame.src = "https://www.highperformanceformat.com/a2587c5abac6fb7c05cd2e91eac1c480/invoke.js";
  container.appendChild(mobileFrame);
})();
