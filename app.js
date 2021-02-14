var modal1 = document.getElementById("modal1");
var modal1_btn = document.getElementById("entry1");
var span1 = document.getElementsByClassName("close1")[0];
var modal2 = document.getElementById("modal2");
var modal2_btn = document.getElementById("entry2");
var span2 = document.getElementsByClassName("close2")[0];

modal1_btn.onclick = function () {
    modal1.style.display = "block";
}
//close modal using (x)
span1.onclick = function() {
    modal1.style.display = "none";
}
//close modal when you click outside of it
window.onclick = function(event) {
    if (event.target == modal1){
        modal1.style.display = "none";
    }
}

modal2_btn.onclick = function () {
    modal2.style.display = "block";
}
//close modal using (x)
span2.onclick = function() {
    modal2.style.display = "none";
}
//close modal when you click outside of it
window.onclick = function(event) {
    if (event.target == modal2){
        modal2.style.display = "none";
    }
}