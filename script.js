
const botoesCurtir = document.querySelectorAll(".curtir");

botoesCurtir.forEach(function(botaoCurtir, index) {

    const contador = botaoCurtir.querySelector("span");
    const chave = "parana-curtidas-" + index;
    const chaveEstado = "parana-curtido-" + index;

    let curtiu = localStorage.getItem(chaveEstado) === "true";
    let quantidade = Number(localStorage.getItem(chave)) || 0;

    contador.textContent = quantidade;

    if (curtiu) {
        botaoCurtir.firstChild.textContent = "❤️ Curtido ";
    }

    botaoCurtir.addEventListener("click", function() {

        if (curtiu === false) {
            quantidade++;
            curtiu = true;
        } else {
            quantidade--;
            curtiu = false;
        }

        contador.textContent = quantidade;

        if (curtiu) {
            botaoCurtir.firstChild.textContent = "❤️ Curtido ";
        } else {
            botaoCurtir.firstChild.textContent = "❤️ Curtir ";
        }

        localStorage.setItem(chave, quantidade);
        localStorage.setItem(chaveEstado, curtiu);

    });

});


const btnTema = document.querySelector(".btn-tema");

btnTema.addEventListener("click", mudarTema);

function mudarTema() {

    document.body.classList.toggle("tema-escuro");

    if (document.body.classList.contains("tema-escuro")) {
        btnTema.textContent = "☀️";
    } else {
        btnTema.textContent = "🌙";
    }

}
