// ==========================
// QUIZ
// ==========================

function responder(resposta) {

    const resultado = document.getElementById("resultado");

    if (resposta === 3) {

        resultado.textContent =
            "✅ Muito bem! Economizar água e energia ajuda na preservação do planeta.";

        resultado.style.color = "#16802a";

    } else {

        resultado.textContent =
            "❌ Não é essa! Pense em uma atitude que reduza o desperdício.";

        resultado.style.color = "#b3261e";
    }
}


// ==========================
// ACESSIBILIDADE
// ==========================

function aumentarFonte() {

    document.body.classList.add("fonte-grande");

}


function diminuirFonte() {

    document.body.classList.remove("fonte-grande");

}


function altoContraste() {

    document.body.classList.toggle("contraste");

}
