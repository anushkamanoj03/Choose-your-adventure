//Press a button to choose your path
//See the README file for more information

/* VARIABLES */
//Press a button to choose your path
//See the README file for more information

/* VARIABLES */
let enterButton;
let a1Button;
let a2Button;
let b1Button;
let b2Button;
let backgroundImg;
let DoorImg;
let backgroundMusic;
let labImg;
let cellarImg;
let escapeImg;
let jailImg;
let screen = 0;
/* PRELOAD LOADS FILES */
function preload(){
  backgroundImg = loadImage("assets/horror-scene-with-eerie-hospital.jpg");
  doorImg = loadImage("assets/Door.jpeg");
  labImg = loadImage("assets/lab.jpg");
  escapeImg = loadImage("assets/Screenshot 2024-06-28 155848.png");
  backgroundMusic = loadSound("assets/Background Music.mp3");
  cellarImg = loadImage("assets/Screenshot 2024-06-28 at 4.57.07 PM.png");
  jailImg = loadImage("assets/jail.webp");
}

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(525, 525);
  background(224,224,224);
  backgroundImg.resize(525,525);
  doorImg.resize(525,525);
  escapeImg.resize(525,525);
  
  textAlign(CENTER);
  textSize(15);
  noStroke();
  if (backgroundMusic.isLoaded()) {
    backgroundMusic.loop(); // Loop the music
  }
  
  

  // Set up the home screen
  image(backgroundImg, 0, 0, 525, 525);
  fill(255,255,255);
  textSize(20);
  textFont('OGYGIA');
  text("You wake up and find yourself in a dark and \nisolated room. You have been trapped by a\nmad scientist, who wishes to conduct \nexperiments on you. But don't lose hope yet..",
    width / 2 +60,
    height / 2 - 220
  );
  

  // Create buttons for all screens
  enterButton = new Sprite(width/2 +30,height/2+200);
  a1Button = new Sprite(-200,-200);
  a2Button = new Sprite(-50,-50);
  b1Button = new Sprite(-100,-100);
  b2Button = new Sprite(-150,-150);


}

/* DRAW LOOP REPEATS */
function draw() {
  // Display enter button
  enterButton.w =95;
  enterButton.h = 55;
  enterButton.collider = "k";
  enterButton.color = "#D32F2F";
  enterButton.text = "Escape!";
  enterButton.textColor = "white";



  // Check enter button
if (enterButton.mouse.presses()) {
  showScreen1();
  screen = 1;
  }
  if (screen==1){
    if (a1Button.mouse.presses()){
      print("Display screen 2");
      showScreen2();
      screen=2;

    } else if (a2Button.mouse.presses()){
      print("Display screen 5");
      showScreen5();
      screen=5;
    }
  } else if(screen==2) {
    if (b1Button.mouse.presses()){
      showScreen3();
      screen=3;
    }  else if (b2Button.mouse.presses()){
      showScreen4();
      screen=4;
    }
  }
  print(screen);
}

function showScreen1(){
  background(224, 224, 224); // Give a neutral background color first
  image(doorImg, 0, 0, 525, 525);
 
   text("You walk down a corridor \nand come across this door..", width / 2-5, height / 2 - 175);
enterButton.pos = { x: -100, y: -100 }; //move enter button off screen
    // Add A1 button
   a1Button.pos = {x: width/2-135, y: height/2+210};
   a1Button.w = 150;
   a1Button.h = 60;
   a1Button.collider = "k";
   a1Button.color = "#3949AB";
   a1Button.text = "Enter the room";
   a1Button.textColor = "white";
  // Add A2 button
   a2Button.pos = {x: width/2+135, y: height/2+210};
   a2Button.w = 150;
   a2Button.h = 60;
   a2Button.collider = "k";
   a2Button.color = "#3949AB";
   a2Button.text = "Turn back \nwhile you can";
   a2Button.textColor = "white";
}
function showScreen2(){
  image(labImg, 0, 0, 525, 525);
  
      text("You find yourself in a lab. You see a scalpel and keep \nit in order to defend yourself. Suddenly, you hear a \nnoise and quickly hide in a cabinet, hardly daring to breathe... \n\nYou peer throught the cabinet, and to your horror, you \nsee the scientist                entering the lab..", width / 2, height / 2 - 235);
      a1Button.pos = { x: -200, y: -200 };
      a2Button.pos = { x: -50, y: -50 };
      b1Button.pos = {x: width/2-130, y: height/2+210};
      b1Button.w = 220;
      b1Button.h = 70;
      b1Button.collider = "k";
      b1Button.color = "#c45846";
      b1Button.text = "Wait for scientist to leave \nand then try to escape";
      b1Button.textColor = "white";
  

      b2Button.pos = {x: width/2+130, y: height/2+210};
      b2Button.w = 220;
      b2Button.h = 70;
      b2Button.collider = "k";
      b2Button.color="#c45846";
      b2Button.text = "Confront scientist and use \nscalpel to defend yourself";
      b2Button.textColor = "white";
}
function showScreen3(){
  image(escapeImg, 0, 0, 525, 525);
  
  text("After the scientist leaves the room, you cautiously scan \nthe room for hints. You uncover a map of the lab layout, \nhidden in a drawer which shows several potential escape \nroutes. With the help of the map you are able to escape!", width / 2, height / 2-235);
  text("This was only possible because you never lost hope \nand remained determined.. Congratulations!", width / 2, height / 2+180);
  b1Button.pos = { x: -100, y: -100 };
  b2Button.pos = { x: -150, y: -150 };
}
function showScreen4(){
  image(jailImg, 0, 0, 525, 525)
  text("You boldy confront the Scientist and overpower him, with \nthe help of the scalpel. You discover notes about the \nexperiments the scientist has conducted on other humans, \nillegally. You are able to contact the police, who arrive \nquickly and arrest the scientist. You escape unharmed.. \nCongratulations!", width / 2, height / 2 - 200);
  b1Button.pos = { x: -100, y: -100 };
  b2Button.pos = { x: -150, y: -150 };
}
function showScreen5(){
  image(cellarImg, 0, 0, 525, 525)
  text("Oops..That was not the best choice to make.. \nYou turn around and see the scientist behind you. \n\nHe is furious and traps you in a cellar, and this \ntime, with handcuffs.. Better luck next time!", width / 2, height / 2 + 75);
   a1Button.pos = { x: -200, y: -200 };
   a2Button.pos = { x: -50, y: -50 };
}




