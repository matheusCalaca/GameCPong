/*açoes do jogo*/
	//gravidade da terra funaçao que inverte a gravidade
	function mudaGravidade(){
		gravidade= gravidade*(-1);
		return gravidade
	}
	//funçao que muda a direcao do eixo X
	function mudaDirecao(){
		velocidade= velocidade*(-1);
		return velocidade
	}
	//faz a bola anda no eixo Y
	function posY(gravidade){
		novaPosicaoY=variavelPosicaoY+gravidade;
		if(novaPosicaoY<alturaTerra){
			bola.style.marginTop=novaPosicaoY+"px";
			}
		if((novaPosicaoY>=alturaTerra-alturaBola && novaPosicaoY<=alturaTerra) || (novaPosicaoY>=0 && novaPosicaoY <=10)){
			bola.style.height=(alturaBola-5)+"px";
		}else{
			bola.style.height=alturaBola+"px";
		}
		if(novaPosicaoY>=alturaTerra-alturaBola || novaPosicaoY<=0){ 
				mudaGravidade();
			}
		return novaPosicaoY;
	}
	//faz a bola anda no eixo X
	function posX(){
		novaPosicaoX=variavelPosicaoX+velocidade;
		if(novaPosicaoX<larguraTerra){
			bola.style.marginLeft=novaPosicaoX+"px";
			}
		if((novaPosicaoX>=larguraTerra-larguraBola && novaPosicaoX<=larguraTerra) || (novaPosicaoX>=0 && novaPosicaoX <=10)){
			bola.style.width=(larguraBola-5)+"px";
		}else{
			bola.style.width=larguraBola+"px";
		}
		if(novaPosicaoX>=larguraTerra-larguraBola || novaPosicaoX<=0){ 
				mudaDirecao();
			}
		return novaPosicaoX;
	};
	//inicia a bola
	function andaBola(){
		var myVar= setInterval(function(){variavelPosicaoY=posY(gravidade); variavelPosicaoX=posX(velocidade);},100);
	};andaBola();
	/*Colisao*/
	function verificaColisao(positionBarra , positionBola){


	}

var myTEste= setInterval(function(){
	positionPlayer.x=barra.style.marginLeft;
	positionPlayer.y=barra.style.marginTop;
	posbola.x=bola.style.marginLeft;
	posbola.y=bola.style.marginTop;;
	/*if((positionPlayer.x >=posbola.x && positionPlayer.x <= posbola.x +laguraBola) && positionPlayer.y >=posbola.y && positionPlayer.y <= posbola.y +alturaBola)) ||((positionPlayer.x + larguraBarra) >=posbola.x && (positionPlayer.x + larguraBarra) <= posbola.x +laguraBola) &&  
(positionPlayer.y + alturaBarra) >=posbola.y && (positionPlayer.y + alturaBarra) <= posbola.y +alturaBola))){
		alert("colidio");
	}*/
},100);