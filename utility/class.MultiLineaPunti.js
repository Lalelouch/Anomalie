class MultiLineaPunti{
  
  constructor(numLinee, position){
    let linee = []
    var maxWidth;
    var l;
    for (let i = 0; i < numLinee; i++) {
      maxWidth = position.x1 - position.x0
      l = random(maxWidth/10, maxWidth/2);
      
      linee.push(new LineaPunti(position.x0, random(position.y0, position.y1), random(10,45), l, 0));
    }
    
    for (let i = 0; i < numLinee; i++) {
      maxWidth = position.x1 - position.x0
      l = random(maxWidth/10, maxWidth/2);
      
      linee.push(new LineaPunti(position.x1 - l, random(position.y0, position.y1), random(10,45), l, 0));
    }
    this.linee = linee
  }
  
  display(tempoSoundMs){
    for (let linea of this.linee) {
      linea.update(tempoSoundMs);
      linea.display();
    }
  }
}