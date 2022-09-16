const imagens = document.querySelectorAll("#galeria li img");

function trocaFoto(event) {
  const principal = document.querySelector("#imagem-principal");
  const clicada = event.currentTarget;
  principal.src = clicada.src;
  principal.alt = clicada.alt;
}

function galeriaClique(imagem) {
  imagem.addEventListener("click", trocaFoto);
}

imagens.forEach(galeriaClique);
