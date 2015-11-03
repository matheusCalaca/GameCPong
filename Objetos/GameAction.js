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
	function verificaColisao(){


	}

var myTEste= setInterval(function(){

	//atributos
	var provisoria= barra.style.marginLeft.split("px");
	marginLeftBarra=parseFloat(provisoria[0]);
	provisoria= barra.style.marginTop.split("px");
	marginTopBarra=parseFloat(provisoria[0]);
	provisoria=bola.style.marginLeft.split("px");
	marginLeftBola=parseFloat(provisoria[0]);
	provisoria=bola.style.marginTop.split("px");
	marginTopBola=parseFloat(provisoria[0]);
	//barra posicoes
	/*
		a---b
		|   |
		|   |
		|   |
		c---d



	*/
	var a = [];
	a[0]=0;
	a[1]=marginTopBarra;
	var b = [];
	b[0]=larguraBarra;
	b[1]=marginTopBarra;
	var c = [];
	c[0]=0;
	c[1]=marginTopBarra+alturaBarra;
	var d = [];
	d[0]=larguraBarra;
	d[1]=marginTopBarra+alturaBarra;

	//bola posicoes
	/*	a-------b
		|       |
		|   O   |
		|       |
		c-------d

	*/
	var e = [];
	e[0]=marginLeftBola;
	e[1]=marginTopBola;
	var f = [];
	f[0]=marginLeftBola+larguraBola;
	f[1]=marginTopBola;
	var g = [];
	g[0]=marginLeftBola;
	g[1]=marginTopBola+alturaBola;
	var h = [];
	h[0]=marginLeftBola+larguraBola;
	h[1]=marginTopBola+alturaBola;

	//condicao
	if ((g[0]>=a[0]) && (g[0]<=b[0]) && (g[1]>=a[1]) && (g[1]<=b[1]) || (e[0]>=c[0]) && (e[0]<=d[0]) && (e[1]>=c[1]) && (e[1]<=d[1]) || (g[0]>=b[0]) && (g[0]<=d[0]) && (g[1]>=b[1]) && (g[1]<=d[1]) || (e[0]>=d[0]) && (e[0]<=b[0]) && (e[1]>=d[1]) && (e[1]<=b[1]))
	{
		alert("consegui");
	}

},100);