var lines = document.getElementById("lines");
var sideNav = document.getElementById("sideNav");
var ul = document.getElementById("ul");
var inputbtnDown = document.getElementById("inputbtnDown");

var move = document.getElementById("move");
var move1 = document.getElementById("move1");
var move2 = document.getElementById("move2");
var move3 = document.getElementById("move3");
var move4 = document.getElementById("move4");
var move5 = document.getElementById("move5");
var move6 = document.getElementById("move6");
var move7 = document.getElementById("move7");
function openClose() {

    if (sideNav.style.width != "250px") {
        sideNav.style.width = "250px";
        sideNav.style.borderRight = "1px solid white"
        sideNav.style.transition = "all 0.5s"
        lines.innerHTML = "&#9747";
        lines.style.backgroundColor = "crimson";
        lines.style.transition = "all 2s"

        inputbtnDown.style.width = "125px"
        inputbtnDown.style.transition = "all 0.5s"


        move.style.marginLeft = "250px"
        move.style.transition = "0.5s"
        move1.style.marginLeft = "250px"
        move1.style.transition = "0.5s"
        move2.style.marginLeft = "250px"
        move2.style.transition = "0.5s"
        move3.style.marginLeft = "250px"
        move3.style.transition = "0.5s"
        move4.style.marginLeft = "250px"
        move4.style.transition = "0.5s"
        move5.style.marginLeft = "250px"
        move5.style.transition = "0.5s"
        move6.style.marginLeft = "250px"
        move6.style.transition = "0.5s"
        move7.style.marginLeft = "250px"
        move7.style.transition = "0.5s"
    } else {

        sideNav.style.width = "0px";
        lines.innerHTML = "&#9776";
        lines.style.backgroundColor = "green";
        lines.style.transition = "all 2s"

        sideNav.style.borderRight = "0px solid white"
        sideNav.style.transition = "all 0.5s"

        inputbtnDown.style.width = "163px"

        move.style.marginLeft = "0px"
        move.style.transition = "0.5s"
        move1.style.marginLeft = "0px"
        move1.style.transition = "0.5s"
        move2.style.marginLeft = "0px"
        move2.style.transition = "0.5s"
        move3.style.marginLeft = "0px"
        move3.style.transition = "0.5s"
        move4.style.marginLeft = "0px"
        move4.style.transition = "0.5s"
        move5.style.marginLeft = "0px"
        move5.style.transition = "0.5s"
        move6.style.marginLeft = "0px"
        move6.style.transition = "0.5s"
        move7.style.marginLeft = "0px"
        move7.style.transition = "0.5s"
    }
}


var sectionOne = document.getElementById("section-one");
var topName = document.getElementById("top-name");
var backgroundColor = document.getElementById("background-color");

var sideNav = document.getElementById("sideNav");

function change() {
    var moonsun = document.getElementById("moonsun");

    if (moonsun.className === "fas fa-moon") {
        moonsun.classList.remove("fa-moon")
        moonsun.classList.add("fa-sun")
        document.body.classList.add("change-display")
        sectionOne.style.backgroundColor = "black";
        sectionOne.style.transition = "1s"
        sectionOne.style.color = "white"
        sideNav.style.backgroundColor = "black";
        topName.style.color = "white"
        topName.style.borderColor = "white"
        backgroundColor.style.backgroundColor = "black"
    } else {
        moonsun.classList.remove("fa-sun")
        moonsun.classList.add("fa-moon")
        document.body.classList.remove("change-display")


        sideNav.style.color = "white";
        sideNav.style.backgroundColor = "#7971ea";
        sectionOne.style.backgroundColor = "white";
        sectionOne.style.transition = "1s"
        topName.style.color = "black"
        sectionOne.style.color = "black"
        topName.style.borderColor = "black"
        backgroundColor.style.backgroundColor = "#f8f9fa"
    }
}