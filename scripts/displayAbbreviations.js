function displayAbbreviation() {
    var abbrtag = document.getElementsByTagName("abbr");
    if (abbrtag.length == 0) return false;
    var abbrtitles = new Array();

    var temp;
    for (var i = 0; i < abbrtag.length;i++) {
        // abbrtitles[i] = abbrtag[i].getAttribute("title");
        temp = abbrtag[i].firstChild;
        if (temp.nodeType == 3) {
            abbrtitles[temp.nodeValue] = abbrtag[i].getAttribute("title");
        } else {
            temp = temp.firstChild;
            abbrtitles[temp.nodeValue] = abbrtag[i].getAttribute("title");
        }
    }
    var dl = document.createElement("dl");
    for (each in abbrtitles) {
        var dt = document.createElement("dt");
        var dd = document.createElement("dd");
        dd.appendChild(document.createTextNode(abbrtitles[each]));
        dt.appendChild(document.createTextNode(each));
        dl.appendChild(dt);
        dl.appendChild(dd);
    }
    var h2 = document.createElement("h2");
    h2.appendChild(document.createTextNode("Abbreviations"));
    document.body.appendChild(h2);
    document.body.appendChild(dl);
}


displayAbbreviation();