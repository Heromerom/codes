/* 
    Equipe: 
        MARCEL PINHEIRO DE CARVALHO - Subturma C (Líder) 
        Etapas: 1, 2, 3, 4 e 5.
*/


var jogador = {
  x:200,     // Posição X inicial da nave.
  y:200,     // Posição Y inicial da nave
  HP:100,    // Pontos de vida do personagem.
  score:0,   // Pontuação do jogador.  
  high:0     // Pontuação mais alta.
}

var tiro = {
  x:0,
  y:0,
  width:5,
  height:9,
  on:false // Checa se o jogador está atirando ou não.
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
 x:200,
 y:100,
 width:30,
 height:30
}

var bg = 50; // Cor do background.

var tela = 0;

var texto = {
  colors:200,
  size:20
}



function setup() {
  createCanvas(400, 400);
  fullscreen();
  frameRate(30);
  tiro.x = jogador.x
  tiro.y = jogador.y
  
}

function draw() {
  
  
/* PRIMEIRA TELA
Nesta tela, o jogador terá que clicar no botão START para
o jogo iniciar.
O QUE FALTA FAZER?
  - Botão de START com melhor interação;
 
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

  textSize(10);
  fill(255);
  text("HIGHSCORE: "+jogador.high,200,350);
    
  }
  
/* SEGUNDA TELA
Nesta tela, o jogo irá começar.
O QUE FALTA FAZER?
  COLISÃO:
    - Detectar colisão entre a nave do jogador e os objetos do cenário;
    - Impedir a nave de se movimentar por cima da UI e além do área do Canvas;
 
*/
  
  if(tela == 1){
    
  // MOVIMENTAÇÃO
    if((keyIsDown(UP_ARROW)))    {jogador.y -= 5} // Checa se a seta ↑ foi pressionada.
    if((keyIsDown(DOWN_ARROW)))  {jogador.y += 5} // Checa se a seta ↓ foi pressionada.
    if((keyIsDown(LEFT_ARROW)))  {jogador.x -= 5} // Checa se a seta ← foi pressionada. 
    if((keyIsDown(RIGHT_ARROW))) {jogador.x += 5} // Checa se a seta → foi pressionada.
  
  
  // MOVIMENTAR OBSTÁCULO
    obstaculo.x += 0;
    
    if (obstaculo.x > 430){
     obstaculo.x = -60 // Se o obstáculo sair da tela, ele retorna pelo outro lado.
    }
    
  // DISPARO  
    if((keyIsDown(CONTROL))){
      tiro.on = true;
    }
    
    if(tiro.on){
      tiro.y -= 15
    }else{
      tiro.x = jogador.x
      tiro.y = jogador.y 
    }
    
    if(tiro.y < 0){
      tiro.on = false;
    }
    
    // COLISÃO DO TIRO COM O OBSTÁCULO
  if(tiro.on){
    if(tiro.x + tiro.width  >= obstaculo.x &&
       tiro.x + tiro.width  <= obstaculo.x + obstaculo.width &&
       tiro.y + tiro.height >= obstaculo.y &&
       tiro.y + tiro.height <= obstaculo.y + obstaculo.height){
      
        tiro.on = false;
        tiro.x = jogador.x;
        tiro.y = jogador.y;
        jogador.score += 5;
    }
  }
    
    
    // COLISÃO DO JOGADOR COM O OBSTÁCULO (precisa ser ajeitado)
    if(jogador.x + 15 >= obstaculo.x &&
       jogador.x + 15  <= obstaculo.x + obstaculo.width &&
       jogador.y + 15  >= obstaculo.y &&
       jogador.y + 15 <= obstaculo.y + obstaculo.height){
      
        
        jogador.HP -= 5;
    }
    
    
    
    // TELA GAME OVER
    if(jogador.HP <= 0){
      
      tela = 2
      jogador.HP = 100;
      jogador.x = 200;
      jogador.y = 200;
      
      // HIGHSCORE
      if(jogador.score > jogador.high){
        jogador.high = jogador.score;
        jogador.score = 0;
      }else{
        jogador.score = 0;
      }
    
    }
    
  // UI
    background(bg);
    fill(45);
    noStroke();
    rect(0,370,400,30);
    
    // TEXTOS NA TELA
    fill(190);
    textSize(10);
    
    fill(200);
    text("HP: ",30,390);
    fill(0,200,200);
    text(jogador.HP,48,390);
    
    fill(200);
    text("SCORE: ",90,390);
    fill(0,200,200);
    text(jogador.score,125,390);
    
    

  // TIRO
    fill('red');
    ellipse(tiro.x + 10,tiro.y,tiro.width,tiro.height);  
    
  // JOGADOR
    fill('white');
    ellipse(jogador.x,jogador.y,10,30);
    ellipse(jogador.x+20,jogador.y,10,30);
    circle(jogador.x+10,jogador.y,10);
    
  // OBSTÁCULO
    fill('red');
    rect(obstaculo.x,obstaculo.y,obstaculo.width,obstaculo.height)
    fill('white')
    textSize(9);
    text('Enemy',obstaculo.x + 15,obstaculo.y + 18);
 
  }
  
  


 /* TERCEIRA TELA
Nesta tela, o jogador sofrerá GAME OVER.
*/
if(tela == 2){
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
  text("GAME OVER",200,200);  
    
  }
}
 


function mouseClicked(){
  
  if(area.on == true){
    
    if(tela == 0){
        bg = 30
        tela = 1;
    }

    if(tela == 2){
        bg = 50
        tela = 0;
    }
    cursor();
  }
}
