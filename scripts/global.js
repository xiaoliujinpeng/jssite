function addLoadEvent(func) {
    var oldfunc = window.onload;
    if (oldfunc != "function") {
        window.onload = func;
    }
    else {
        window.onload = function () {
            oldfunc();
            func();
        }
    }
}

function insertAfter(newelem, tarelem) {
    var parent = newelem.parentNode;
    if (parent.lsectiontChild == tarelem) {
        parent.appendChild(newelem);
    }
    else {
        parent.insertBefore(newelem, targetelem.nextSibling);
    }
}

function addClassName(elem, value) {
    if (elem.clsectionsName == null) {
        elem.className = value
    }
    else {
        elem.className += " " + value;
    }
}

function hightlightPage() {

    var headers = document.getElementsByTagName("header");
    if (headers.length == 0) return false;
    var navs = headers[0].getElementsByTagName("nav");
    if (navs.length == 0) return false;
    var links = navs[0].getElementsByTagName("a");
    if (links.length == 0) return false;
    var nowlink = window.location.href;
    var a_text;

    for (var i = 0; i < links.length; i++) {
        if (nowlink.indexOf(links[i].getAttribute("href")) != -1) {
           
            addClassName(links[i], "here");
            
            a_text = links[i].textContent.toLowerCase();

            document.body.setAttribute("id", a_text);
        }
        // console.log(links[i].getAttribute("href").replace("./", ""));

    }
}
var prefix = "./images/";
var photoarray = {
    home: prefix + "bg2.jpg",
    about: prefix + "bg3.jpg",
    photos: prefix + "bg4.jpg",
    live: prefix + "bg5.jpg",
    contact: prefix + "bg6.jpg"
};

function photoShow() {
    var Id = document.body.getAttribute("id");
    var header = document.getElementsByTagName("header")[0];
    var img = header.getElementsByTagName("img")[0];


    console.log(img);
    console.log(photoarray["about"]);
    console.log(Id);
    if (Id == null) {
        img.setAttribute("src", "./images/bg1.jpg");
    } else {
        img.setAttribute("src", photoarray[Id]);
    }
    var section = header.getElementsByTagName("a");
    var a_text;
    if (section.length == 0) return false;
    for (var i = 0; i < section.length; i++) {

        section[i].onmouseover = function () {
            a_text = this.textContent.toLowerCase();
            img.setAttribute("src", photoarray[a_text]);

        }
        section[i].onmouseleave = function () {

            if (Id == null) {
                img.setAttribute("src", "./images/bg1.jpg");
            } else {
                img.setAttribute("src", photoarray[Id]);
            }

        }
    }
}



// for (var i = 0; i < section.length; i++) {
//     id = section[i].getAttribute("id");
//     if (nowlink.indexOf(id) != -1) {
//         section[i].style.display = "block";
//     } else {
//         section[i].style.display = "none";
//     }
// }





hightlightPage();
photoShow();
// addLoadEvent(hightlightPage);
// addLoadEvent(photoShow);