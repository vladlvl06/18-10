let clicks = 0;


const corBotao = document.getElementById('corBotao');
const clicksDisplay = document.getElementById('clicks');
const imagem = document.getElementById('imagem');


corBotao.addEventListener('click', () => {
    
    document.body.style.backgroundColor = getRandomColor();
    
    
    clicks++;
    clicksDisplay.textContent = `Cliques: ${clicks}`;
});


function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


imagem.addEventListener('mouseover', () => {
    imagem.style.transform = 'scale(1.2)'; 
});

imagem.addEventListener('mouseout', () => {
    imagem.style.transform = 'scale(1)'; 
});