//anda pelo eixo X
		function mudaDirecao(){
			velocidade= velocidade*(-1);
			return velocidade
		}

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

		function andaBola(){
			var myVar= setInterval(function(){variavelPosicaoY=posY(gravidade); variavelPosicaoX=posX(velocidade);},100);
		};andaBola();
		


		/*movimento do teclado*/
	function movimento(event){
		barra=document.getElementById("player01");
		var x = event.keyCode;
		//alert(x);
		

		function posYBarraDece(barraPosicaoY){
			barraPosicaoY=barraPosicaoY+10;

			return barraPosicaoY;
		}
		function posYBarraSobe(barraPosicaoY){
			barraPosicaoY=barraPosicaoY-10;

			return barraPosicaoY;
		}    

	     //document.getElementById("teclado").value;
	    posYBarra = barra.style.marginTop;
	    //alert(barraPosicaoY+" "+alturaTerra);
	    if(barraPosicaoY <= alturaTerra-alturaBarra){
	    	 if(x == 50){
		   		barraPosicaoY=posYBarraDece(barraPosicaoY);
			}
		}

		if(barraPosicaoY >= "0"){
			if(x == 56){
		   		barraPosicaoY=posYBarraSobe(barraPosicaoY);
	   		}
		}
	  
		barra.style.marginTop=barraPosicaoY+"px";
	}


