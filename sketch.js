// the flower I like
let fuwa = [{
  name:"BeiBei",
  color: "blue"
},{
  name:"JingJing",
  color: "black"
},{
  name:"HuanHuan",
  color: "Red"
},{
  name:"YingYing",
  color: "orange"
},{
  name:"NiNi",
  color: "Green"
}];

let randomIndex;
let animating = false;
let BeiJingHuanYingNis = [];

function preload(){
  for(let i = 0; i <= 15; i++)
  {BeiJingHuanYingNis[i]=loadImage(`BeiJingHuanYingNi_${i}.Jpg`)
}
}

function setup() {
  createCanvas(600, 600);
  background(100);
  textSize(32);

  text("click to randomize",250,500);
  console.log(BeiJingHuanYingNis);
}

function draw() {
if (animating == true){
  image(BeiJingHuanYingNis[0],width/2,height/2);
}
}


function randomizer(){
  animating = false;

  if(fuwa[0]){
  background(random(200,255));
  randomIndex = int(random(fuwa.length));
  text(fuwa[randomIndex].name,250,500);
  fuwa.splice(randomIndex,1);
}
else {
  background(random(200,255));
  text("nothing left!",250,500);
}
}

function mousePressed(){
  animating = true;
setTimeout(randomizer,1000);
}
