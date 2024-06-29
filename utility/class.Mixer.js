class Mixer {
  constructor(scaleMixer = 1) {
    this.mixerHeight = 425;
    this.mixerWidth = 388.5;
    this.numSliders = 5;
    this.sliderWidth = 39.1;
    this.sliderHeight = 312.2;
    this.sliderSpacing = 37;
    this.xOffset = 0;
    this.yOffset = 0;
    this.createSliders();
    this.scaleMixer = scaleMixer
  }

  setPosition(x, y) {
    this.xOffset = x;
    this.yOffset = y;
  }

  createSliders() {
    this.sliders = [];
    for (let i = 0; i < this.numSliders; i++) {
      let sliderX = i * (this.sliderWidth + this.sliderSpacing);
      this.sliders.push({
        x: sliderX + 22,
        y: 33,
        w: this.sliderWidth,
        h: this.sliderHeight,
        value: random(0, this.sliderHeight)
      });
    }
  }

  update(bass, mid, treble) {
    for (let i = 0; i < this.sliders.length; i++) {
      let mappedValue;
      if (i < this.numSliders / 3) {
        mappedValue = map(bass, 0, 255, 0, this.sliderHeight);
      } else if (i < (2 * this.numSliders) / 3) {
        mappedValue = map(mid, 0, 255, 0, this.sliderHeight);
      } else {
        mappedValue = map(treble, 0, 255, 0, this.sliderHeight);
      }
      
      this.sliders[i].value = mappedValue;
    }
  }

  display() {
    push();
    translate(this.xOffset, this.yOffset);
    fill(220);
    stroke(255);
    strokeWeight(1);
    noFill();
    rect(0, 0, this.mixerWidth, this.mixerHeight);

    for (let slider of this.sliders) {
      push();
      
      strokeWeight(3);
      stroke(255);
      fill(0);
      rect(slider.x, slider.y, slider.w, slider.h);
      strokeWeight(2);
      stroke(0);
      fill(255);
      rect(slider.x, slider.y + slider.value, slider.w, slider.w);
      fill(255);
      rect(slider.x, slider.y + slider.h + 22, slider.w, 24.9);
      pop();
    }
    pop();
  }
}