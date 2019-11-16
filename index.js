//navigator
//when the user start scrolling
window.onscroll = function () { myStickyBar() };

var navigation = document.getElementById("nav");
//get the offset position of the navbar
var sticky = navigation.offsetTop;

function myStickyBar() {

    if (window.pageYOffset >= sticky) {
        navigation.classList.add("sticky");
    } else {
        navigation.classList.remove("sitcky");
    }
}
document.getElementById("test").style.backgroundColor = "red";