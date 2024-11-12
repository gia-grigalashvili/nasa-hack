const audioContext = new (window.AudioContext || window.webkitAudioContext)(); // სიკაშკაშის მიხედვით ხმა
let oscillator = null;

function playSound(brightness) {
    if (oscillator) {
        oscillator.stop();
    }
    const pitch = 200 + (brightness / 255) * 800;
    oscillator = audioContext.createOscillator();
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(pitch, audioContext.currentTime);
    oscillator.connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.1); 
}

function handlePhotoUpload(event) {
    const photoInput = event.target;
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const image = new Image();

    image.onload = function() {
        canvas.width = image.width;
        canvas.height = image.height;
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        let brightness = 0;
        for (let i = 0; i < imageData.data.length; i += 4) {
            const r = imageData.data[i];
            const g = imageData.data[i + 1];
            const b = imageData.data[i + 2];
            brightness += 0.299 * r + 0.587 * g + 0.114 * b;
        }
        brightness /= (imageData.data.length / 4);
        console.log(brightness);
        playSound(brightness);
    };
    image.src = URL.createObjectURL(photoInput.files[0]);
}




const textvalue = document.querySelector(".color-value");   // აქედან იწყება ქოლორ ფიქერის კოდი
const pickervalue = document.getElementById("colorpicker");
const pickvalue = document.querySelector(".value-pickup");  
const inputdiv = document.querySelector(".input-color-div");

inputdiv.style.backgroundColor = pickervalue.value;



function valueChecker(){
    inputdiv.style.backgroundColor = pickervalue.value;

    
    setTimeout(valueChecker, 1000);
}
valueChecker();


function activeClick(){
    ValueGet();
}


function redClick(){
    pickervalue.value ="#ff0000";
    ValueGet();
}
function greenClick(){
    pickervalue.value ="#00ff00";
    ValueGet();
}
function blackClick(){
    pickervalue.value ="#000";
    ValueGet();
}
function yellowClick(){
    pickervalue.value ="#ffff00";
    ValueGet();
}
function cyanClick(){
    pickervalue.value ="#00ffff";
    ValueGet();
}
function grayClick(){
    pickervalue.value ="#808080";
    ValueGet();
}

const componentToHex = (c) => {
    const hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  
  const rgbToHex = (r, g, b) => {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }
  

let ColorCode;
let CodeList;
let LastColor;

console.log(ColorCode);
document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("mousemove", function (event) {
        const element = document.elementFromPoint(event.clientX, event.clientY);
        if (element) {
            const color = getComputedStyle(element).backgroundColor;

            const match = color.match(/\d+/g);
            const r = match[0];
            const g = match[1];
            const b = match[2];

            const answer = rgbToHex(r, g, b);

            ColorCode = answer;

            CodeList = ColorCode;
        }
    });
});



function ValueGet() {
    pickvalue.innerHTML= CodeList;
    console.log(pickervalue.value);

    const colorHex = CodeList;

function calculateBrightness(color) {
    const r = color >> 16 & 255;
    const g = color >> 8 & 255;
    const b = color & 255;

    const brightness = 0.299 * r + 0.587 * g + 0.114 * b;
    return Math.round(brightness);
}
  
const colorInt = parseInt(colorHex.slice(1), 16);
const brightness = calculateBrightness(colorInt);
console.log("Brightness:", brightness);

playSound(brightness);
console.log(ColorCode);

}


let lastColor = null;

function printHello(){
    const newColor = ColorCode;
    console.log("New Color:", newColor);

    

    if (newColor !== lastColor) {

        lastColor = newColor;
        
        
       ValueGet();
       
        
    }
    
    setTimeout(printHello, 100);
}





