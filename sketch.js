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

}

function draw() {

}

function mousePressed(){
  background(random(255));
  randomIndex = int(random(flowers.length));
  text(flowers[randomIndex].name,30 0,500);
  flowers.splice(randomIndex,1);
}
