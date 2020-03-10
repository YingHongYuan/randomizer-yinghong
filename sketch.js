// the flower I like
let flowers = [{
  name:"sunflower",
  color: "yellow"
},{
  name:"rose",
  color: "red"
},{
  name:"lily",
  color: "white"
},{
  name:"tulip",
  color: "orange"
},{
  name:"babysbreath",
  color: "purple"
}];

let randomIndex;

function setup() {
  createCanvas(600, 600);
  background(100);
  textSize(32);

  text("click to randomize",250,500);
}

function draw() {

}

function randomizer(){
  if(flowers[0]){
  background(random(200,255));
  randomIndex = int(random(flowers.length));
  text(flowers[randomIndex].name,250,500);
  flowers.splice(randomIndex,1);
}
else {
  background(random(200,255));
  text("nothing left!",250,500);
}
}

function mousePressed(){
setTimeout(randomizer,1000);

}
