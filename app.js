var modal1 = document.getElementById("modal1");
var modal1_btn = document.getElementById("entry1");
var span = document.getElementsByClassName("close")[0];

modal1_btn.onclick = function () {
    modal1.style.display = "block";
}
//close modal using (x)
span.onclick = function() {
    modal1.style.display = "none";
}
//close modal when you click outside of it
window.onclick = function(event) {
    if (event.target == modal1){
        modal1.style.display = "none";
    }
}