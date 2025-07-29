const eH1 = document.querySelector("h1");
eH1.textContent = "Ola Mundo!";

const eTabuleiro = criaTabuleiro();
document.body.append(eTabuleiro);

for(let i=0; i<6; i++){
    const disco1 = criaDisco(i<3?"branco":"preto", i);
    eTabuleiro.append(disco1);
}

function criaTabuleiro(){
    const eTabuleiro = document.createElement("div");
    eTabuleiro.classList.add("tabuleiro");
    return eTabuleiro;
}

function criaDisco(cor, posicao){
    const novoDisco = document.createElement("div");
    novoDisco.classList.add("disco");
    novoDisco.dataset.cor = cor;
    novoDisco.dataset.posicao = posicao;
    return novoDisco;
}

