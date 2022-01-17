function escapeHTML(html_string) {
    return html_string.replaceAll("&", "&amp;").replace("/", "&frasl; ")
                      .replaceAll("<", "&lt;").replaceAll(">", "&gt;")
                      .replaceAll("\"", "&quot;").replaceAll("'", "&apos;");
}