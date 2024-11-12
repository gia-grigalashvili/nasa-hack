const nasa = document.querySelector(".nasa");
const moon = document.querySelector(".moon");
const sspace = document.querySelector(".sspace");

const blackblur1 = document.querySelector(".black-blur1");
const blackblur2 = document.querySelector(".black-blur2");
const blackblur3 = document.querySelector(".black-blur3");

function nasaActive(){
    nasa.style.display = "flex";
    moon.style.display = "none";
    sspace.style.display = "none";
 
    blackblur1.style.border = "2px solid rgb(0 114 206)";
    blackblur2.style.border = "0px solid rgb(0 114 206)";
    blackblur3.style.border = "0px solid rgb(0 114 206)";
}

function moonActive(){
    nasa.style.display = "none";
    moon.style.display = "flex";
    sspace.style.display = "none";

    blackblur1.style.border = "0px solid rgb(0 114 206)";
    blackblur2.style.border = "2px solid rgb(0 114 206)";
    blackblur3.style.border = "0px solid rgb(0 114 206)";
}

function sspaceActive(){
    nasa.style.display = "none";
    moon.style.display = "none";
    sspace.style.display = "flex";

    blackblur1.style.border = "0px solid rgb(0 114 206)";
    blackblur2.style.border = "0px solid rgb(0 114 206)";
    blackblur3.style.border = "2px solid rgb(0 114 206)";
}