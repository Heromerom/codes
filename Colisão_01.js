var FormA = {
    // POSIÇÃO X 
    x:200,
    // POSIÇÃO Y
    y:200,
    // LARGURA
    width:20,
    // ALTURA
    height:20,
    // COR
    cor:'orange'
}

var FormB = {
    // POSIÇÃO X 
    x:150,
    // POSIÇÃO Y
    y:150,
    // LARGURA
    width:20,
    // ALTURA
    height:20,
    // COR
    cor:'red'
}

// SE COLISÃO ACONTECE
var ativar = false;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  // MOVIMENTAÇÃO
    if((keyIsDown(UP_ARROW))){FormA.y -= 5;}
    if((keyIsDown(DOWN_ARROW))){FormA.y += 5;}
    if((keyIsDown(LEFT_ARROW))){FormA.x -= 5;} 
    if((keyIsDown(RIGHT_ARROW))){FormA.x += 5;}
  
  // CHECA SE A COLISÃO EXISTE
  if(FormA.x > FormB.x - FormB.width &&
     FormA.x < FormB.x + FormB.width &&
     FormA.y > FormB.y - FormB.height &&
     FormA.y < FormB.y + FormB.height 
  ){
   // HÁ INTERSECÇÃO
    ativar = true;
    
  }else{  
  // NÃO HÁ INTERSECÇÃO
    ativar = false;
  }
  
// SE HÁ INTERSECÇÃO ENTRE AS FORMAS, ENTÃO
  if(ativar){

   FormA.cor = 'blue'; // Muda a cor da forma.
   alert("Colidiu!"); 
         
}else{
    FormA.cor = 'orange'; // Muda a cor da forma.       
  }
  
  // DESENHA O CENÁRIO
  background(220);

  // DESENHA OS RETÂNGULOS
  noStroke();
  fill(FormA.cor);
  rect(FormA.x,FormA.y,FormA.width,FormA.height);
  fill(FormB.cor);
  rect(FormB.x,FormB.y,FormB.width,FormB.height);

}
