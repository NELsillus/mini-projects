function converter() {

	var barraNum = window.document.querySelector('input#txtNum')
	var divResultado = window.document.querySelector('div#res')
	var opcBase = document.getElementsByName('radBase')
	var numero = Number(barraNum.value)

	if (barraNum.value.length == 0) {
		window.alert(`Digite um valor válido no campo de entrada!`)
	}else{
		if (opcBase[0].checked) {
			var bin = numero.toString(2)
			divResultado.innerHTML = `${bin}`
		}else if(opcBase[1].checked){
			var oct = numero.toString(8)
			divResultado.innerHTML = `${oct}`
		}else if(opcBase[2].checked){
			var hex = numero.toString(16)
			divResultado.innerHTML = `${hex}`
		}

	}
		
		
	}
	
