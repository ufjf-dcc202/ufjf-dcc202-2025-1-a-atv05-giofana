const eH1 = document.querySelector("h1");
eH1.textContent = "Ola Mundo!";

const eTabuleiro = criaTabuleiro();
document.body.append(eTabuleiro);
const disco1 = criaDisco("black");
eTabuleiro.append(disco1);

function criaTabuleiro(){
    const eTabuleiro = document.createElement("div");
    eTabuleiro.classList.add("tabuleiro");
    return eTabuleiro;
}

function criaDisco(cor){
    const novoDisco = document.createElement("div");
    novoDisco.classList.add("disco");
    novoDisco.dataset.cor = cor;
    return novoDisco;
}

