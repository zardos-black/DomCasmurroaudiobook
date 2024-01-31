const numerocaps = 10;
const botãoplaypause = document.getElementById("botão-começar-pause");
const botãoAvançar = document.getElementById("botão-avançar");
const botãoVoltar = document.getElementById("boão-voltar");
const audioAtual = document.getElementById("dom-casmurro");
const capítulo = document.getElementById("Capítulo")

let tatocando = 0;
let capítuloAtual = 1;

function trrocarnomecapítulo() {
    capítulo.innerText = "Capítulo" + capítuloAtual;

}


function tocarCapítulo() {
    audioAtual.play();
    botãoplaypause.classList.remove("bi-play-circle");
    botãoplaypause.classList.add("bi-pause-circle");
}

function PausarCapítulo() {
    audioAtual.pause();
    botãoplaypause.classList.add("bi-play-circle");
    botãoplaypause.classList.remove("bi-pause-circle");
}

function tocarouPausar() {
    if ( tatocando === 0) {
        tocarCapítulo();
        tatocando = 1
        
    } else {
        PausarCapítulo();
        tatocando = 0
    } 
}
function próximoCapítulo() {
    if (capítuloAtual < numerocaps) { 
        capítuloAtual += 1
    } else {
       capítuloAtual = 1
    }
    audioAtual.src = "./books/dom-casmurro/" + capítuloAtual +".mp3"
    tocarCapítulo();
    tatocando = 1
    capítulo.innerText = "Capítulo " + capítuloAtual;
}

function VoltarCapítulo() {
    if (capítuloAtual === 1) { 
        capítuloAtual = numerocaps
    } else {
        capítuloAtual -= 1
    }
    audioAtual.src = "./books/dom-casmurro/" + capítuloAtual +".mp3"
    tocarCapítulo();
    tatocando = 1
    capítulo.innerText = "Capítulo " + capítuloAtual;
}    
botãoplaypause.addEventListener('click' , tocarouPausar);
botãoAvançar.addEventListener('click', próximoCapítulo);
botãoVoltar.addEventListener('click', VoltarCapítulo);
audio.addEventListener("ended", próximoCapítulo);