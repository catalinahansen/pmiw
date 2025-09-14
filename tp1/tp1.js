//VIDEO: https://youtu.be/bJxftEuPg9w
let patron;       // Imagen
let tam = 40;     // Tamaño inicial de cada rombo
let animar = false;

function preload() {
  // Usá exactamente el mismo nombre de archivo que subiste al editor
  patron = loadImage("data/f_47.jpg");
}

function setup() {
  createCanvas(800, 400);

}

function draw() {
  background(255);

  // Lado izquierdo: la imagen original
  image(patron, 0, 0, 400, 400);

  // Lado derecho: interactivo
  if (animar) {
    for (let i = 400; i < 800; i += int(tam)) {
      for (let j = 0; j < 400; j += int(tam)) {
        let x = i + tam / 2;
        let y = j + tam / 2;
        let c = colorSegunPosicion(x, y);
        dibujarRombo(x, y, tam, c);
      }
    }
  } else {
    // Si no está animando, se ve la imagen original en la derecha
    image(patron, 400, 0, 400, 400);
  }
}

// Función que dibuja un rombo
function dibujarRombo(x, y, size, c) {
  push();
  translate(x, y);
  rotate(PI / 4);
  fill(c);
  noStroke();
  rectMode(CENTER);
  rect(0, 0, size * 0.9, size * 0.9);
  pop();
}

// Función que genera colores dinámicos
function colorSegunPosicion(x, y) {
  let d = dist(x, y, mouseX, mouseY);
  let r = map(sin(d * 0.05 + frameCount * 0.05), -1, 1, 100, 255);
  let g = map(cos(d * 0.05), -1, 1, 50, 200);
  let b = random(100, 180);
  return color(r, g, b);
}

// Click en el lado derecho → activa animación
function mousePressed() {
  if (mouseX > 400) {
    animar = true;
    tam = random(30, 60); // cambia tamaño de los rombos
  }
}

// Tecla "R" → reinicia
function keyPressed() {
  if (key === 'r' || key === 'R') {
    tam = 40;
    animar = false;
  }
}
