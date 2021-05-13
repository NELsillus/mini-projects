function gerarTexto(){

	const cont = 0;
	const numParagrafo = document.querySelector('input#numParagrafo').value
	const txtLorem = document.querySelector('div#textoLorem')
	const txt = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing</p>`
	
	while(cont < numParagrafo){
		txtLorem.innerHTML = txt.repeat(numParagrafo)
		cont++
	}
}