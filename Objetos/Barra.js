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
		fundo.innerHTML+="<div id=\""+nomeBarra+"\" style=\" transition: all 0s; position: fixed;\"></div>";
		barra=document.getElementById(""+nomeBarra+"");
		barra.style.height=alturaBarra+"px";
		barra.style.width=larguraBarra+"px";
		barra.style.backgroundColor=cor;
		barra.style.marginTop=((alturaTerra/2)-(alturaBarra/2))+"px";
	}
	constroiPlayer("player01");//construindo o jogador
}
Barra();