class Juego {
  constructor() {
    this.p = new Personaje();
    this.enemigos = [];
    this.cantEnemigos = 5;
    this.puntos = 0;
    this.vidas = 1;
    this.estado = 0; 
  }

  actualizar() {

    // FONDO SIEMPRE
    image(fondo, 0, 0, width, height);

    if (this.estado === 0) {
      this.pantallaInicio();

    } else if (this.estado === 1) {

      this.evaluarColisiones();

      for (let e of this.enemigos) {
        e.actualizar();
      }

      this.p.actualizar();

      // HUD
      fill(255);
      textAlign(LEFT);
      text("PUNTOS: " + this.puntos, 20, 20);

      textAlign(RIGHT);
      text("VIDAS: " + this.vidas, width - 20, 20);

      if (this.puntos >= 2000)
        this.estado = 3;

    } else if (this.estado === 2) {
      this.pantallaPerdiste();

    } else if (this.estado === 3) {
      this.pantallaGanaste();
    }
  }

  iniciarJuego() {
    this.p = new Personaje(); // reinicia completamente
    this.puntos = 0;
    this.vidas = 1;
    this.estado = 1;

    this.enemigos = [];
    for (let i = 0; i < this.cantEnemigos; i++) {
      this.enemigos.push(new Enemigo());
    }
  }

  press() {
    if (this.estado === 0 || this.estado === 2 || this.estado === 3) {
      this.iniciarJuego();
    }
  }

  pantallaInicio() {
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(25);
    text("CLIC PARA EMPEZAR", width / 2, height / 2);
  }

  pantallaPerdiste() {
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(30);
    text("¡PERDISTE!", width / 2, height / 2 - 20);
    textSize(16);
    text("Clic para reiniciar", width / 2, height / 2 + 20);
    textSize(14);
    text("Profesor: David Bedoian", width / 2, height / 2 + 40);
    textSize(14);
    text("Catalina hansen", width / 2, height / 2 + 60);
  }

  pantallaGanaste() {
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(30);
    text("¡GANASTE!", width / 2, height / 2 - 20);
    textSize(16);
    text("Clic para jugar otra vez", width / 2, height / 2 + 20);
    textSize(14);
    text("Profesor: David Bedoian", width / 2, height / 2 + 40);
    textSize(14);
    text("Catalina hansen", width / 2, height / 2 + 60);
  }

  evaluarColisiones() {
    for (let e of this.enemigos) {
      let d = dist(e.x, e.y, this.p.x, this.p.y);

      if (d < e.tam / 2 + this.p.tam / 2) {

        if (e.tipo === 0) {
          // enemigo malo
          this.estado = 2;

        } else {
          // enemigo bueno
          this.puntos += 400;
          e.reiniciarMovimiento();
        }
      }
    }
  }
}
