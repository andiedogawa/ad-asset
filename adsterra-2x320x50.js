// Adsterra dual 320x50 ads (safe for Hostinger)
(function() {
  // 1️⃣ Tambahkan container iklan
  document.write(`
    <div id="adsterra-container" style="text-align:center;margin:10px auto;">
      <div class="ad-slot" id="ad-slot-1" style="margin-bottom:10px;"></div>
      <div class="ad-slot" id="ad-slot-2"></div>
    </div>
  `);

  // 2️⃣ Fungsi untuk load 1 iklan Adsterra
  function loadAd(slotId) {
    let script1 = document.createElement('script');
    script1.type = 'text/javascript';
    script1.innerHTML = `
      atOptions = {
        'key': 'a2587c5abac6fb7c05cd2e91eac1c480',
        'format': 'iframe',
        'height': 50,
        'width': 320,
        'params': {}
      };
      document.write('<scr' + 'ipt type="text/javascript" src="//www.highperformanceformat.com/a2587c5abac6fb7c05cd2e91eac1c480/invoke.js"></scr' + 'ipt>');
    `;

    // 3️⃣ Masukkan ke slot iklan
    document.getElementById(slotId).appendChild(script1);
  }

  // 4️⃣ Jalankan dua kali
  window.addEventListener('DOMContentLoaded', function() {
    loadAd('ad-slot-1');
    loadAd('ad-slot-2');
  });
})();
