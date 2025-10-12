//VIDEO:https://youtu.be/uInMDqiWzVg
//variable global para saber en que patalla estoy
let pantalla;

//array para cargar las fotos
let imgFondo = [];
let musicaFondo; // variable para el sonido
let musicaActiva = true; // controlar si la música está activada o no

function preload() {
  for (let i = 0; i < 12; i++) {
    imgFondo[i] = loadImage("data/PANTALLA_" + nf(i, 2) + ".jpg");
  }
  musicaFondo = loadSound ("data/cancion.mp3");
}

function setup() {
  createCanvas(640, 480);
  pantalla = 0;
   if (musicaActiva) {
    musicaFondo.loop(); 
   } 
   
}

function draw() {
  let margen = 60;
  let anchoCaja = width - margen * 2;
  
  background(255, 0, 0);

  if (pantalla === 0) {
    mostrarPantallaInicio();

  } else if (pantalla == 1) {
    image(imgFondo[1], 0, 0, width, height);

    push();
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(26);
    text("Tenés que tomar la primera decisión", width / 2, 60);
    pop();

    mostrarBoton("Pasear por el bosque", width / 2 - 150, 400, 250, 50);
    mostrarBoton("Visitar a Apolo", width / 2 + 150, 400, 200, 50);

  } else if (pantalla == 2) {
    image(imgFondo[2], 0, 0, width, height);

    push();
    rectMode(CENTER);
    fill(200, 0, 0);
    rect(width / 2, 40, 500, 50);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(26);
    text("Apolo reta a Artemisa a un duelo", width / 2, 40);
    pop();

    mostrarBoton("Negarse", width / 2 - 200, 400, 180, 40);
    mostrarBoton("Competir en sabiduria", width / 2 + 200, 400, 200, 40);
    mostrarBoton("Competir en caza", width / 2, 400, 150, 40);

  } else if (pantalla == 3) {
    image(imgFondo[3], 0, 0, width, height);

    push();
    rectMode(CENTER);
    fill(200, 0, 0);
    rect(width / 2, 40, 500, 50);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(26);
    text("Apolo se ofende: RIVALIDAD ETERNA", width / 2, 40);
    pop();

    mostrarBoton("Volver a empezar", width / 2 - 150, 400, 250, 50);
    mostrarBoton("Fin", width / 2 + 150, 400, 200, 50);

  } else if (pantalla == 4) {
    image(imgFondo[4], 0, 0, width, height);

    push();
    rectMode(CENTER);
    fill(200, 0, 0);
    rect(width / 2, 60, 560, 60);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(26);
    text("Artemisa pierde HERMANDAD FORTALECIDA", width / 2, 60);
    pop();

    mostrarBoton("Volver a empezar", width / 2 - 150, 400, 250, 50);
    mostrarBoton("Fin", width / 2 + 150, 400, 200, 50);

  } else if (pantalla == 5) {
    image(imgFondo[5], 0, 0, width, height);

    push();
    rectMode(CENTER);
    fill(200, 0, 0);
    rect(width / 2, 67, 500, 80);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(26);
    text("Artemisa gana, RIVALIDAD ETERNA", width / 2, 60);
    pop();

    mostrarBoton("Volver a empezar", width / 2 - 150, 400, 250, 50);
    mostrarBoton("Fin", width / 2 + 150, 400, 200, 50);

  } else if (pantalla == 6) {
    image(imgFondo[6], 0, 0, width, height);

    push();
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(26);
    text("Artemisa encuentra mortales cazando sin permiso", width / 2, 60);
    pop();

    mostrarBoton("Perdonar", width / 2 - 150, 400, 250, 50);
    mostrarBoton("Castigar", width / 2 + 150, 400, 200, 50);

  } else if (pantalla == 7) {
    image(imgFondo[7], 0, 0, width, height);
    
   

 push();
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(26);
    text("Los cazadores vuelven con refuerzos. Artemisa debe elegir", margen, 50, anchoCaja, 100 );
    pop();
    
    mostrarBoton("Dialogar", width / 2 - 150, 400, 250, 50);
    mostrarBoton("Expulsar", width / 2 + 150, 400, 200, 50);
  } else if (pantalla == 8) {
    image(imgFondo[8], 0, 0, width, height);

 push();
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(26);
    text("Te conviertes en una guardiana del bosque respetada", margen, 50, anchoCaja, 100);
    pop();
    
   mostrarBoton("Volver a empezar", width / 2 - 150, 400, 250, 50);
   mostrarBoton("Fin", width / 2 + 150, 400, 200, 50);
   
  }else if (pantalla == 9) {
    image(imgFondo[9], 0, 0, width, height);

 push();
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(26);
    text("Te conviertes en una diosa temida", width / 2, 60);
    pop();
    
   mostrarBoton("Volver a empezar", width / 2 - 150, 400, 250, 50);
   mostrarBoton("Fin", width / 2 + 150, 400, 200, 50);
 
 } else if (pantalla == 10) {
    image(imgFondo[10], 0, 0, width, height);

 push();
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(26);
    text("Los mortales te temen pero Dionisio se enfurece por la violencia", margen, 50, anchoCaja, 100);
    pop();
    
   mostrarBoton("Dialogar", width / 2 - 150, 400, 250, 50);
   mostrarBoton("Pelear", width / 2 + 150, 400, 200, 50);
 }else if (pantalla == 11) {
    image(imgFondo[11], 0, 0, width, height);

 push();
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(26);
text("Comision 3. Profesor David Bedoian. Integrantes: Catalina Hansen y Ornella Nassano ", margen, 50, anchoCaja, 100);
    pop();
    
    mostrarBoton("Volver a empezar", width / 2 , 400, 250, 50);
 }
  

}

function mousePressed() {
  
 if (pantalla === 0 && colisionRectangular(70, 40, 100, 40)) {
  musicaActiva = !musicaActiva; // alterna el estado
  if (musicaActiva) {
    if (musicaFondo && !musicaFondo.isPlaying()) musicaFondo.loop();
  } else {
    if (musicaFondo) musicaFondo.stop();
  }
}
  
  if (pantalla === 0) {
    if (colisionRectangular(width - 150, height - 50, 200, 50)) pantalla = 1;

  } else if (pantalla == 1) {
    if (colisionRectangular(width / 2 - 150, 400, 250, 50)) pantalla = 6;
    if (colisionRectangular(width / 2 + 150, 400, 200, 50)) pantalla = 2;

  } else if (pantalla == 2) {
    if (colisionRectangular(width / 2 - 200, 400, 180, 40)) pantalla = 3;
    if (colisionRectangular(width / 2 + 200, 400, 200, 40)) pantalla = 5;
    if (colisionRectangular(width / 2, 400, 150, 40)) pantalla = 4;

  } else if (pantalla == 3) {
    if (colisionRectangular(width / 2 - 150, 400, 250, 50)) pantalla = 0;
    if (colisionRectangular(width / 2 + 150, 400, 200, 50)) pantalla = 11;

  } else if (pantalla == 4) {
    if (colisionRectangular(width / 2 - 150, 400, 250, 50)) pantalla = 0;
    if (colisionRectangular(width / 2 + 150, 400, 200, 50)) pantalla = 11;

  } else if (pantalla == 5) {
    if (colisionRectangular(width / 2 - 150, 400, 250, 50)) pantalla = 0;
    if (colisionRectangular(width / 2 + 150, 400, 200, 50)) pantalla = 11;

  } else if (pantalla == 6) {
    if (colisionRectangular(width / 2 - 150, 400, 250, 50)) pantalla = 7;
    if (colisionRectangular(width / 2 + 150, 400, 200, 50)) pantalla = 10;

  } else if (pantalla == 7) {
    if (colisionRectangular(width / 2 - 150, 400, 250, 50)) pantalla = 8; // Dialogar
    if (colisionRectangular(width / 2 + 150, 400, 200, 50)) pantalla = 9; // Expulsar
  }
  else if (pantalla == 8) {
    if (colisionRectangular(width / 2 - 150, 400, 250, 50)) pantalla = 0;
    if (colisionRectangular(width / 2 + 150, 400, 200, 50)) pantalla = 11;
}
 else if (pantalla == 9) {
    if (colisionRectangular(width / 2 - 150, 400, 250, 50)) pantalla = 0;
    if (colisionRectangular(width / 2 + 150, 400, 200, 50)) pantalla = 11;
}
else if (pantalla == 10) {
    if (colisionRectangular(width / 2 - 150, 400, 250, 50)) pantalla = 8; // Dialogar
    if (colisionRectangular(width / 2 + 150, 400, 200, 50)) pantalla = 9; // Pelear
}
else if (pantalla == 11) {
    if (colisionRectangular(width / 2 , 400, 250, 50)) pantalla = 0; // Dialogar
   
}
}
// Funciones propias
function colisionRectangular(x_, y_, ancho, alto) {
  return mouseX > x_ - ancho / 2 && mouseX < x_ + ancho / 2 &&
         mouseY > y_ - alto / 2 && mouseY < y_ + alto / 2;
}

function mostrarBoton(texto_, x_, y_, ancho_, alto_) {
  push();
  translate(x_, y_);
  rectMode(CENTER);
  fill(0, 100, 0);
  rect(0, 0, ancho_, alto_, 10);
  fill(255);
  textSize(18);
  textAlign(CENTER, CENTER);
  text(texto_, 0, 0);
  pop();
}

function mostrarPantallaInicio() {
  push();
  image(imgFondo[0], 0, 0, width, height);
  fill(255);
  textAlign(CENTER);
  textSize(30);
  text("Bienvenido a la aventura de Artemisa", width / 2, 80);
  pop();

  mostrarBoton("Toca para comenzar", width - 150, height - 50, 200, 50);
// Botón de música arriba a la izquierda
 mostrarBoton(musicaActiva ? "🔊 ON" : "🔇 OFF",70, 40, 40, 40);   

}
