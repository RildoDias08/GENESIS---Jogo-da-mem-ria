let ordem = [];
let clicaOrdem = [];
let pontos = 0;

// 0 =verde, 1 = vermelho, 2 = amarelo, 3 = azul

const azul = document.querySelector('.azul');
const vermelho = document.querySelector('.vermelho');
const verde = document.querySelector('.verde');
const amarelo = document.querySelector('.amarelo');


//cria ordem aletoria de cores
let variaOrdem = () => {
    let corOrdem = Math.floor(Math.random() * 4);
    ordem[ordem.length] = corOrdem;
    clicaOrdem = [];
    
    for(let i in ordem){
        let elementoCor = criaElemento(ordem[i]);
        lightColor(elementoCor, Number(i) + 1);      
    }
}

//acende a proxima cor
let lightColor = (element, number) => {
    number = number * 200;
    setTimeout(() => {
        element.classList.add('selecionada');
    },number - 100);
    setTimeout(() => {
        element.classList.remove('selecionada');
    });
}

//checa se os botoes clicados são os mesmos da ordem gerada no jogo
let checaOrdem = () => {
    for(let i in clicaOrdem){
        if(clicaOrdem[i] != ordem[i]){
            gameOver();
            break;
        }
    }
    if(clicaOrdem.length == ordem.length){
        alert(`pontuação: ${pontos}\nVocê acertou! iniciando proximo nivel!`);
        nextLevel();
    }
}

//função para clique do usuario
let click = (color) => {
    clicaOrdem[clicaOrdem.length] = color;
    criaElemento(color).classList.add('selecionada');

    setTimeout(() => {
        criaElemento(color).classList.remove('selecionada');
        checaOrdem();
    },100);
}

//funçao que retorna a cor
let criaElemento = (color) => {
    if(color == 0){
        return verde;
    }else if(color == 1){
        return vermelho;
    }else if(color == 2){
        return amarelo;
    }else if(color == 3){
        return azul;
    }
}

//função de proximo nivel do jogo
let nextLevel = () => {
    pontos++;
    variaOrdem();
}

//game over
let gameOver = () => {
    alert(`Pontuação: ${pontos}\nVocê perdeu!\nClique em ok para iniciar um novo jogo!`);
    ordem = [];
    clicaOrdem = [];

    playGame();
}

//funcao de inicio do jogo
let playGame = () => {
    alert('bem vindo ao GENESIS! Iniciando novo jogo!')
    pontos = 0;

    nextLevel();
}

//eventos de clique para as cores
verde.onclick = () => click(0);
vermelho.onclick = () => click(1);
amarelo.onclick = () => click(2);
azul.onclick = () => click(3);

//inicio do jogo
playGame();