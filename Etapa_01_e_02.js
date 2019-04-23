/* 
    Equipe: 
        MARCEL PINHEIRO DE CARVALHO - Subturma C (Líder) 
        Etapas: 1 e 2
*/


var jogador = {
  x:200,     // Posição X inicial da nave.
  y:200,     // Posição Y inicial da nave
  
}

var obstaculo = {
 x:200,
 y:100,
 width:0,
 height:0
}

var bg = 50; // Cor do background.



function setup() {
  createCanvas(400, 400);
   
}

function draw() {

    
  // MOVIMENTAÇÃO
    if((keyIsDown(UP_ARROW)))    {jogador.y -= 5} // Checa se a seta ↑ foi pressionada.
    if((keyIsDown(DOWN_ARROW)))  {jogador.y += 5} // Checa se a seta ↓ foi pressionada.
    if((keyIsDown(LEFT_ARROW)))  {jogador.x -= 5} // Checa se a seta ← foi pressionada. 
    if((keyIsDown(RIGHT_ARROW))) {jogador.x += 5} // Checa se a seta → foi pressionada.
      
  // UI
    background(bg);
    noStroke();
      
       
  // JOGADOR
    fill('white');
    ellipse(jogador.x,jogador.y,10,30);
    ellipse(jogador.x+20,jogador.y,10,30);
    circle(jogador.x+10,jogador.y,10);
    
  // OBSTÁCULO
    fill('red');
    rect(obstaculo.x,obstaculo.y,30,30)
    fill('white')
    textSize(9);
    text('Enemy',obstaculo.x,obstaculo.y + 18);
 
  }


