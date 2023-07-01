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
var divColorida = document.getElementById("boa-fi");
var hora = new Date().getHours();

if (hora >= 4 && hora < 12) {
  divColorida.style.color = "#ffdf38";/*manhã*/
} else if (hora >= 12 && hora < 19) {
  divColorida.style.color = "#b16400";/*Tarde*/
} else if (hora >= 19 && hora < 23 || hora == 23 && minuto == 59 && segundo < 59) {
  divColorida.style.color = "#3a48b5";/*Noite*/
} else {
  divColorida.style.color = "#a05ce7";/*madrugada*/
}

//Hora atual//
function atualizarRelogio() {
  const elementoRelogio = document.getElementById('relogio');
  const dataHoraAtual = new Date();
  const hora = formatarNumero(dataHoraAtual.getHours());
  const minuto = formatarNumero(dataHoraAtual.getMinutes());
  const segundo = formatarNumero(dataHoraAtual.getSeconds());
  const horario = `${hora}:${minuto}`;
  elementoRelogio.textContent = horario;
}

function formatarNumero(numero) {
  return numero < 10 ? `0${numero}` : numero;
}

setInterval(atualizarRelogio, 500);
