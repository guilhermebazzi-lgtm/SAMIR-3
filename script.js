// ==========================
// CURIOSIDADES
// ==========================

const curiosidades = [
    "A sustentabilidade também depende das pequenas escolhas do dia a dia.",

    "Economizar água ajuda a preservar um dos recursos mais importantes para a vida.",

    "A reciclagem pode diminuir a quantidade de resíduos enviados para aterros.",

    "Tecnologias de agricultura inteligente podem ajudar a reduzir o desperdício de água.",

    "A Inteligência Artificial pode auxiliar no monitoramento de áreas ambientais.",

    "Energia solar é uma das alternativas para produzir energia a partir de uma fonte renovável."
];

let indiceCuriosidade = 0;


function novaCuriosidade() {

    indiceCuriosidade++;

    if (indiceCuriosidade >= curiosidades.length) {
        indiceCuriosidade = 0;
    }

    const texto = document.getElementById("curiosidade-texto");

    texto.textContent = curiosidades[indiceCuriosidade];
}


// ==========================
// QUIZ
// ==========================

function responder(resposta) {

    const resultado = document.getElementById("resultado");

    if (resposta === 3) {

        resultado.textContent =
            "✅ Correto! Economizar água e energia é uma atitude sustentável.";

        resultado.style.color = "#34752c";

    } else {

        resultado.textContent =
            "❌ Não é essa. Pense em uma atitude que reduza o desperdício.";

        resultado.style.color = "#a33a2b";
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
