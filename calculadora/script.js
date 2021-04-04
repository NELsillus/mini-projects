const arrayVazia = []
const arrayVisor = []


function digitar(x){
	document.querySelector('.visor').innerHTML += x
	}

function limparTela(){
	document.querySelector('.visor').innerHTML = ''
}

function apagar(){
	var resultado = document.querySelector('.visor').innerHTML
	document.querySelector('.visor').innerHTML = resultado.substring(0, resultado.length - 1)
}

function calcularResultado(){
	var resultado = document.querySelector('.visor').innerHTML
	if (resultado) {
		document.querySelector('.visor').innerHTML = eval(resultado)
	}else{
		document.querySelector('.visor').innerHTML = ''
	}
}	
