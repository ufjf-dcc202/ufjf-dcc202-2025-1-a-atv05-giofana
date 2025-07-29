const eH1 = document.querySelector("h1");
eH1.textContent = "Ola Mundo!";

const eTabuleiro = criaTabuleiro();
document.body.append(eTabuleiro);

function criaTabuleiro(){
    const eTabuleiro = document.createElement("div");
    eTabuleiro.classList.add("tabuleiro");
    return eTabuleiro;
}

