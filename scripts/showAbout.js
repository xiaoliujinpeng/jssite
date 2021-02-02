function showAbout() {

    var article = document.getElementsByTagName("article")[0];

    var as = article.getElementsByTagName("a");
    var section = document.getElementsByTagName("section");
    
    for (var j = 0; j < as.length; j++) {
        section[j].style.display = "none";
        as[j].onclick = function () {
            section = document.getElementsByTagName("section");
            var href = this.getAttribute("href");
            href = href.replace("#", "");
            for (var i = 0; i < section.length; i++) {
                if (href == section[i].getAttribute("id")) {
                    
                    section[i].style.display = "block";
                } else {
                    section[i].style.display = "none";
                }
            }
        }
    }
}

showAbout();