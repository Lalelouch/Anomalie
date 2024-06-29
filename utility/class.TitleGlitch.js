class TitleGlitch {
  constructor(name, interval) {
    let glitch = new Glitch();
    this.interval = interval;
    loadImage(name, function (im) {
    
      let resizedImage = createImage(im.width/4, im.height/4);
      resizedImage.copy( im, 0, 0, im.width, im.height, 0, 0, resizedImage.width, resizedImage.height);
      let fixedType = glitch.types[2]; 
      glitch.loadType(fixedType); 
      glitch.loadImage(resizedImage);
    });
    this.glitch = glitch;
  }

  display(size) {
    push();
    imageMode(CENTER);
    scale(size);
    if (frameCount % this.interval == 0) {
      this.glitch.resetBytes();
      this.glitch.randomBytes();
      this.glitch.buildImage(function () {
      });
    }
    image(this.glitch.image, 0, 0);
    pop();
  }
}