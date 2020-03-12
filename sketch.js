
let randomIndex;
let animating = false;
let BeiJingHuanYingNis = [];
let imageCounter = 0;

function preload() {
  for (let i = 0; i <= 4; i++) {
    BeiJingHuanYingNis[i] = loadImage(`BeiJingHuanYingNi_${i}.png`)
  }
}

function setup() {
  createCanvas(800, 800);
  background(100);
  textSize(32);
  frameRate(8);
  text("click to randomize", 0, 500);
  // console.log(BeiJingHuanYingNis);
}

function draw() {
  if (animating == true) {
    clear();
    image(BeiJingHuanYingNis[imageCounter], 0, 0);

    if (imageCounter < BeiJingHuanYingNis.length - 1) {
      imageCounter++;
    } else {
      imageCounter = 0;
    }
  }
}


function randomizer() {
  animating = false;

  if (BeiJingHuanYingNis[0]) {
    clear();
    image(random(BeiJingHuanYingNis), 0, 0);
  } else {
    background(random(200, 255));
    text("nothing left!", 500, 100);
  }
}

function mousePressed() {
  animating = true;
  setTimeout(randomizer, 1000);
}
