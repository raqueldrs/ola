let ybolinha = 300;
let xbolinha = 200;
let diametro = 15
let raio = diametro/2;

let velocidadebolinhax = 6;
let velocidadebolinhay = 6;

function setup (){ 
  createCanvas (600, 400);
}

function draw () {
  background (0)
    circle (xbolinha,ybolinha,diametro);
  xbolinha += velocidadebolinhax
  ybolinha += velocidadebolinhay

  if (xBolinha > width || xBolinha < 0) {
        velocidadeBolinhax *= -1;
    }
  if (yBolinha > height || yBolinha < 0) {
        velocidadeBolinhay *= -1;
    }
}