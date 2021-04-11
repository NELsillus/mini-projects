function retornarNumero(){
	const min = document.querySelector('input#numCampoMin')
	const max = document.querySelector('input#numCampoMax')
	const valMin = min.value
	const valMax = max.value

	if (valMin > valMax) {
		const num = Math.random() * (valMax - valMin) + valMin
		const resultado = Math.floor(num)
		document.querySelector('div#resultado').innerHTML = -1 * resultado
	}else{
		const num = Math.random() * (valMax - valMin) + valMin
		const resultado = Math.floor(num)
		document.querySelector('div#resultado').innerHTML = resultado
	}
	
}