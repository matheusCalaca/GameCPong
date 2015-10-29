

/*metodos*/
		//dece
		function mudaGravidade(){
			gravidade= gravidade*(-1);
			return gravidade
		}

		function posY(gravidade){
			novaPosicaoY=variavelPosicaoY+gravidade;
			//alert(novaPosicaoY);


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
					//alert(gravidade);
				}
				
			return novaPosicaoY;
		}
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
		function posYBarraSobe(){
			barraPosicaoY=barraPosicaoY-10;

			return barraPosicaoY;
		}    

	     //document.getElementById("teclado").value;
	    posYBarra = barra.style.marginTop;
	    if(posYBarra != larguraTerra){
	    	 if(x == 50){
		   		barraPosicaoY=posYBarraDece(barraPosicaoY);
		   		//alert(barraPosicaoY);
		   		
		   		//document.getElementById("teclado").value="";   		
			}
		}

		if(posYBarra != "0px"){
			if(x== 56){
		   		barraPosicaoY=posYBarraSobe();
		   		//alert(bDece);
		   		barra.style.marginTop=barraPosicaoY+"px";
		   		//document.getElementById("teclado").value="";   		
	   		}
		}
	  
		barra.style.marginTop=barraPosicaoY+"px";
	}


