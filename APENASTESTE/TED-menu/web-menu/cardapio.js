function mostrarPedido() {
    const entrada = document.getElementById("entradaSelect").value;
    const pratoPrincipal = document.getElementById("pratoPrincipalSelect").value;
    const sobremesa = document.getElementById("sobremesaSelect").value;

    const pedidoList = document.getElementById("pedidoList");
    pedidoList.innerHTML = `
        <li>${entrada}</li> 
        <li>${pratoPrincipal}</li>
        <li>${sobremesa}</li>
    `;

    const pedidoDiv = document.getElementById("pedido");

    // Limpa o conteúdo anterior
    pedidoDiv.innerHTML = '';

    function adicionarImagem(imagemSrc) {
        const img = document.createElement("img");
        img.src = imagemSrc;
        img.style.width = "120px";
        img.style.height = "120px";
        img.style.borderRadius = "30px";
        img.style.margin = "5px";
        pedidoDiv.appendChild(img);
    }

    if (entrada !== "Sem Entrada") {
        // Adiciona a imagem da entrada
        adicionarImagem("imagens/misto-de-legumes-e-camarao-no-pao.avif");
    }

    if (pratoPrincipal !== "Sem prato Principal") {
        // Adiciona a imagem do prato principal
        adicionarImagem("imagens/enfeite-de-arroz-com-coxa-de-frango-grelhado-picante-em-um-prato-de-granito_114579-1962.avif");
    }

    if (sobremesa !== "Sem Sobremesa") {
        // Adiciona a imagem da sobremesa
        adicionarImagem("imagens/bolo-de-brownie-de-chocolate-com-uma-bola-de-sorvete_155003-433.avif");
    }
}
