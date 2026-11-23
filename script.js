
const botoesCurtir = document.querySelectorAll(".curtir");

botoesCurtir.forEach(function(botaoCurtir) {

    let curtiu = false;

    botaoCurtir.addEventListener("click", function() {

        const contador = botaoCurtir.querySelector("span");

        if (!curtiu) {

            contador.textContent = Number(contador.textContent) + 1;
            curtiu = true;
            botaoCurtir.classList.add("ativo");

        } else {

            contador.textContent = Number(contador.textContent) - 1;
            curtiu = false;
            botaoCurtir.classList.remove("ativo");

        }

    });

});


const btnTema = document.querySelector(".btn-tema");

btnTema.addEventListener("click", mudarTema);

function mudarTema() {

    document.body.classList.toggle("tema-escuro");

    if (document.body.classList.contains("tema-escuro")) {

        btnTema.textContent = "☀️ Mudar para tema claro";

    } else {

        btnTema.textContent = "🌙 Mudar para tema escuro";

    }

}
