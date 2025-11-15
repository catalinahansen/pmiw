// video: https://youtu.be/fNSfaZF-4yQ

let juego;
let fondo;
let personajeImg;
let enemigoMaloImg;
let enemigoBuenoImg;

function preload() {
  fondo = loadImage("data/fondo.jpg");
  personajeImg = loadImage("data/personaje.jpg");
  enemigoMaloImg = loadImage("data/enemigoMalo.jpg");
  enemigoBuenoImg = loadImage("data/enemigoBueno.jpg");
}

function setup() {
  createCanvas(400, 400);
  juego = new Juego();
  noCursor();
}

function draw() {
  juego.actualizar();
}

function mousePressed() {
  juego.press();
}

// cursor desactivado
function miCursor() {}
