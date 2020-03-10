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
let couter = 0;

function setup() {
  createCanvas(600, 600);
  background(100);
  textSize(32);

  text("click to randomize",250,500);
  setTimeout(changeBackground,1000);
}

function draw() {

}

function changeBackground(){
  background(random(255), random(255), random(255));
  setTimeout(changeBackground,1000);
}



function mousePressed(){

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
