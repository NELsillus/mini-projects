function mudaBorda(){

	var caixaGrande = document.querySelector('section#caixa-maior')
	var caixaPequena = document.querySelector('div#caixa-menor')
	var valor = document.querySelector('input#barra-numero')
	caixaGrande.style.borderRadius = Number(valor.value)	

}
