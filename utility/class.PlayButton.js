class PlayButton {
  constructor(playPosition, fontSize, sound) {
    this.playPosition = playPosition;
    this.sound = sound;
    this.playing = false;
  }

  display() {
    push()
    fill(0);
    stroke(255);
    strokeWeight(2)
    rect(this.playPosition.x0, this.playPosition.y0,  this.playPosition.w,  this.playPosition.h, 10);
    
    fill(255);
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(fontSize);
    text(this.playing ? 'Stop' : 'Play', this.playPosition.x0 + this.playPosition.w / 2, this.playPosition.y0 + this.playPosition.h / 2);
    pop()
  }

  handleClick(jumpValue) {
    if (mouseX > this.playPosition.x0 && mouseX < this.playPosition.x0 + this.playPosition.w && mouseY > this.playPosition.y0 && mouseY < this.playPosition.y0 + this.playPosition.h) {
      if (this.playing) {
        this.sound.stop();
      } else {
        this.sound.play();
        if(this.sound.currentTime() < jumpValue) 
          this.sound.jump(jumpValue);
        else{
          this.sound.jump(this.sound.currentTime());
        }
        
      }
      
      this.playing = !this.playing; 
    }
  }
}
