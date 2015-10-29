function Barra(){
	/*atributos*/
	//atributos espacivicos da bola
			alturaBarra = 75;
			larguraBarra = 15;
		var cor = "blue";
		barraPosicaoY=((alturaTerra/2)-(alturaBarra/2));

	
	/*Objeto Barra*/
	function constroiPlayer(nomeBarra){
		/*construtor*/	
		fundo.innerHTML+="<div id=\""+nomeBarra+"\" style=\" transition: all 0s; position: fixed;\"></div>"
		barra=document.getElementById(""+nomeBarra+"");
		barra.style.height=alturaBarra+"px";
		barra.style.width=larguraBarra+"px";
		barra.style.backgroundColor=cor;
		barra.style.marginTop=((alturaTerra/2)-(alturaBarra/2))+"px";



	}
	constroiPlayer("player01")//construindo o jogador


}
Barra();



	

/*function posYBarraDece(){
		bDece=bDece+10;

		return bDece;
	}
function posYBarraSobe(){
		bDece=bDece-10;

		return bDece;
	}

function teclado(event) {
    var x = event.which || event.keyCode;
   //alert(x);
     //document.getElementById("teclado").value;
    posXBarra1 = barra1.style.marginTop;
    if(posXBarra1 != "450px"){
    	 if(x== 50){
	   		bDece=posYBarraDece();
	   		//alert(bDece);
	   		barra1.style.marginTop=bDece+"px";
	   		//document.getElementById("teclado").value="";   		
	   }
    }
    

    if(posXBarra1 != "0px"){
    	 if(x== 56){
	   		bDece=posYBarraSobe();
	   		//alert(bDece);
	   		barra1.style.marginTop=bDece+"px";
	   		//document.getElementById("teclado").value="";   		
	   }
    }
  
}*/