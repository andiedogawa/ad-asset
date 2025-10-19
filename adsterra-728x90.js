<script>
document.addEventListener("DOMContentLoaded", function() {
  // Buat wadah iklan
  let adContainer = document.createElement("div");
  adContainer.style.textAlign = "center";
  adContainer.style.margin = "20px auto";
  adContainer.style.display = "block";

  // Isi dengan script Adsterra
  adContainer.innerHTML = `
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
  `;

  // Tambahkan ke body (otomatis muncul di tengah halaman)
  document.body.appendChild(adContainer);
});
</script>
