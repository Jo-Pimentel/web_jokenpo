const adversario = document.querySelector("#adversario");
const jogador = document.querySelector("#jogador");
const opcoes_jogadas = [...document.querySelectorAll(".jogadas")];
const btn_jogar = document.querySelector("#btn_jogar");
let jogada_escolhida;

opcoes_jogadas.map((jogada) => {
    jogada.addEventListener("click", () => {
        jogada.classList.add("jogada_selecionada");
        jogada_escolhida = jogada.id;
    })
})

btn_jogar.addEventListener("click", () => {
    if(jogada_escolhida != null) {
        adversario.classList.add("adversario_partida_iniciada");
        jogador.classList.add("jogador_partida_iniciada");

        setTimeout(() => {
            adversario.classList.remove("adversario_partida_iniciada");
            jogador.classList.remove("jogador_partida_iniciada");
        }, 900)
    }
})