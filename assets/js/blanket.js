let c,row,cols;
rows = 15;
cols = 15;
let loc = 100;
//let offset = 30;
let grid = [];

class Cell {
    constructor(x0, y0,r,angle) {
      this.r = r;
      this.angle = angle;
      this.x0 = x0;
      this.y0 = y0;
      
    }
  
    update() {
      this.x = this.r * cos(this.angle);
      this.y = this.r * sin(this.angle);
      this.angle += 0.01;
    }
  
    display() {
      // ellipse(this.x0,this.y0,this.r*2)
      // line(this.x0, this.y0, this.x + this.x0, this.y + this.y0);
      fill(0);
      ellipse(this.x0+this.x, this.y+this.y0,10);
    }
  }
  




















function setup() {

  createCanvas(600,600);

  //c = new Cell();
  //Create grid

  let rowSize = height/rows;
  let colSize = width/cols;

  for(let i=0;i<cols;i++){
    grid[i] = [];
    for(let j=0;j<rows;j++){
      grid[i][j] = new Cell(i*colSize+colSize/2,j*rowSize+rowSize/2,rowSize/2,i*loc+j*loc);
    }
  }
  
}

function draw() {

  background(230, 126, 34);
  
  for(let i=0;i<cols;i++){
    for(let j=0;j<rows;j++){
      grid[i][j].update();
      grid[i][j].display();
    }
  }
}

console.log("Hi its working")