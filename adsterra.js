// === Adsterra Banner Combo (Auto Center + Responsive) ===

(function() {
  // Tambahkan CSS responsif dan center otomatis
  const style = `
    <style>
      .ad-wrapper {
        width: 100%;
        text-align: center;
        margin: 20px auto;
      }
      .ad-container {
        display: none;
        justify-content: center;
      }
      .ad-container iframe {
        border: none;
        display: block;
        margin: 0 auto;
      }
      @media(min-width:768px) {
        .desktop-ad { display: flex; }
      }
      @media(max-width:767px) {
        .mobile-ad { display: flex; }
      }
    </style>
  `;
  document.write(style);

  // --- Banner Desktop 728x90 ---
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

  // --- Banner Mobile 320x50 ---
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

  // Gabungkan semuanya ke halaman
  document.write(desktopAd + mobileAd);
})();
