var form = {
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

// MOUSE ESTÁ DENTRO DO CIRCULO
var ativar = false;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // DESENHA O CIRCULO

  noStroke();
  fill(form.cor);
  circle(form.x,form.y,form.width,form.height)
  
  // CONDIÇÃO PARA EXPANSÃO DO CIRCULO
  if(mouseX > form.x - form.width &&
     mouseX < form.x + form.width &&
     mouseY > form.y - form.width &&
     mouseY < form.y + form.width 
  ){
   // MOUSE ESTÁ DENTRO DO CIRCULO
    ativar = true;
    
  }else{  
  // MOUSE ESTÁ FORA DO CIRCULO
    ativar = false;
  }
  
// SE O MOUSE ESTIVER DENTRO DO CIRCULO, ENTÃO:
  if(ativar){

   form.width = 25; // Muda o tamanho da forma;
   cursor('pointer'); // Muda o cursor;

// SE O BOTÃO DO MOUSE FOR PRESSIONADO, ENTÃO:
   if(mouseIsPressed){

      // AÇÕES
      form.width = 15; // Muda o tamanho da forma;
  }
    
}else{

    form.width = 20 // Muda o tamanho da forma;
    cursor(); // Muda o cursor;
    
  }

}