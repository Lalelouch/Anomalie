class VolumeSlider {
  constructor(volumePosition, fontSize) {
    this.volumePosition = volumePosition;
    this.fontSize = fontSize;
    this.value = 30;
    sound.setVolume(30);
  }

  update() {
    if (mouseIsPressed && mouseX > this.volumePosition.x0 && mouseX < this.volumePosition.x1 && mouseY > this.volumePosition.y0 && mouseY < this.volumePosition.y1) {
      this.value = mouseX - this.volumePosition.x0;
      let volume = map(this.value, 0, this.volumePosition.w, 0, 1);
      sound.setVolume(volume);
    } 
  }

  display() {
    push()
    textAlign(CENTER);
    textSize(this.fontSize);
    fill(255);
    noStroke();
    
    text('Volume', this.volumePosition.x0 + this.volumePosition.w /2, this.volumePosition.y0 - 20);
    // slider
    strokeWeight(2);
    stroke(255);
    fill(0);
    rect(this.volumePosition.x0, this.volumePosition.y0, this.volumePosition.w, this.volumePosition.h);
    
    let coloredWidth = map(this.value, 0, this.volumePosition.w, 0, this.volumePosition.w);
    fill(255);
    noStroke();
    rect(this.volumePosition.x0, this.volumePosition.y0, coloredWidth, this.volumePosition.h); 
    
    // cerchio
    strokeWeight(2);
    stroke(0);
    fill(255);
    circle(this.volumePosition.x0 + this.value, this.volumePosition.y0 + this.volumePosition.h/2, this.volumePosition.h);
pop()
 
  }
}
