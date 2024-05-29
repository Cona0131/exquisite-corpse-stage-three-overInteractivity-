
let imgs = [];
let horse1, horse2, horse3, horse4;
let gif_loadImg, checkbox;
let showText = true;
let textboxes = [];
let checkboxPos;

function preload(){
  horse1 = loadImage("horses/mix3.png");
  horse2 = loadImage("horses/horse2.png");
  horse3 = loadImage("horses/mix2.png");
  horse4 = loadImage("horses/horse4.png");
  gif_loadImg = loadImage("buildings/mix1.png");
}

function setup() {
  imgs.push(horse1);
  imgs.push(horse2);
  imgs.push(horse3);
  imgs.push(horse4);

  horse4.resize(600,0);
  horse1.resize(500,0);
  horse2.resize(500,0);
  horse3.resize(500,0);

  createCanvas(800, 600);
  frameRate(5);

  checkbox = createCheckbox('', false);
  checkbox.position(width/2 - 10, height/2 - 10);
  checkbox.style('transform', 'scale(3)'); // Make checkbox medium size
  
  checkboxPos = {
    x: checkbox.position().x,
    y: checkbox.position().y,
    w: checkbox.width,
    h: checkbox.height
  };

  // Set a timer to remove text after 5 seconds
  setTimeout(() => {
    showText = false;
  }, 5000);

  // Add new text boxes
  for (let i = 0; i < 200; i++) {
    let x = random(width);
    let y = random(height);
    textboxes.push({x: x, y: y});
  }
}

function draw(){
  background(gif_loadImg);
 
  if (checkbox.checked()) {
    let r = random(imgs);
    image(r, 100, 100);
    let s = second();
    textSize(32);
    fill(random(0,255), random(0,255), random(0,255));
    text(s, 316, 60);
  }
  
  if (showText) { // Display text only if showText is true
    fill(230,230,20);
    textSize(50);
    for (let i = 0; i < textboxes.length; i++) {
      text("Beach, Santa, Lips, Wave, Flowers, Plants, Ocean, Bird, Door.", textboxes[i].x, textboxes[i].y);
    }
  }

  // Check if mouse hovers over the checkbox
  if (
    mouseX > checkboxPos.x &&
    mouseX < checkboxPos.x + checkboxPos.w &&
    mouseY > checkboxPos.y &&
    mouseY < checkboxPos.y + checkboxPos.h
  ) {
    // Move the checkbox away
    checkbox.position(random(20, width - 50), random(20, height - 50));
  }
}

