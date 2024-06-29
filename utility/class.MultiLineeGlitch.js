class MultiLineeGlitch{
  display(position, tempoSoundMs, withColor = false, randomWeight = random(5, 10)){
    push();
    stroke(255);
    for (let i = 0; i < round(tempoSoundMs) / 50; i++) {
      if (withColor) {
        strokeWeight(randomWeight);
        stroke(this.randomColor(), 1);
      }
      this.randomPosition(position);
    }
    pop(); 
  }
  
  randomPosition(position){
    let y = random(position.y0, position.y1);
    let x1 = random(position.x0, position.x1);
    let x2 = random(position.x0, position.x1);
    return line(x1, y, x2, y)
  }
  
  randomColor(){
    return color(random(360), random(100), random(100), random())
  }
}