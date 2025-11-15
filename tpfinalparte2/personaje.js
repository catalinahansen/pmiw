class Personaje {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.tam = 50;
    this.vel = 5;
  }

  actualizar() {
    this.x += constrain(mouseX - this.x, -this.vel, this.vel);
    this.y += constrain(mouseY - this.y, -this.vel, this.vel);
    this.dibujar();
  }

  dibujar() {
    imageMode(CENTER);
    image(personajeImg, this.x, this.y, this.tam, this.tam);
  }
}
