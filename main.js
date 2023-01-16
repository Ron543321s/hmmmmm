var nose_x=0;
var nose_y=0;
var difference=0;
var right_wrist_x=0;
var left_wrist_x=0;

function setup() {
    video=createCapture(VIDEO);
    video.size(550,500);
    
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on("pose",gotPoses);
}
function modelLoaded(){
  console.log("POSE NET IS LOADED!");
}

function gotPoses(results){
    if(results.length>0){
        console.log (results);
        nose_x=results[0].pose.nose.x;
        nose_y=results[0].pose.nose.y;
        console.log ("nose_x="+nose_x+"nosey="+nose_y);

        left_wrist_x=results[0].pose.leftWrist.x;
        right_wrist_x=results[0].pose.rightWrist.x;
        difference=floor(left_wrist_x-right_wrist_x);
        console.log ("left wrist x="+left_wrist_x+"right wrist x="+right_wrist_x+"difference="+difference);
    }

}

function draw(){
    background("#f87a58")
    document.getElementById("square_side").innerHTML="width and height of square will be"+difference;
    fill("#fb700e");
    stroke("#006699");
    square(nose_x,nose_y,difference);

}