// adsterra.js

(function() {
    function loadAd(key, width, height, src) {
        // Buat wrapper div untuk center
        var wrapper = document.createElement('div');
        wrapper.style.textAlign = 'center';
        wrapper.style.margin = '10px 0'; // optional: beri jarak vertikal

        // Buat script iklan
        var ad = document.createElement('script');
        window.atOptions = {
            key: key,
            format: 'iframe',
            height: height,
            width: width,
            params: {}
        };
        ad.src = src;
        ad.async = true;

        // Masukkan script ke wrapper
        wrapper.appendChild(ad);

        // Masukkan wrapper ke body
        document.body.appendChild(wrapper);
    }

    // Iklan pertama
    loadAd(
        'c38112be63d5116bd3c4f447604955e4',
        728,
        90,
        'https://www.highperformanceformat.com/c38112be63d5116bd3c4f447604955e4/invoke.js'
    );

    // Iklan kedua
    loadAd(
        'a2587c5abac6fb7c05cd2e91eac1c480',
        320,
        50,
        'https://www.highperformanceformat.com/a2587c5abac6fb7c05cd2e91eac1c480/invoke.js'
    );
})();
