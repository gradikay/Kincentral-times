//navigator
//when the user start scrolling
//test code : document.getElementById("test").style.backgroundColor = "yellow";
window.onscroll = function () { myStickyBar() };

const navigation = document.getElementById("nav");
const leftAside = document.getElementById("left");
const rightAside = document.getElementById("right");
const mainSection = document.getElementById("mainC");
//get the offset position of the navbar
const stickyBar = navigation.offsetTop;
function myStickyBar() {

    if (window.pageYOffset >= stickyBar) {

        navigation.classList.add("sticky");
        leftAside.classList.add("leftFixed");
        rightAside.classList.add("rightFixed");
        mainSection.classList.add("mainFixed");
    } else {
        navigation.classList.remove("sticky");
        leftAside.classList.remove("leftFixed");
        rightAside.classList.remove("rightFixed");
        mainSection.classList.remove("mainFixed");
    }
}
// Let create the news object
const newsLetter = [
    article1 = {
        category:"Fashion",
        title:"Anna's new summer Collection",
        date:"01/24/2019",
        authorFirstName:"Masa",
        authorLastName:"Musa",
        authorPic:"IMG_0309.JPG",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        articlePic: "IMG_0309.JPG",
        articleSource: "www.businessinsider.com"
    },
    article2 = {
        category : "Food",
        title : "Fangi's dinner is the best in Town",
        date : "01/24/2019",
        authorFirstName : "Masa",
        authorLastName : "Musa",
        authorPic : "IMG_0309.JPG",
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        articlePic : "IMG_0309.JPG",
        articleSource : "www.businessinsider.com",
    },
    article2 = {
        category : "Travel",
        title : "Emisphere flight now 50% of !",
        date : "01/24/2019",
        authorFirstName : "Masa",
        authorLastName : "Musa",
        authorPic : "IMG_0309.JPG",
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        articlePic : "IMG_0309.JPG",
        articleSource : "www.businessinsider.com",
    }
];
// Loading our xml
var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        loadLeftContent(this);
        loadRightContent(this);
        loadMainContent(this);
        loadMainContentLine(this);
    }    
};
xhttp.open("GET", "app.xml", true);
xhttp.send();
function loadLeftContent(xml) {
    var xmlDoc = xml.responseXML;
    var x = xmlDoc.getElementsByTagName("article");
    var i, txt = "";
    
    for (i = 0; i < x.length; i++) {

        if (i === 3) { break;}
        txt += "<article><div class='image-div'><img src =' " + x[i].getElementsByTagName("mainPic")[0].childNodes[0].nodeValue + " ' />" +
            "<h4>" + x[i].getElementsByTagName("category")[0].childNodes[0].nodeValue + "</h4></div>" +
            "<h1>" + x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue + "</h1>" +
            "<p class='description'>" + x[i].getElementsByTagName("description")[0].childNodes[0].nodeValue.substring(0, 110) +
            "</p></article>";
    }
    let obj;
    obj = document.getElementById("left-content");
    obj.innerHTML = txt;
}
function loadRightContent(xml) {
    var xmlDoc = xml.responseXML;
    var x = xmlDoc.getElementsByTagName("article");
    var txt = "", i;

    for (i = 0; i < x.length; i++) {
        txt += "<article>" +
            "<h1>" + x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue +
            "</h1></article>";
    }
    let obj;
    obj = document.getElementById("right-content");
    obj.innerHTML = txt;
}
function loadMainContent(xml) {
    var xmlDoc = xml.responseXML;
    var x = xmlDoc.getElementsByTagName("article");
    var i, txt = "";
    for (i = 0; i < x.length; i++) {
        txt += "<article><div class='image-div'>" +
            "<img src='" +
            x[i].getElementsByTagName("mainPic")[0].childNodes[0].nodeValue + " '/> </div>" +
            "<h1>" +
            x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue + "</h1>" +
            "<p class='category-div'><span class='category'>" +
            x[i].getElementsByTagName("category")[0].childNodes[0].nodeValue + "</span>" + " " +
            x[i].getElementsByTagName("aFirstName")[0].childNodes[0].nodeValue + " " +
            x[i].getElementsByTagName("aLastName")[0].childNodes[0].nodeValue + " | " +
            x[i].getElementsByTagName("data")[0].childNodes[0].nodeValue + "</p>" +
            "<p>" + x[i].getElementsByTagName("description")[0].childNodes[0].nodeValue +
            "</p></article>";

    }
    let obj;
    obj = document.getElementById("mainContent");
    obj.innerHTML = txt;
}
function loadMainContentLine(xml) {
    var xmlDoc = xml.responseXML;
    var x = xmlDoc.getElementsByTagName("article");
    var txt = "", i;
    for (i = 0; i < x.length; i++) {
        if (i === 3) {
            break;
        }
        txt += "<article class='content-div'><div class='image-div-inline'>" +
            "<img src='" + x[i].getElementsByTagName("mainPic")[0].childNodes[0].nodeValue +
            "' alt= '" + x[i].getElementsByTagName("mainPic")[0].childNodes[0].nodeValue +
            "' title ='picture by - " + x[i].getElementsByTagName("aFirstName")[0].childNodes[0].nodeValue + "'/></div>" +
            "<h1>" + x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue + "</h1>" +
            "<p class='category-div'> <span class='category'>" + 
            x[i].getElementsByTagName("category")[0].childNodes[0].nodeValue + "</span>" + " " +
            x[i].getElementsByTagName("aFirstName")[0].childNodes[0].nodeValue + " " +
            x[i].getElementsByTagName("aLastName")[0].childNodes[0].nodeValue + " | " +
            "<small>" + x[i].getElementsByTagName("data")[0].childNodes[0].nodeValue + "</small></p></article>"
    }
    let obj;
    obj = document.getElementById("mainContentLine");
    obj.innerHTML = txt;
}
// create a function to display our date

var d = new Date;
document.getElementById("copyDate").innerHTML = d.getFullYear();

var day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    default:
        day = "This is Gradi's favorite arror!";
}
let date;
date = document.getElementById("day");
date.innerHTML = day + " - " + d.getDate() + " " + d.getMonth() + 1 + " , " + d.getFullYear();    