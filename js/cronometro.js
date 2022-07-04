var segundos = 0;
var minutos = 0;
var tempo = 1000;
var cronometro;

function start() {
  cronometro = setInterval(() => { timer(); }, tempo);
}

function play() {
  if (condicao == false) {
    condicao = true;
  } else {
    stop();
  }
}

function stop() {
  clearInterval(cronometro);
  var segundos = 0;
  var minutos = 0;

  document.getElementById('counter').innerHTML = '00:00';

  if (condicao == true) {
    condicao = false;
    pontuacao = 0;
    tentativas = 0;
  } else {
    start();
  }
}


function timer() {
  segundos++;
  
  if(segundos > 10){
    segundos = 0;
    stop();
    openForm();
  } else {
    closeForm();
  }
  
  var format = (minutos < 10 ? '0' + minutos : minutos) + ":" + (segundos < 10 ? '0' + segundos : segundos);

  document.getElementById('counter').innerHTML = format;
}