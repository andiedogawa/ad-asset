<script>
document.addEventListener("DOMContentLoaded", function() {
  let adContainer = document.createElement("div");
  adContainer.style.textAlign = "center";
  adContainer.style.margin = "20px auto";
  adContainer.style.display = "block";
  adContainer.id = "ad728x90";

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

  document.body.appendChild(adContainer);

  // Fallback jika ad gagal load
  setTimeout(() => {
    const iframe = adContainer.querySelector("iframe");
    if (!iframe) {
      adContainer.innerHTML = `
        <a href="#" target="_blank">
          <img src="https://via.placeholder.com/728x90?text=Your+Ad+Here" 
               alt="Ad Fallback" style="max-width:100%;height:auto;border:0;">
        </a>`;
    }
  }, 4000); // cek setelah 4 detik
});
</script>
