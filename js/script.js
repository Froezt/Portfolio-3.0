
var workKnop = document.getElementById("workKnop");
var contactKnop = document.getElementById("contactKnop");
var backKnop = document.getElementsByClassName("backKnop")[0];
var workContent = document.getElementsByClassName("workContent")[0];
var contactContent = document.getElementsByClassName("contact")[0];
var workInfocontent = document.getElementsByClassName("workInfo")[0];
var body = document.querySelector("body");
var tryButton = document.getElementById("tryButton");
workKnop.addEventListener("click", activeCheckerWork);
contactKnop.addEventListener("click", activeCheckerContact);
backKnop.addEventListener("click", activeCheckerBack);
var workimage1 = document.getElementsByClassName("workImage")[0];
var workimage2 = document.getElementsByClassName("workImage")[1];
var workimage3 = document.getElementsByClassName("workImage")[2];
var workimage4 = document.getElementsByClassName("workImage")[3];
var workimage5 = document.getElementsByClassName("workImage")[4];
var workimage6 = document.getElementsByClassName("workImage")[5];
var workimage7 = document.getElementsByClassName("workImage")[6];
var workimage8 = document.getElementsByClassName("workImage")[7];
var workTitle = document.getElementsByClassName("workTitle");
var workInfoimage = document.getElementsByClassName("vergroot")[0];
var workInfotext = document.getElementById("workInfotext");
var workName = document.getElementById("workName");
var workLink = document.getElementById("workLink");

workimage1.addEventListener("click", workInfo1);
workimage2.addEventListener("click", workInfo2);
workimage3.addEventListener("click", workInfo3);
workimage4.addEventListener("click", workInfo4);
workimage5.addEventListener("click", workInfo5);
workimage6.addEventListener("click", workInfo6);
workimage7.addEventListener("click", workInfo7);


function workInfo1() {
    workInfocontent.className = "workInfo";
    workToggle();
    workContent.className = "workContentAnimation";
    tryButton.style.display = "block"
    tryButton.innerHTML = "View"
    workLink.href = "typography/index.html"
    workInfoimage.src = "images/typography.png"
    workName.innerHTML = "Capitolium (news) 2 Typography"
    workInfotext.innerHTML = "For this assignment I made a website based on the font \"Capitolium (news) 2\", which is a font used by the popular Dutch newspaper called Volkskrant. This website shows off the different font styles in detail and gives the user information about the history and creator of the font.";
    setTimeout(workInfotoggle, 700);
}

function workInfo2() {
    workInfocontent.className = "workInfo";
    workToggle();
    workContent.className = "workContentAnimation";
    tryButton.style.display = "block"
    tryButton.innerHTML = "Try"
    workLink.href = "Bingo/index.html"
    workInfoimage.src = "images/bingosite.png"
    workName.innerHTML = "Bingo website"
    workInfotext.innerHTML = "For this assignment I made an interactive bingo website using HTML, Javascript and css. You can use the stamp to mark the numbers off your bingo card and you can use the microphone to announce your bingo. (You'll have to sing a song in case of a false bingo!!)"
    setTimeout(workInfotoggle, 700);
}

function workInfo3() {
    workInfocontent.className = "workInfo";
    workToggle();
    workContent.className = "workContentAnimation";
    tryButton.style.display = "block"
    tryButton.innerHTML = "Reddit"
    workLink.href = "https://www.reddit.com/r/CryptoCurrency/"
    workInfoimage.src = "images/moonsbanner.png"
    workName.innerHTML = "Banner for r/cryptocurrency subreddit"
    workInfotext.innerHTML = "r/cryptocurrency is a forum to talk about everything related to cryptocurrency with 9 million members. On the 12th of november 2024 the mods held a banner design contest to advertise the cryptocurrency called \"MOON\", a cryptocurrency made by and for the subreddit. I won this contest and my banner was used for a couple of weeks. (this banner has been changed now)"
    setTimeout(workInfotoggle, 700);
}

function workInfo4() {
    workInfocontent.className = "workInfo";
    workToggle();
    workContent.className = "workContentAnimation";
    tryButton.style.display = "block"
    tryButton.innerHTML = "Try"
    workLink.href = "blackjack/blackjack.html"
    workInfoimage.src = "images/blackjack.png"
    workName.innerHTML = "Blackjack"
    workInfotext.innerHTML = "For this assignment I fully remade blackjack using HTML and Javascript (with a little bit of css). I've studied the workings of blackjack and fully programmed the dealer as a bot that knows exactly how to play like the dealer would in a casino."
    setTimeout(workInfotoggle, 700);
}

function workInfo5() {
    workInfocontent.className = "workInfo";
    workToggle();
    workContent.className = "workContentAnimation";
    tryButton.style.display = "block"
    tryButton.innerHTML = "View"
    workLink.href = "naruto/index.html"
    workInfoimage.src = "images/naruto.png"
    workName.innerHTML = "Naruto website"
    workInfotext.innerHTML = "For this assignment I made an interactive website containing the progression of the character Naruto throughout the show using HTML, CSS and javascript."
    setTimeout(workInfotoggle, 700);
}

function workInfo6() {
    workInfocontent.className = "workInfo";
    workToggle();
    workContent.className = "workContentAnimation";
    tryButton.style.display = "block";
    workLink.href = "https://gitlab.fdmci.hva.nl/blockchain/2023-2024/blockchain-amfi"
    tryButton.innerHTML = "Gitlab"
    workInfoimage.src = "images/screencapture-127-0-0-1-5050-2024-06-14-14_28_38.png"
    workName.innerHTML = "Clothing blockchain"
    workInfotext.innerHTML = "I choose the minor \"blockchain\" and made a blockchain system where clothing suppliers would be able to enter different aspects of their manufacturing processes like washing processes. All these processes would then be saved to the blockchain and everyone would be able to view them on a webpage by scanning a QR code. This was a group project commissioned by AMFI(study) on the University of Applied Sciences in Amsterdam"
    setTimeout(workInfotoggle, 700);
}

function workInfo7() {
    workInfocontent.className = "workInfo";
    workToggle();
    workContent.className = "workContentAnimation";
    tryButton.style.display = "block";
    workLink.href = "Dior/index.html"
    tryButton.innerHTML = "View"
    workInfoimage.src = "images/dior.png"
    workName.innerHTML = "Dior animation"
    workInfotext.innerHTML = "For this assignment I made an animation with the Dior logo that I thought would be fitting for the brand. "
    setTimeout(workInfotoggle, 700);
}


function activeCheckerWork() {
    if (backKnop.classList.contains("backKnopactive") && workContent.classList.contains("workActive")) {
        console.log("do nutin");
    }
    else if (backKnop.classList.contains("backKnopactive") && contactContent.classList.contains("contactActive")) {
        contactToggle();
        workKnop.removeEventListener("click", activeCheckerWork);
        contactKnop.removeEventListener("click", activeCheckerContact);
        contactContent.className = "contactAnimation";
        setTimeout(workToggle, 700);
    }
    else if (backKnop.classList.contains("backKnopactive") && workInfocontent.classList.contains("workinfoActive")) {
        workInfotoggle()
        workKnop.removeEventListener("click", activeCheckerWork);
        contactKnop.removeEventListener("click", activeCheckerContact);
        workInfocontent.className = "workinfoAnimation";
        setTimeout(workToggle, 700);
    }
    else {
        backKnop.classList.toggle("backKnopactive");
        contactKnop.removeEventListener("click", activeCheckerContact);
        homeGone1();
        setTimeout(workToggle, 700);
    }
}

function activeCheckerContact() {
    if (backKnop.classList.contains("backKnopactive") && workContent.classList.contains("workActive")) {
        workToggle();
        workKnop.removeEventListener("click", activeCheckerWork);
        contactKnop.removeEventListener("click", activeCheckerContact);
        setTimeout(contactToggle, 700);
        workContent.className = "workContentAnimation";
    }
    else if (backKnop.classList.contains("backKnopactive") && contactContent.classList.contains("contactActive")) {
        console.log("do nutin");
    }
    else if (backKnop.classList.contains("backKnopactive") && workInfocontent.classList.contains("workinfoActive")) {
        workInfotoggle()
        workKnop.removeEventListener("click", activeCheckerWork);
        contactKnop.removeEventListener("click", activeCheckerContact);
        workInfocontent.className = "workinfoAnimation";
        setTimeout(contactToggle, 700);
    }
    else {
        backKnop.classList.toggle("backKnopactive");
        workKnop.removeEventListener("click", activeCheckerWork);
        homeGone1();
        setTimeout(contactToggle, 700);
    }
}

function activeCheckerBack() {
    if (workContent.classList.contains("workActive")) {
        workToggle();
        body.style.overflowY = "hidden";
        workContent.className = "workContentAnimation";
        setTimeout(homeBack, 700);
        backKnop.classList.toggle("backKnopactive");
    }
    else if (contactContent.classList.contains("contactActive")) {
        contactToggle();
        contactContent.className = "contactAnimation";
        setTimeout(homeBack, 700);
        backKnop.classList.toggle("backKnopactive");
    }
    else if(workInfocontent.classList.contains("workinfoActive")) {
        workInfotoggle()
        workInfocontent.className = "workinfoAnimation";
        setTimeout(workToggle, 700);
    }
}

function contactToggle() {
    contactKnop.addEventListener("click", activeCheckerContact);
    workKnop.addEventListener("click", activeCheckerWork);
    contactContent.classList.toggle("contactActive");
}

function workInfotoggle() {
    workInfocontent.classList.toggle("workinfoActive");
}

function workToggle() {
    contactKnop.addEventListener("click", activeCheckerContact);
    workKnop.addEventListener("click", activeCheckerWork);
    workContent.classList.toggle("workActive")
    element2 = document.querySelector("body");
    element2.style.overflowY = "auto";
}

function activateWork() {;
    workContent.classList.toggle('workActive');
    body.style.overflowY = "auto";
    console.log("called");
}

function homeGone1() {
    element6 = document.getElementsByClassName("contact")[0];
    element2 = document.getElementsByClassName("me")[0];
    if (element2.classList.contains("meGone")  && element6.classList.contains("contactActive")) {
        element6.classList.toggle("contactactive")
    }
    else {
        element2.classList.toggle("meGone");
    element3 = document.getElementsByClassName("title")[0];
    element3.classList.toggle("titleGone");
    element4 = document.getElementsByClassName("name")[0];
    element4.classList.toggle("nameGone");
    }
    workButton = document.getElementById("workKnop");
}

function homeBack() {
    element2 = document.getElementsByClassName("me")[0];
    element2.classList.toggle("meGone");
    element3 = document.getElementsByClassName("title")[0];
    element3.classList.toggle("titleGone");
    element4 = document.getElementsByClassName("name")[0];
    element4.classList.toggle("nameGone");
    console.log("homeback called");
    workButton = document.getElementById("workKnop");
}

