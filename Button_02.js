var caixa = {
  x:200,
  y:200,
  width:50,
  height:20,
  cor:'gray',

  ax:183,
  ay:200,
  awidth:10,
  aheight:15,
  acor:'white',

  check:false
}

var naArea = false;

function setup() {
  createCanvas(400, 400);
}

function draw() {

  // MOUSE DENTRO DA ÁREA DA FORMA
  if(mouseX > caixa.x - (caixa.width/2) &&
     mouseX < caixa.x + (caixa.width/2) &&
     mouseY > caixa.y - (caixa.height/2) &&
     mouseY < caixa.y + (caixa.height/2)){

       cursor('pointer');
       naArea = true;

     } else {

       cursor();
       naArea = false;
     }

  // DESENHAR FORMAS
  background(50);

  noStroke();
  fill(caixa.cor);
  rect(caixa.x - (caixa.width/2),
       caixa.y - (caixa.height/2),
       caixa.width,caixa.height);

  fill(caixa.acor);
  rect(caixa.ax - (caixa.awidth/2),
       caixa.ay - (caixa.aheight/2),
       caixa.awidth,caixa.aheight);


}

function mouseClicked() {
  if (naArea) {
    if(caixa.check){
           caixa.cor = 'gray'
           caixa.check = false;
           caixa.ax -= 35;
         } else {
           caixa.cor = 'blue'
           caixa.check = true;
           caixa.ax += 35;
         }
  }
}
