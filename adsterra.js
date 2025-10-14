// === Adsterra Banner Combo v7 (Auto Center + Responsive + No HTML Edit) ===

(function() {
  // Tambahkan CSS otomatis
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
      .ad-wrapper iframe {
        display: block !important;
        margin: 0 auto !important;
        border: none !important;
      }
      @media (min-width: 768px) {
        .desktop-ad { display: flex !important; }
        .mobile-ad { display: none !important; }
      }
      @media (max-width: 767px) {
        .desktop-ad { display: none !important; }
        .mobile-ad { display: flex !important; }
      }
    </style>
  `;
  document.head.insertAdjacentHTML("beforeend", css);

  // Container utama
  const container = document.createElement("div");
  container.id = "adsterra-wrapper";
  document.body.appendChild(container);

  // --- Banner Desktop (728x90) ---
  const desktopAd = `
    <div class="ad-wrapper desktop-ad">
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
    </div>
  `;

  // --- Banner Mobile (320x50) ---
  const mobileAd = `
    <div class="ad-wrapper mobile-ad">
      <script type="text/javascript">
        atOptions = {
          'key' : 'a2587c5abac6fb7c05cd2e91eac1c480',
          'format' : 'iframe',
          'height' : 50,
          'width' : 320,
          'params' : {}
        };
      <\/script>
      <script type="text/javascript" src="//www.highperformanceformat.com/a2587c5abac6fb7c05cd2e91eac1c480/invoke.js"><\/script>
    </div>
  `;

  // Masukkan ke halaman
  container.innerHTML = desktopAd + mobileAd;
})();
