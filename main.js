screen_width = 0;
screen_height = 0;

speak_data = 0;
to_number = 0;

x = 0;
y = 0;

draw_apple = "apple.png";

apple = 0;

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();



function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

  console.log(event);

  content = event.results[0][0].transcript;

  document.getElementById("status").innerHTML = "The Speech is Recognized: " +content;

  to_number = Number(content);

  console.log(to_number);

  if(Number.isInteger(to_number)){

    document.getElementById("status").innerHTML = "Start Drawing Your Apple";

    draw_apple = "set";

  }
   else{

    document.getElementById("status").innerHTML = "And the speech has not been recognized.";

   }
  
  

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}



function setup() {

    screen_width = window.innerWidth;
   
    screen_height = window.innerHeight;

    canvas = createCanvas(screen_width, screen_height, -150);

    canvas.position(0, 150);
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";

    speak_data = to_number + "Apples Drawn";
    speak();

    for(var i = 1; i <= to_number; i++){

          x = Math.floor(Math.floor()* 700);
          y = Math.floor(Math.floor()* 400);

        image(x, y, 50, 50);

    }

  }
}

function speak(){
  
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}

function preload(){

  draw_apple = loadImage("apple.png");
}
