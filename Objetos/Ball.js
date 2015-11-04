function Ball(){
	/*atributos*/
	//atributos espacivicos da bola
			alturaBola = 15;
			larguraBola = 15;
		var cor = "red";
		var borda = 100;
		//var fundo=document.getElementById("fundo");
	//atributos do metodo dece
			variavelPosicaoY = 1;
			gravidade = 10;
	//atributo do metodo anda
			variavelPosicaoX = 1;
			velocidade = 10;		
	/*Objeto bola*/
	function constroiBola(nomeBola){
		/*construtor*/	
		fundo.innerHTML+="<div id=\""+nomeBola+"\" style=\" transition: all 0s; position: fixed;\"></div>";
		bola=document.getElementById(""+nomeBola+"");
		bola.style.height=alturaBola+"px";
		bola.style.width=larguraBola+"px";
		bola.style.backgroundColor=cor;
		bola.style.borderRadius=borda+"%";
	}
	constroiBola("bola01");//contrundo a bola
}
Ball();




