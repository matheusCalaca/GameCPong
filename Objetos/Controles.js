/*controle da barra do player 01*/
	//funcao teclado evento
	/*lista de teclas
		google canary
		--tecla 8 = 50
		--tecla 2 = 56*/
	function movimento(event){
		//atributos necessarios
		barra=document.getElementById("player01");
		var x = event.keyCode;
		//funçoes
		//faz o player 01 decer
		function posYBarraDece(barraPosicaoY){
			barraPosicaoY=barraPosicaoY+10;
			return barraPosicaoY;
		}
		//faz o player 01 subi
		function posYBarraSobe(barraPosicaoY){
			barraPosicaoY=barraPosicaoY-10;
			return barraPosicaoY;
		}    
		//verificao de tecla precionada
	    posYBarra = barra.style.marginTop;//pega a posicao que a barra esta
	    //verifica se tecla 8 precionada
	    if(barraPosicaoY <= alturaTerra-alturaBarra){
	    	 if(x == 50){
		   		barraPosicaoY=posYBarraDece(barraPosicaoY);
			}
		}
		//verifica se tecla 2 precionada
		if(barraPosicaoY >= "0"){
			if(x == 56){
		   		barraPosicaoY=posYBarraSobe(barraPosicaoY);
	   		}
		}
	  	//muda a posicao da barra
		barra.style.marginTop=barraPosicaoY+"px";
	}