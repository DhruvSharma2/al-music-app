song = "";
song = "";
function preload() {
    song = loadSound(music.mp3);
    song = loadSound(music2.mp3);
}
leftwristX = 0;
leftwristY = 0;
rightwristX = 0;
rightwristY = 0;
function setup() {
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    possNet = ml5.possNet(video,modalLoaded);
    possNet.on('poss',gotPoses);
}
function modalLoaded()
{
    console.log("possNet is initialized");
}
function draw() {
    image(video , 0 , 0 , 600 , 500);
}
function gotPoses(results) 
{
    if (results.length > 0)
    {
        console.log(results);

        leftwristX = results[0].pose.leftWrist.x;
        leftwristY = results[0].pose.leftWrist.y;
        console.log("leftwristX= "+leftwristX+ "leftwristy= "+leftwristY);

        rightwristX = results[0].pose.rightWrist.x;
        rightwristY = results[0].pose.rightWrist.y;
        console.log("rightwristX= "+rightwristX+"rightwristY= "+rightwristY);
    }
}