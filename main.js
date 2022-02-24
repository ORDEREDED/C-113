function preload(){

}

function setup(){
canvas=createCanvas(570,510);
canvas.position(150,150);
video=createCapture(VIDEO);
video.hide();
tint_color='';
}
function draw(){



image(video ,0,0,570,510);
tint(tint_color);
fill(255,0,0);
stroke(255,0,0);
circle(50,50,80);
circle(50,430,80);
circle(480,50,80);
circle(480,430,80);
fill(0,255,0);
stroke(0,255,0);
rect(90,40,350,20);
rect(90,429,350,20);
rect(40,90,20,300);
rect(480,90,20,300);
}
function take_snapshot(){
save('childlabour.png');
}
function look_ugly(){
tint_color=document.getElementById("filtercolor").value; 
}