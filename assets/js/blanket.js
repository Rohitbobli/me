let c,row,cols;
rows = 15;
cols = 15;
let loc = 100;
//let offset = 30;
let grid = [];
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