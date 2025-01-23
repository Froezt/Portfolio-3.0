// JavaScript Document
console.log("howdy");

const myTimeout = setTimeout(giveTransition, 5000);

function giveTransition() {
  document.getElementsByTagName("span")[0].style.transition = "all 0.5s";
    document.getElementsByTagName("span")[1].style.transition = "all 0.5s";
    document.getElementsByTagName("span")[2].style.transition = "all 0.5s";
    document.getElementsByTagName("span")[3].style.transition = "all 0.5s";
    console.log("5s");
}
//beetje javascript om te zorgen dat de hover wat minder glitchy lijkt.//