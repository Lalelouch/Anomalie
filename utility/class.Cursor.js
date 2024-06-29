class Cursor{
  constructor(name){
    this.customCursor = loadImage(name);
  }
  disableCursor(){
    noCursor(); 
  }
  display(){
    //cursore
    push()
    image(this.customCursor, mouseX, mouseY, 32, 32); 
    pop()
  }
}