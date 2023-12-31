var speechrecognition = window.webkitSpeechRecognition;
var Recognition = new speechrecognition;
var X;
var Y;
var radius;
var width;
var height;
var draw_circle = "";
var draw_rect = "";
var INPUT;

function preload(){
    car = loadImage("https://i.postimg.cc/XJSQ5prT/download-2-removebg-preview.png");
    computer = loadImage("https://i.postimg.cc/KYwpG07r/s-l1600-removebg-preview.png");
}

function setup(){
 canvas = createCanvas(900,600);
}

function lear(){
    background("pink");
}

function start(){
    document.getElementById("Status").innerHTML = "Say Car if you want a Car and Computer for a Computer";
    INPUT = document.getElementById("Inputs").value;
    Recognition.start();
}

Recognition.onresult = function(event){
     console.log(event);

    var content = event.results[0][0].transcript;

    document.getElementById("Status").innerHTML = "The speech you recognized is " + content;

    if(content == "car"){
            document.getElementById("Status").innerHTML = "Your Car is done";
             draw_circle = "Car";
      }

    if(content == "computer"){
            document.getElementById("Status").innerHTML = "Your Computer is done";
             draw_rect = "Computer";
        }

}

function draw(){
    strokeWeight("5");
    stroke("black");
    
    if(draw_circle == "Car"){
        for(var M = 1; M <= INPUT; M++ ){
        X = Math.floor(Math.random() * 900);
        Y = Math.floor(Math.random() * 600);
        width = Math.floor(Math.random() * 100);
        height = Math.floor(Math.random() * 100);
        
        image(car,X,Y,width,height);
        draw_circle = "";
}
}
    
    if(draw_rect == "Computer"){
        for(var M = 1; M <= INPUT; M++){
            width = Math.floor(Math.random() * 100);
            height = Math.floor(Math.random() * 100);
            X = Math.floor(Math.random() * 900);
            Y = Math.floor(Math.random() * 600);
            image(computer,X,Y,width,height);
            draw_rect = "";
       }
}
    
    if(mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY);
}
}