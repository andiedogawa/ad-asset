// adsterra-responsif.js
(function() {
    function loadAd(key, width, height, src) {
        var wrapper = document.createElement('div');
        wrapper.style.textAlign = 'center';
        wrapper.style.margin = '10px 0';

        // Buat script atOptions unik
        var optionsScript = document.createElement('script');
        optionsScript.type = 'text/javascript';
        optionsScript.innerHTML = `
            window.atOptions = {
                key: '${key}',
                format: 'iframe',
                height: ${height},
                width: ${width},
                params: {}
            };
        `;
        wrapper.appendChild(optionsScript);

        // Buat script iklan
        var adScript = document.createElement('script');
        adScript.type = 'text/javascript';
        adScript.src = src;
        adScript.async = true;
        wrapper.appendChild(adScript);

        document.body.appendChild(wrapper);
    }

    // Fungsi untuk deteksi layar
    function initAd() {
        var width = window.innerWidth || document.documentElement.clientWidth;

        if (width >= 768) {
            // Desktop → 728x90
            loadAd(
                'c38112be63d5116bd3c4f447604955e4',
                728,
                90,
                'https://www.highperformanceformat.com/c38112be63d5116bd3c4f447604955e4/invoke.js'
            );
        } else {
            // Mobile → 320x50
            loadAd(
                'a2587c5abac6fb7c05cd2e91eac1c480',
                320,
                50,
                'https://www.highperformanceformat.com/a2587c5abac6fb7c05cd2e91eac1c480/invoke.js'
            );
        }
    }

    // Jalankan saat load
    window.addEventListener('load', initAd);

    // Optional: jika resize ingin update iklan
    window.addEventListener('resize', function() {
        // Bisa ditambahkan reload iklan jika perlu
        // Untuk sekarang biarkan statis saat load
    });
})();
