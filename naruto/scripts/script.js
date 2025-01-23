//aanmaken van de variabelen
var x = document.getElementById("scrollzonder");
var map = document.getElementById("map");
var y = document.getElementById("scrollmet");
var z = document.getElementById("content");
var arrow = document.getElementById("arrow");
var open = document.getElementById("open");
var progress = document.getElementsByClassName("progress")[0];
var progress1 = document.getElementsByClassName("progress")[1];
var logo = document.getElementById("logo");
var paper = new Audio('sounds/paper.wav');
var believeit = new Audio('sounds/believeit.mp3');
var thebeginning = document.getElementById("theBeginning");
var growingup = document.getElementById("growingUp");
var gettingbetter = document.getElementById("gettingBetter");
var peak = document.getElementById("peak");
var theend = document.getElementById("theEnd");
var container = document.getElementById("container");
var inhoud = document.getElementById("inhoud");
var clone1 = document.getElementById("clone1");
var clone2 = document.getElementById("clone2");
var clone3 = document.getElementById("clone3");
var smoke1 = document.getElementById("smoke1");
var smoke2 = document.getElementById("smoke2");
var jutsuSound = new Audio("sounds/jutsu.mp3");
var poofSound = new Audio("sounds/clonepoof.mp3");
var poofSound2 = new Audio("sounds/clonepoof2.mp3");
var tip = document.getElementById("tip");
var anchor1 = document.getElementById("anchor1");

console.log("noice");

map.addEventListener("click", scrollTerug);
y.addEventListener("click", scrollUit);

//eventlistener voor het openen van de scroll met spacebar
//https://iqcode.com/code/javascript/javascript-knowing-when-space-is-pressed
document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
        scrollUit(); 
    }
})


//dit is de functie voor het uitrollen van de rol, ik heb gekozen om dit te animeren met javascript ipv css omdat er veel timing in zit.
//dit leek mij makkelijker te doen met timeouts dan het met css classes te doen.
function scrollUit() {

    y.removeEventListener("click", scrollUit);
    map.removeEventListener("click", scrollTerug);
    progress.style.transition = "1s ease";
    progress1.style.transition = "1s ease";
    y.style.opacity = "0"
    progress1.style.width = "2em";
    setTimeout(() => {
        z.style.width = "95%";
    }, 1000);
    setTimeout(() => {
        inhoud.style.display = "block";
        thebeginning.style.display = "flex";
        growingup.style.display = "flex";
        gettingbetter.style.display = "flex";
        peak.style.display = "flex";
        theend.style.display = "flex";
        z.style.width = "780%";
    }, 3500);
    setTimeout(() => {
        x.id = "scrollleft";
    }, 1000);
    setTimeout(() => {
        paper.play();
    }, 1000);
    setTimeout(() => {
        y.id = "scrollgone";
    }, 1000);
    setTimeout(() => {
        y.addEventListener("click", scrollUit);
        map.addEventListener("click", scrollTerug);
        progress.style.opacity = "1";
        progress1.style.opacity = "1";
        inhoud.style.opacity = "1";
        thebeginning.style.opacity = "1";
        growingup.style.opacity = "1";
        gettingbetter.style.opacity = "1";
        peak.style.opacity = "1";
        theend.style.opacity = "1";
    }, 3600);
    arrow.style.opacity = "0"
    open.style.opacity = "0"
}


//functie voor het terugrollen van de scroll, doordat alle content naar display: none gaat zal de viewport automatisch naar het begin van de pagina gaan.
function scrollTerug() {
    inhoud.style.display = "none";
    thebeginning.style.display = "none";
    growingup.style.display = "none";
    gettingbetter.style.display = "none";
    peak.style.display = "none";
    theend.style.display = "none";
    y.removeEventListener("click", scrollUit);
    map.removeEventListener("click", scrollTerug);
    z.style.transition = "0s";
    z.style.width = "90%";
    setTimeout(() => {
        z.style.transition = "3.4s ease";
        z.style.width = "0%";
        paper.play();
        x.id = "scrollzonder";
        z.id = "content";
        y.id = "scrollmet";
        x.removeAttribute("onclick")
        y.removeAttribute("onclick")
        progress.style.opacity = "0";
        inhoud.style.opacity = "0";
        theBeginning.style.opacity = "0";
        progress1.style.opacity = "0";
    }, 0010)
    setTimeout(() => {
        x.onclick = scrollTerug;
        y.addEventListener("click", scrollUit);
        map.addEventListener("click", scrollTerug);
    }, 3600);
    setTimeout(() => {
        y.style.opacity = "1";
        arrow.style.opacity = "1";
        open.style.opacity = "1";
    }, 3200);
}

//functie voor de easteregg
logo.addEventListener("click", schreeuw);

function schreeuw() {
    believeit.play();
}


//hier wordt de functie voor het horizontaal scrollen aangemaakt en opgeroepen doormiddel van een eventlistener, elke keer als er gescrollt word zal deze functie een berekening doen om het om te zetten naar een verticale scroll

//https://dev.to/juanbelieni/how-to-create-horizontal-scroll-with-mouse-wheel-using-javascript-4cm5
const element = document.querySelector("#container");

element.addEventListener('wheel', (event) => {
    event.preventDefault();

    element.scrollBy({
        left: event.deltaY < 0 ? -300 : 300,

    });
});

//Hier staat de functie voor de shadow clones, door op naruto te klikken verschijnen er twee clones, door een beetje met timeouts te spelen heb ik ze op verschillende tijden laten verschijnen.

clone2.addEventListener("click", shadowClone);

function shadowClone() {
    jutsuSound.play();
    setTimeout(() => {
        poofSound.play();
        clone1.style.opacity = "1";
        smoke1.style.opacity = "1"
    }, 1000);
    setTimeout(() => {
        smoke1.style.opacity = "0"
    }, 1500);
    setTimeout(() => {
        poofSound2.play();
        clone3.style.opacity = "1";
        smoke2.style.opacity = "1"
    }, 1200);
    setTimeout(() => {
        smoke2.style.opacity = "0"
    }, 1600);
    clone2.removeEventListener("click", shadowClone)
    tip.innerHTML = "Shadow clone jutsu!";
}

//poging om de progressbar werkende te krijgen, ik heb hier helaas geen tijd meer voor. Ik heb geprobeerd om een functie te maken die kijkt of er een bepaald element in de viewport staat. wanneer dit zo is zou de rode progress bar een hogere width krijgen. https://gist.github.com/jjmu15/8646226
container.addEventListener("wheel", isInViewport);

function isInViewport(anchor1) {
    var rect = element.getBoundingClientRect();
    var html = document.documentElement;
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || html.clientHeight) &&
        rect.right <= (window.innerWidth || html.clientWidth)
    );
    if (isInViewport(anchor1) == true) {
        console.log("tue")
    } else {
        console.log("false")
    }
}
