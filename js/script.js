
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}


var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

pincel.fillStyle = 'white';
pincel.fillRect(0, 0, 600, 400);

var raio = 10;

function circulo(x, y, raio, cor) {
  pincel.fillStyle = cor;
  pincel.beginPath();
  pincel.arc(x, y, raio, 0, 2 * 3.14);
  pincel.fill();
}

function alvo(x, y) {
  circulo(x, y, raio + 20, 'red');
  circulo(x, y, raio + 10, 'white');
  circulo(x, y, raio, 'red');
}

var xRandom;
var yRandom;

function random(maximo) {
  return Math.floor(Math.random() * maximo);
}

function limparCanva() {
  pincel.clearRect(0, 0, 600, 400);
}

function atualizaCanva() {

  if (condicao) {
    limparCanva();
    xRandom = random(600);
    yRandom = random(400);
    alvo(xRandom, yRandom);
  }
}

setInterval(atualizaCanva, 1500);

var pontuacao = 0;
var condicao = false;
var tentativas = 0;

function click(evento) {
  var x = evento.pageX - tela.offsetLeft;
  var y = evento.pageY - tela.offsetTop;

  if (condicao) {

    if ((x > xRandom - raio) &&
      (x < xRandom + raio) &&
      (y > yRandom - raio) &&
      (y < yRandom + raio)) {

      pontuacao = pontuacao + 1;
      tentativas += 1;

      document.getElementById("pontuacao").innerHTML = pontuacao + "/" + tentativas;
    }

    else {
      pontuacao;
      tentativas += 1;
      document.getElementById("pontuacao").innerHTML = pontuacao + "/" + tentativas;

    }
  }
}

//function cadastrarNome() {

//let nome = document.querySelector("#nome");
//let lista = document.querySelector("#listar_nomes");

//let li = document.createElement("li");
//li.innerHTML = nome.value;
//lista.appendChild(li);



//}




tela.onclick = click;



