
let randomIndex;
let animating = false;
let BeiJingHuanYingNis = [];
let imageCounter = 0;
let nameInputs = [];
let addMoreButton;

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
  text("click to randomize", 250, 500);
  // console.log(BeiJingHuanYingNis);
  for (let i = 1; i < 2; i++) {
  nameInputs.push(createInput());
  nameInputs[nameInputs.length - 1].parent("#inputFields");
}

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

function addAnotherInput() {
  for (let i = 1; i < 2; i++) {
    nameInputs.push(createInput());
    nameInputs[nameInputs.length - 1].parent("#inputFields");
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
