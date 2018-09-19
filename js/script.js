var firstCount = true;
var mangd;
function countMangd() {
    var antal = document.getElementById("antalSelect").value;

    if (firstCount) {   
        mangd = document.getElementsByClassName("mangd");
        console.log(mangd);
        firstCount = false;
    }

    for (let i = 0; i < mangd.length; i++) {
        mangd[i].innerHTML = mangd[i].innerHTML * antal;
    }
}