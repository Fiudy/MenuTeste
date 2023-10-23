var entradasImagens = {
    "Misto de legumes e camarão no pão": "misto-de-legumes-e-camarao-no-pao.jpg",
    "Cachorro Quente de Carne na Grelha": "cachorro-quente-de-carne-grelhada-com-lanche-de-ketchup-ia-generativa_188544-7829.jpg",
    "Canja de Galinha com Legumes e Endro": "colher-com-canja-de-galinha-com-legumes-e-endro_140725-636.jpg"
};

var pratosImagens = {
    "Coxa de Frango ao Molho Balsamico, Mix de Folhas e Arroz Branco": "enfeite-de-arroz-com-coxa-de-frango-grelhado-picante-em-um-prato-de-granito_114579-1962.jpg",
    "Almondegas com Legumes e Molho de Tomate": "almondegas-com-legumes-e-molho-de-tomate_1220-7420.jpg",
    "Lasanha Recém Cozida com Molho a Bolonhesa": "lasanha-recem-cozida-com-molho-a-bolonhesa-gourmet-gerada-por-ia_188544-16148.jpg",
    "Risoto Vegetariano com Cogumelos Frescos e Queijo Parmesão": "risoto-vegetariano-com-cogumelos-frescos-e-queijo-parmesao-gerado-por-ia_188544-10223.jpg",
    "Espaguete com Marisco Misto Picante": "espaguete-com-marisco-misto-picante-em-fundo-escuro_1150-45298.jpg"
};

var sobremesasImagens = {
    "Bolo de Brownie de Chocolate com uma Bola de Sorvete": "bolo-de-brownie-de-chocolate-com-uma-bola-de-sorvete_155003-433.jpg",
    "Fatia de Cheesecake com Geleia de Frutas Vermelhas e Morangos": "closeup-tiro-de-cheesecake-com-geleia-decorada-com-morangos-e-frutas-vermelhas_181624-45104.jpg",
    "Massa de Suspiro com Creme e Morangos": "closeup-tiro-de-uma-deliciosa-folha-de-creme-com-morangos-em-uma-mesa-de-madeira_181624-22715.jpg"
};

function mostrarImagemSelecionada(tipo, opcaoSelecionada) {
    var imagens;
    var tipoNome;

    switch (tipo) {
        case "entrada":
            imagens = entradasImagens;
            tipoNome = "Entrada";
            break;
        case "pratoPrincipal":
            imagens = pratosImagens;
            tipoNome = "PratoPrincipal";
            break;
        case "sobremesa":
            imagens = sobremesasImagens;
            tipoNome = "Sobremesa";
            break;
        default:
            return;
    }

    var imagemElement = document.getElementById("imagem" + tipoNome);
    var imagemSelecionada = imagens[opcaoSelecionada];

    if (imagemSelecionada) {
        imagemElement.setAttribute("src", imagemSelecionada);
        imagemElement.style.display = "block";
    } else {
        imagemElement.style.display = "none";
    }
}

function mostrarPedido() {
    var entradaSelecionada = document.getElementById("entrada").value;
    var pratoPrincipalSelecionado = document.getElementById("pratoPrincipal").value;
    var sobremesaSelecionada = document.getElementById("sobremesa").value;

    mostrarImagemSelecionada("entrada", entradaSelecionada);
    mostrarImagemSelecionada("pratoPrincipal", pratoPrincipalSelecionado);
    mostrarImagemSelecionada("sobremesa", sobremesaSelecionada);

    var resultado = document.getElementById("resultado");
    resultado.innerHTML = `
        <h2>Seu Pedido:</h2>
        <p><strong>Entrada:</strong> ${entradaSelecionada}</p>
        <p><strong>Prato Principal:</strong> ${pratoPrincipalSelecionado}</p>
        <p><strong>Sobremesa:</strong> ${sobremesaSelecionada}</p>
    `;
}

