
// SISTEMA DE CURTIDAS

const botoesCurtir = document.querySelectorAll(".curtir");

botoesCurtir.forEach((botao) => {
    const identificador = botao.dataset.id;
    const chaveCurtida = "parana-curtida-" + identificador;

    let curtido = localStorage.getItem(chaveCurtida) === "true";
    let quantidade = Number(
        localStorage.getItem("parana-contagem-" + identificador)
    ) || 0;

    const contador = botao.querySelector("span");

    function atualizarBotao() {
        contador.textContent = quantidade;

        if (curtido) {
            botao.classList.add("ativo");
            botao.setAttribute("aria-pressed", "true");
            botao.firstChild.textContent = "❤️ Curtido ";
        } else {
            botao.classList.remove("ativo");
            botao.setAttribute("aria-pressed", "false");
            botao.firstChild.textContent = "❤️ Curtir ";
        }
    }

    atualizarBotao();

    botao.addEventListener("click", () => {
        if (curtido) {
            curtido = false;
            quantidade = Math.max(0, quantidade - 1);
        } else {
            curtido = true;
            quantidade++;
        }

        localStorage.setItem(chaveCurtida, curtido);
        localStorage.setItem(
            "parana-contagem-" + identificador,
            quantidade
        );

        atualizarBotao();
    });
});


// MODO CLARO E ESCURO

const botaoTema = document.querySelector("#btnTema");

if (localStorage.getItem("parana-tema") === "escuro") {
    document.body.classList.add("tema-escuro");
    botaoTema.textContent = "☀️ Mudar tema";
}

botaoTema.addEventListener("click", () => {
    document.body.classList.toggle("tema-escuro");

    const temaEscuro = document.body.classList.contains("tema-escuro");

    if (temaEscuro) {
        localStorage.setItem("parana-tema", "escuro");
        botaoTema.textContent = "☀️ Mudar tema";
    } else {
        localStorage.setItem("parana-tema", "claro");
        botaoTema.textContent = "🌙 Mudar tema";
    }
});
