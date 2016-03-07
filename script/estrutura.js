var Carro = function(x,y){
  var nome = "";
  var posicao = null;
  var acelerar = null;
}


var Posicao = function(x,y){
  var posicaoX = x;
  var posicoaY = y;
}

var Aceleracao = function(valorMaximo,incremento){
  var aceleracaoIncremento = incremento || 0.2;
  var aceleracaoLimite = valorMaximo;
  var atual = 0;
  var acelerar=function(){
    if(this.atual<this.aceleracaoLimite){
      this.atual += this.aceleracaoIncremento;
    }
  }
  var desacelerar=function(){
    if(this.atual>0){
      this.atual -= this.aceleracaoIncremento;
    }
  }
}
