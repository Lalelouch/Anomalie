class LineaPunti {
  constructor(x, y, numPuntini, lunghezza, opacita) {
    this.x = x;
    this.y = y;
    this.numPuntini = numPuntini;
    this.lunghezza = lunghezza;
    this.opacita = opacita;
    this.puntini = [];

    for (let i = 0; i < numPuntini; i++) {
      this.puntini.push({
        offsetX: random(-5, 5),
        offsetY: random(-5, 5),
      });
    }
  }

  update(energia) {
    this.opacita += 0.7;
    for (let puntino of this.puntini) {
      puntino.offsetY = ((random(5, 15) - random(-5, -15)) * energia) / 255;
    }
  }

  display() {
    stroke(255, this.opacita);
    for (let i = 0; i < this.numPuntini - 1; i++) {
      let x1 =
        this.x +
        i * (this.lunghezza / this.numPuntini) +
        this.puntini[i].offsetX;
      let y1 = this.y + this.puntini[i].offsetY;
      let x2 =
        this.x +
        (i + 1) * (this.lunghezza / this.numPuntini) +
        this.puntini[i + 1].offsetX;
      let y2 = this.y + this.puntini[i + 1].offsetY;
      line(x1, y1, x2, y2);
    }
  }

  setOpacita(opacita) {
    this.opacita = opacita;
  }
  setSpostamento(index, offsetX, offsetY) {
    if (index >= 0 && index < this.numPuntini) {
      this.puntini[index].offsetX = offsetX;
      this.puntini[index].offsetY = offsetY;
    }
  }
}
