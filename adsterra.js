// adsterra.js - versi final
(function() {
    function loadAd(key, width, height, src) {
        // Buat wrapper div untuk center
        var wrapper = document.createElement('div');
        wrapper.style.textAlign = 'center';
        wrapper.style.margin = '10px 0'; // jarak vertikal

        // Buat script untuk atOptions unik
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

        // Masukkan wrapper ke body
        document.body.appendChild(wrapper);
    }

    // Iklan pertama (desktop)
    loadAd(
        'c38112be63d5116bd3c4f447604955e4',
        728,
        90,
        'https://www.highperformanceformat.com/c38112be63d5116bd3c4f447604955e4/invoke.js'
    );

    // Iklan kedua (mobile)
    loadAd(
        'a2587c5abac6fb7c05cd2e91eac1c480',
        320,
        50,
        'https://www.highperformanceformat.com/a2587c5abac6fb7c05cd2e91eac1c480/invoke.js'
    );
})();
