
const botoesCurtir = document.querySelectorAll(".curtir");

botoesCurtir.forEach(function(botaoCurtir) {
    let curtiu = false;

    botaoCurtir.addEventListener("click", function() {
        const contador = botaoCurtir.querySelector("span");

        if (!contador) return;

        let quantidade = Number(contador.textContent);

        if (curtiu === false) {
            quantidade++;
            curtiu = true;
            botaoCurtir.firstChild.textContent = "❤️ Curtido (";
        } else {
            quantidade--;
            curtiu = false;
            botaoCurtir.firstChild.textContent = "👍 Curtir (";
        }

        contador.textContent = quantidade;
    });
});

const btnTema = document.querySelector(".btn-tema");

if (btnTema) {
    btnTema.addEventListener("click", function() {
        document.body.classList.toggle("tema-escuro");
    });
}
