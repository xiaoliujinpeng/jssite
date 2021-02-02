
function takeColor() {
    var tbody = document.getElementsByTagName("tbody")[0];
    var trs = tbody.getElementsByTagName("tr");
    for (var i = 0; i < trs.length; i++){
        // 奇数行染白色
        if (i % 2 == 0) {
            trs[i].style.backgroundColor = "#515e65";

        } else {
            trs[i].style.backgroundColor = "#1f2023";
        }
    }
}



takeColor();


