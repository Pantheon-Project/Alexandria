function pageload() {
    // Bootstrap include
    str = `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">`;
    document.getElementById("txt_bootstrap_css").textContent = str;
    str = `<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" crossorigin="anonymous"></script>`;
    document.getElementById("txt_bootstrap_js").textContent = str;
    str = `<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" crossorigin="anonymous"></script>`;
    document.getElementById("txt_bootstrap_popper").textContent = str;
    // Bootstrap code
    str = `<p class="text-primary">Text made primary (blue) by Bootstrap</p>`;
    document.getElementById("txt_bootstrap_ex").textContent = str;
}