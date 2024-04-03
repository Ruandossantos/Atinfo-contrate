const text = "CONTRATE JÁ";
const typingSpeed = 200; // Velocidade de digitação em milissegundos
const loopDelay = 5000; // Tempo de espera antes de reiniciar a animação em milissegundos

function type() {
  let index = 0;
  const typingInterval = setInterval(() => {
    document.getElementById('link').textContent += text[index];
    index++;
    if (index >= text.length) {
      clearInterval(typingInterval); // Limpa o intervalo quando toda a string for digitada
      setTimeout(() => {
        document.getElementById('link').textContent = ''; // Limpa o texto
        type(); // Reinicia a animação após o atraso de loopDelay
      }, loopDelay);
    }
  }, typingSpeed);
}

// Iniciar a animação de digitação quando a página carregar
window.onload = type;


