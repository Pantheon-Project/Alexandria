function pageload() {
    // Bootstrap Icons include
    str = `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" crossorigin="anonymous" referrerpolicy="no-referrer">`;
    document.getElementById("txt_bootstrapicon").textContent = str;
    // Bootstrap Icons code
    str = `<i class="bi-circle"></i>`;
    document.getElementById("txt_bootstrapicon_ex").textContent = str;

    // FontAwesome include
    str = `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" crossorigin="anonymous" referrerpolicy="no-referrer">`;
    document.getElementById("txt_fontawesome").textContent = str;
    // FontAwesome code
    str = `<i class="fas fa-circle"></i>`;
    document.getElementById("txt_fontawesome_ex").textContent = str;

    // Feather include
    str = `<script src="https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js" crossorigin="anonymous"></script>`;
    // document.getElementById("txt_feather").innerHTML = escapeHTML(str);
    document.getElementById("txt_feather").textContent = str;
    // Feather code
    str = `<i data-feather="circle"></i>\n<script>feather.replace()<script>`;
    document.getElementById("txt_feather_ex").textContent = str;
    feather.replace()
}