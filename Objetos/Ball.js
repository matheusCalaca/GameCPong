function Ball(){
	/*atributos*/
	//atributos espacivicos da bola
		var altura = 15;
		var largura = 15;
		var cor = "red";
		var borda = 100;
		//var fundo=document.getElementById("fundo");
	//atributos do metodo dece
		var variavelPosicaoY = 1;
			gravidade = 10;
	//atributo do metodo anda
		var variavelPosicaoX = 1;
			velocidade = 10;		
	/*Objeto bola*/
	function constroiBola(nomeBola){
		/*construtor*/	
		fundo.innerHTML+="<div id=\""+nomeBola+"\" style=\" transition: all 0s; position: fixed;\"></div>"
		var bola=document.getElementById(""+nomeBola+"");
		bola.style.height=altura+"px";
		bola.style.width=largura+"px";
		bola.style.backgroundColor=cor;
		bola.style.borderRadius=borda+"%";

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
			if((novaPosicaoY>=alturaTerra-altura && novaPosicaoY<=alturaTerra) || (novaPosicaoY>=0 && novaPosicaoY <=10)){
				bola.style.height=(altura-5)+"px";
			}else{
				bola.style.height=altura+"px";
			}
			if(novaPosicaoY>=alturaTerra-altura || novaPosicaoY<=0){ 
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
			if((novaPosicaoX>=larguraTerra-largura && novaPosicaoX<=larguraTerra) || (novaPosicaoX>=0 && novaPosicaoX <=10)){
				bola.style.width=(largura-5)+"px";
			}else{
				bola.style.width=largura+"px";
			}
			if(novaPosicaoX>=larguraTerra-largura || novaPosicaoX<=0){ 
					mudaDirecao();
				}
				
			return novaPosicaoX;
		};
		var myVar= setInterval(function(){variavelPosicaoY=posY(gravidade); variavelPosicaoX=posX(velocidade);},100);
		

	}
	constroiBola("bola01");//contrundo a bola

	//fazer a bola dece

	/*///bola
	elemento=document.getElementById("bola");
	mar=elemento.style.margin;
	//alert(mar);
	var dece= 1;
	var lado= 1;
	var mudaY= 10;
	var mudaX= 20;
	function posY(mudaY){
		dece=dece+mudaY;
		return dece;
	}
	function posX(mudaX){
		lado=lado+mudaX;
		return lado;
	}
//alert(posY());
//alert(posY());
//alert(posY());


/*naveX = window.innerWidth || document.documentElement.clientWidth || document.body.offsetWidth;
naveY = window.innerHeight || document.documentElement.clientHeight || document.body.offsetHeight;
alert(naveX+" "+naveY);*/

	/*var myVar= setInterval(function(){ myTimerY();},100);
	clearInterval(myVar);
	//document.getElementsByTagName("table").addEventListener("click", myVar());
	function teste(){
		myVar = setInterval(function(){ myTimerY(); },100);
	}

function myTimerY() {
	dece=posY(mudaY);
	if(dece<tamanhoY){
			//alert(dece);
			elemento.style.marginTop=dece+"px";
		
		}
	 if(dece>=tamanhoY || dece<=0){ 
			mudaY=mudaY*(-1);
			//dece=posY(mudaY);
	//alert("Y ="+dece+" X ="+lado);
		}
		
		
		lado=posX(mudaX);
///---------------X------------
	if(lado<=tamanhoX){

		//alert(dece);
		elemento.style.marginLeft=lado+"px";
		
	}
 if(lado>tamanhoX|| lado<=0){ 
		mudaX=mudaX*(-1);
		//lado=posX(mudaX);
		
//alert("Y ="+dece+" X ="+lado);
	}
}

*/

}
Ball();