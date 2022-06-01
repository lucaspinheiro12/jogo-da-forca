var buttonComecarJogo = document.querySelector(".comecar-jogo");
var buttonAdicionarPalavra = document.querySelector(".adicionar-nova-palavra");
var letrasDigitadasErradas = document.querySelector(".letras-erradas");
var palavraSecreta = document.querySelector(".palavra-secreta");
var inputAdicionar = document.querySelector(".input-texto");
var parteJogo = document.querySelector(".parte-jogo-pagina2");
var telaInicial= document.querySelector(".botoes-tela-inicial");
var fim = document.querySelector(".fim-de-jogo");
var ganhou =document.querySelector(".ganhou");
var span = document.querySelector(".escuro")
var spanAdiciona = document.querySelector(".adicionada-sucesso");

var palavras = ["MUNDO","PIPOCA","MERCADO","TECLADO"];
var palavraAdicionada =JSON.parse(localStorage.getItem("p")) ||[];
var concat = palavras.concat(palavraAdicionada);
var palavraSortiada = sorteia(concat);
var letrasDaPalavra = palavraSortiada.split("");
var regex = /^[A-Z]+$/;
var erros = 6;
var letrasErradas = [];
var letrasCertas = [];	 

	function sorteia (numero){
	var palavraAleatoria = Math.floor(Math.random()* concat.length);
	return numero[palavraAleatoria];
	}

   	function adicionarPalavra(){
   		var novaPalavra = inputAdicionar.value;
   		if(!regex.test(inputAdicionar.value)){
   			return;
   		}else{
   			if(concat.includes(novaPalavra)){
   				span.classList.remove("escuro");
   				span.classList.add("aparece");
   				setTimeout(function(){ 
                	span.classList.remove("aparece");
                	span.classList.add("escuro");  
            	}, 1000);
   				return;
   			}else{
   				palavraAdicionada.push(novaPalavra);
   				localStorage.setItem("p", JSON.stringify(palavraAdicionada));
   				spanAdiciona.classList.remove("adicionada-sucesso");
   				spanAdiciona.classList.add("adicionada-sucesso-certo");
   				inputAdicionar.value = "";
   				setTimeout(function(){ 
                	spanAdiciona.classList.remove("adicionada-sucesso-certo");
                	spanAdiciona.classList.add("adicionada-sucesso");  
            	}, 1000);
   			}
   		}
   	}	
	
	function comecarJogo (){
		fim.style.display = "none";
		ganhou.style.display ="none";
		forca();
		verLetraCompara();
	}	
	
	function verLetraCompara (){
		letrasDaPalavra.forEach(letra => {
			palavraSecreta.innerHTML += "_  ";
		})
		// console.log(letrasDaPalavra);
		document.onkeydown = function(evento) {
		var letraApertada = botaoApertado(evento);
			if(!regex.test(letraApertada)){
		 	// console.log("letra invalida");
			}else{
				if(letrasCertas.includes(letraApertada) || letrasErradas.includes(letraApertada)){
					// console.log('nao pode');
				}else{
					if(letrasErradas.length == erros || letrasCertas.length == letrasDaPalavra.length){
						evento.preventDefault();
						return;
					}else{
						if(letrasDaPalavra.includes(letraApertada)){
							for(var i = 0 ; i < letrasDaPalavra.length; i++){
								if(letrasDaPalavra[i] == letraApertada){
									letrasCertas.push(letraApertada);
									// console.log(letrasCertas);
								}
							}
						}else{
								if(!letrasErradas.includes(letraApertada)){	
									letrasErradas.push(letraApertada);
									// console.log(letrasErradas,"erro");
								}			
						}
					}
				Atualiza();
				}
			}
		}						
	}

	function Atualiza() {
	PalavraAcertada();
	tentativasErradas();
	}

	function tentativasErradas(){
		letrasDigitadasErradas.innerHTML = "";
		letrasErradas.forEach(letra =>{
			letrasDigitadasErradas.innerHTML += letra	
		})
		if(letrasErradas.length == 1){
			cabeca();
		}
		if(letrasErradas.length == 2){
			corpo();
		}
		if(letrasErradas.length == 3){
			braco1();
		}
		if(letrasErradas.length == 4){
			braco2();
		}
		if(letrasErradas.length == 5){
			perna1();
		}
		if(letrasErradas.length == 6){
			perna2();
			fim.style.display="block";
		}
	}

	function PalavraAcertada(){
		palavraSecreta.innerHTML ="";
		letrasDaPalavra.forEach(letra => {
			if(letrasCertas.includes(letra)){
				palavraSecreta.innerHTML += letra + " ";
			}else{
				palavraSecreta.innerHTML += "_  ";
			}
		})
		if(letrasCertas.length == letrasDaPalavra.length){
			ganhou.style.display = "block";
		}
	}
			
	function botaoApertado(evento){
    	evento = evento || window.event;
    	var codigo = evento.keiCode || evento.which;
    	return String.fromCharCode(codigo);
   	}