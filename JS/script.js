//MENSAGEM boa-fi certo nas horas variáveis//
const divWelcome = document.querySelector('.boa-fi');
const horaAtual = new Date().getHours();

if (horaAtual >= 4 && horaAtual < 12) {
  divWelcome.textContent = 'Bom-Dia!!';
} else if (horaAtual >= 12 && horaAtual < 19) {
  divWelcome.textContent = 'Boa-Tarde';
} else if (horaAtual >= 19 && horaAtual < 24) {
  divWelcome.textContent = 'Boa-Noite!!';
} else {
  divWelcome.textContent = 'Boa-Madrugs!!!';
}

//COR aleatoria no boa-fi//
function corAleatoria() {
  const vermelho = Math.floor(Math.random() * 256);
  const verde = Math.floor(Math.random() * 256);
  const azul = Math.floor(Math.random() * 256);
  return `rgb(${vermelho}, ${verde}, ${azul})`;
}
  
const textoAleatorio = document.getElementById('boa-fi');
const texto = textoAleatorio.textContent;
  
let textoFormatado = '';
  
for (let i = 0; i < texto.length; i++) {
  const letra = texto[i];
  const cor = corAleatoria();
  textoFormatado += `<span style="color: ${cor};">${letra}</span>`;
}
textoAleatorio.innerHTML = textoFormatado;

//Hora atual//
function atualizarRelogio() {
  const elementoRelogio = document.getElementById('relogio');
  const dataHoraAtual = new Date();
  const hora = formatarNumero(dataHoraAtual.getHours());
  const minuto = formatarNumero(dataHoraAtual.getMinutes());
  const segundo = formatarNumero(dataHoraAtual.getSeconds());
  const horario = `${hora}:${minuto}:${segundo}`;
  elementoRelogio.textContent = horario;
}

function formatarNumero(numero) {
  return numero < 10 ? `0${numero}` : numero;
}

setInterval(atualizarRelogio, 1000);