
function getHTTPObject() {
    if (typeof XMLHttpRequest == "undefined") {
        XMLHttpRequest = function () {
            try { return new ActiveXObject("Msxml2.XMLHTTP.6.0"); }
            catch (e) { }
            try { return new ActiveXObject("Msxml2.XMLHTTP.3.0"); }
            catch (e) { }
            try { return new ActiveXObject("Msxml2.XMLHTTP"); }
            catch (e) { }
            return false;
        }

    } return new XMLHttpRequest();
}

function displayAjaxLoading(element) {
    while (element.hasChildNodes()) {
        element.removeChild(element.lastChild);
    }
    var content = document.createElement("p");
    content.appendChild(document.createTextNode("正在使用ajax传输请求"));
    element.appendChild(content);
}

function submitFormWithAjax(whichform, thetarget) {
    var request = getHTTPObject();
    if (request == null) return false;
    displayAjaxLoading(thetarget);
    var dataParts = [];
    var element;
    for (var i = 0; i < whichform.elements.length; i++) {
        element = whichform.elements[i];
        dataParts[i] = element.name + "=" + encodeURIComponent(element.value);
    }
    var data = dataParts.join("&");
    request.open("GET", whichform.getAttribute("action"), true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.onreadystatechange = function () {
        if (request.readyState == 4) {
            console.log("run");
            if (request.status == 200 || request.status == 0) {
        
                var matches = request.responseText.match(/<article>([\s\S]+)<\/article>/);
                console.log(matches);
                if (matches.length > 0) {
                    thetarget.innerHTML = matches[1];
                } else {
                    thetarget.innerHTML = "<p>Oops, there was an error. sorry.<p>";
                }

            } else {
                thetarget.innerHTML = "<p>" + request.statusText + "</p>";
            }
        }

    };
    request.send(data);
    return true;
}

function prepareForms() {
    for (var i = 0; i < document.forms.length; i++) {
        var thisform = document.forms[i];
        thisform.onsubmit = function () {
            var article = document.getElementsByTagName('article')[0];
            if (submitFormWithAjax(this, article)) return false;
            return true;
        }
    }

}
prepareForms();
// window.onload = prepareForms;





