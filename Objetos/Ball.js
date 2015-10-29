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
		fundo.innerHTML+="<div id=\""+nomeBola+"\" style=\" transition: all 0s; position: fixed;\"></div>"
		bola=document.getElementById(""+nomeBola+"");
		bola.style.height=alturaBola+"px";
		bola.style.width=larguraBola+"px";
		bola.style.backgroundColor=cor;
		bola.style.borderRadius=borda+"%";
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




