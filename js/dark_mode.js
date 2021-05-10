let darkMode = localStorage.getItem("dark-mode");


// Getting all the classes and elements
let body = document.body;
let category = document.querySelectorAll(".category1");
let blog = document.querySelectorAll(".latest-news-wrap");
let event_ = document.querySelectorAll(".latest-event-wrap");
let textWhite = document.querySelectorAll(".textWhite");
let box = document.querySelector(".box");
let social = document.querySelectorAll(".social");

console.log(body);


// Setting all the dark mode styling
function setDarkMode()
{
    for(let i=0 ; i< category.length; i++){
        category[i].style.background = "mintcream";
    }
    body.style.background = "#0d1117";
    
    for(let i=0 ; i< blog.length; i++){
        blog[i].style.background = "#0d1117";
        blog[i].style.boxShadow ="0px 0px 5px 1px rgb(254 254 254 / 80%)";
    }
    
    for(let i=0 ; i< event_.length; i++){
        event_[i].style.background = "#0d1117";
        event_[i].style.boxShadow ="0px 0px 5px 1px rgb(254 254 254 / 80%)";
    }

    box.style.background="black";

    for(let i=0 ; i< textWhite.length; i++){
        textWhite[i].classList.add("whiteColorText");
    }

    for(let i=0 ; i< social.length; i++){
        social[i].classList.add("links");
    }
    
    
}

// 0px 3px 10px rgb(0 0 0 / 10%)

// Removing all the dark mode styling

function removeDarkMode()
{
    for(let i=0 ; i< category.length; i++){
        category[i].style.removeProperty("background");
    }
    body.style.removeProperty("background");
    
    for(let i=0 ; i< blog.length; i++){
        blog[i].style.removeProperty("background");
        blog[i].style.boxShadow ="0px 3px 10px rgb(0 0 0 / 10%)";
    }
    
    for(let i=0 ; i< event_.length; i++){
        event_[i].style.removeProperty("background");
        event_[i].style.boxShadow =" 0px 3px 10px rgb(0 0 0 / 10%)";
    }

    box.style.background="#fde9ff";

    for(let i=0 ; i< textWhite.length; i++){
        textWhite[i].classList.remove("whiteColorText");
    }

    for(let i=0 ; i< social.length; i++){
        social[i].classList.remove("links");
    }

    
}

// 







const colorSwitch = document.querySelector('#darkModeToggle');


if(darkMode === "enabled"){
    darkModeOn();
    document.querySelector("#darkModeToggle").checked = true;
}

colorSwitch.addEventListener("click",checkMode);

function checkMode(){
    darkMode = localStorage.getItem("dark-mode");    
    if(darkMode !== "enabled")
    {
        trans();
        console.log("dark on")
        darkModeOn();
    }
    else
    {
        trans();
        console.log("dark off")
        darkModeOff();
    }
}


function darkModeOn(){
    setDarkMode();
    localStorage.setItem("dark-mode","enabled");
}
function darkModeOff(){
    removeDarkMode();
    localStorage.setItem("dark-mode", null);
}

let trans = () => {
    document.documentElement.classList.add("transition");
    window.setTimeout(() => {
        document.documentElement.classList.remove("transition");
    }, 1000);
}