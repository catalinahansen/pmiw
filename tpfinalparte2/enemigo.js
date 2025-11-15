class Enemigo {
  constructor() {
    this.tam = 60;
    this.velX = random(3, 6);
    this.reiniciarMovimiento();
  }

  actualizar() {
    this.x += this.velX;

    if (this.x > width + this.tam) {
      this.reiniciarMovimiento();
    }

    this.dibujar();
  }

  dibujar() {
    imageMode(CENTER);

    if (this.tipo === 0)
      image(enemigoMaloImg, this.x, this.y, this.tam, this.tam);
    else
      image(enemigoBuenoImg, this.x, this.y, this.tam, this.tam);
  }

  reiniciarMovimiento() {
    this.tipo = random() > 0.8 ? 1 : 0; // 20% bueno
    this.x = -this.tam - random(50, 300);
    this.y = random(this.tam, height - this.tam);
  }
}
