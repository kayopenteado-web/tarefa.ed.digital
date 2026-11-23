
const botoesCurtir = document.querySelectorAll(".curtir");

botoesCurtir.forEach(function(botao) {
    let curtiu = false;

    botao.addEventListener("click", function() {
        const contador = botao.querySelector("span");

        if (curtiu === false) {
            contador.textContent = Number(contador.textContent) + 1;
            curtiu = true;
            botao.classList.add("ativo");
        } else {
            contador.textContent = Number(contador.textContent) - 1;
            curtiu = false;
            botao.classList.remove("ativo");
        }
    });
});