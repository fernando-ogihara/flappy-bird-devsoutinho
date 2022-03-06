console.log('[DevSoutinho] Flappy Bird');
console.log('Inscreva-se no canal :D https://www.youtube.com/channel/UCzR2u5RWXWjUh7CwLSvbitA');

const sprites = new Image();
sprites.src = './sprites.png';

const canvas = document.querySelector('canvas');
const contexto = canvas.getContext('2d');

const flappyBird = {
    spriteX: 0,
    spriteY: 0,
    largura: 33,
    altura: 24,
    x: 10,
    y: 50,

    desenha () {
        contexto.drawImage(
            sprites,  
            flappyBird.spriteX, flappyBird.spriteY, //sprite X e Y
            flappyBird.largura, flappyBird.altura, //tamanho do recorte na Sprite 
            flappyBird.x, flappyBird.y, 
            flappyBird.largura, flappyBird.altura,
        );
    },
};

//[chao]
const chao = {
    spriteX: 0,
    spriteY: 610,
    largura: 224,
    altura: 112,
    x: 0,
    y: canvas.height - 112,

    desenha () {
        contexto.drawImage(
            sprites,  
            chao.spriteX, chao.spriteY, //sprite X e Y
            chao.largura, chao.altura, //tamanho do recorte na Sprite 
            chao.x, chao.y, 
            chao.largura, chao.altura,
        );

        contexto.drawImage(
            sprites,  
            chao.spriteX, chao.spriteY, //sprite X e Y
            chao.largura, chao.altura, //tamanho do recorte na Sprite 
            (chao.x + chao.largura), chao.y, 
            chao.largura, chao.altura,
        );
    },

};

//[background]
const planoDeFundo = {
  spriteX: 390,
  spriteY: 0,
  largura: 275,
  altura: 204,
  x: 0,
  y: canvas.height - 204,
  desenha() {
    contexto.fillStyle = '#70c5ce';
    contexto.fillRect(0,0, canvas.width, canvas.height)

    contexto.drawImage(
      sprites,
      planoDeFundo.spriteX, planoDeFundo.spriteY,
      planoDeFundo.largura, planoDeFundo.altura,
      planoDeFundo.x, planoDeFundo.y,
      planoDeFundo.largura, planoDeFundo.altura,
    );

    contexto.drawImage(
      sprites,
      planoDeFundo.spriteX, planoDeFundo.spriteY,
      planoDeFundo.largura, planoDeFundo.altura,
      (planoDeFundo.x + planoDeFundo.largura), planoDeFundo.y,
      planoDeFundo.largura, planoDeFundo.altura,
    );
  },
};


function loop() {
    
    planoDeFundo.desenha();
    chao.desenha();
    flappyBird.desenha();
    
    
    requestAnimationFrame(loop);
};


loop();
