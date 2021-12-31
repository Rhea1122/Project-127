song1 = "";
song2 = "";

function preload()
{
   song1 = loadSound("HP(R).mp3");
   song2 = loadSound("TBU.mp3");
}
function setup()
{
   canvas = Canvas(800,600);
   canvas.center();
   video = createCapture(VIDEO);
   video.hide();
}
function draw()
{
    image(video,0,0,800,600);
}