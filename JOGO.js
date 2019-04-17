var jogador = {
  x:200,     // Posição X inicial da nave.
  y:200,     // Posição Y inicial da nave
  HP:100,    // Pontos de vida do personagem.
  score:0,   // Pontuação do jogador.
  tiro:false // Checa se o jogador está atirando ou não.
}
var area = {
  // ÁREA DO BOTÃO START
  x:165,
  y:182,
  width:70,
  height:20,
  on:false
  
}

var obstaculo = {
 x:200
}

var bg = 50;

var tela = 0;

var texto = {
  colors:200,
  size:20
}



function setup() {
  createCanvas(400, 400);
  fullscreen();
}

function draw() {
  
  
/* PRIMEIRA TELA
Nesta tela, o jogador terá que clicar no botão START para
o jogo iniciar.
*/ 

  if(tela == 0){
    
  // Checa posição do mouse em relação ao texto.
    if(mouseX > 166 &&
       mouseX < 234 &&
       mouseY > 181 &&
       mouseY < 202){
    
        area.on = true;
      
    }else{
        area.on = false;
    }
    
    
  if(area.on){
      texto.colors = 255;
      //texto.size = 25;
      cursor('pointer');
  }else{
      texto.colors = 200;
      //texto.size = 20;
      cursor();
  }
    
  background(bg);
  
    
    
  fill(texto.colors);
  textSize(texto.size);
  textAlign(CENTER);
  text("START",200,200);
    
    
    
  }
  
/* SEGUNDA TELA
Nesta tela, o jogo irá começar.
*/
  
  if(tela == 1){
  // MOVIMENTAÇÃO
    if((keyIsDown(UP_ARROW)))    {jogador.y -= 5}
    if((keyIsDown(DOWN_ARROW)))  {jogador.y += 5}
    if((keyIsDown(LEFT_ARROW)))  {jogador.x -= 5}  
    if((keyIsDown(RIGHT_ARROW))) {jogador.x += 5}  
  
  // MOVIMENTAR OBSTÁCULO
    obstaculo.x += 3;
    
    if(obstaculo.x > 430){
     obstaculo.x = -60 
    }
  // DESENHAR FORMAS
    background(bg);
    fill(45);
    noStroke();
    rect(0,370,400,30);
    
    fill(150);
    textSize(10);
    fill(255,jogador.HP);
    text("HP: "+jogador.HP,30,390);
    text("SCORE:"+jogador.score,90,390);

  // JOGADOR
    fill('white');
    ellipse(jogador.x,jogador.y,10,30);
    ellipse(jogador.x+20,jogador.y,10,30);
    circle(jogador.x+10,jogador.y,10);
    
  // OBSTÁCULO
    fill('red');
    rect(obstaculo.x,100,30,30)
    
    
    
  }
  
  
}

function mouseClicked(){
  
  if(area.on == true){
    texto.size = 10;
    bg = 30
    tela = 1;
    cursor();
  }
}

