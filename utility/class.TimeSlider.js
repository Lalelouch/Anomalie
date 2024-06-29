class TimeSlider {
  constructor(canvasPosition, frameWidth, fontSize, sound) {
    this.canvasPosition = canvasPosition;
    this.h = fontSize;
    this.x = canvasPosition.x0;
    this.y = canvasPosition.y1 - this.h;
    this.w = frameWidth;
    
    this.sound = sound;
    this.value = 0;
    this.fontSize = fontSize;
  }

  update() {
    if (mouseIsPressed && mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
      this.value = mouseX - this.x;
      let newTime = map(this.value, 0, this.w, 0, this.sound.duration());
      this.sound.jump(newTime);
    } else {
      this.value = map(this.sound.currentTime(), 0, this.sound.duration(), 0, this.w);
    }
  }
  
  formatTime(seconds) {
    let min = floor(seconds / 60);
    let sec = floor(seconds % 60);
    return nf(min, 2) + ':' + nf(sec, 2);
  }

  display() {
    push()
    textSize(this.fontSize);
    fill(255);
    noStroke();
    
    let currentTime = this.formatTime(this.sound.currentTime());
    let duration = this.formatTime(this.sound.duration());
    var titleSlider = 'Time '+currentTime+" / "+duration;
    
    text(titleSlider, this.canvasPosition.x0 , this.canvasPosition.y1 + this.h + 8);
    
    strokeWeight(2);
    stroke(255);
    fill(0);
    rect(this.x, this.y, this.w, this.h);
    
    let coloredWidth = map(this.value, 0, this.w, 0, this.w);
    fill(255);
    noStroke();
    rect(this.x, this.y, coloredWidth, this.h);
    
    strokeWeight(2);
    stroke(0);
    fill(255);
    circle(this.x + this.value, this.y+this.h/2, this.h);
    pop()
  }
}
