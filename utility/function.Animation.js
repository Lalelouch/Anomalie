function primoBeatAnimation(tempoSoundMs, colori1beat, position, bass) {
  var primoBeatCondition =
    (tempoSoundMs >= 66 && tempoSoundMs <= 67.02) ||
    (tempoSoundMs >= 68 && tempoSoundMs <= 69.02) ||
    (tempoSoundMs >= 70 && tempoSoundMs <= 71.02) ||
    (tempoSoundMs >= 72 && tempoSoundMs <= 73.02) ||
    (tempoSoundMs >= 74 && tempoSoundMs <= 75.02) ||
    (tempoSoundMs >= 76 && tempoSoundMs <= 77.02) ||
    (tempoSoundMs >= 78 && tempoSoundMs <= 79.02) ||
    (tempoSoundMs >= 80 && tempoSoundMs <= 80.9) ||
    (tempoSoundMs >= 81.15 && tempoSoundMs <= 82.17) ||
    (tempoSoundMs >= 83.13 && tempoSoundMs <= 84.15) ||
    (tempoSoundMs >= 85.11 && tempoSoundMs <= 86.13) ||
    (tempoSoundMs >= 87.09 && tempoSoundMs <= 88.11) ||
    (tempoSoundMs >= 89.07 && tempoSoundMs <= 90.09) ||
    (tempoSoundMs >= 91.05 && tempoSoundMs <= 92.07) ||
    (tempoSoundMs >= 93.03 && tempoSoundMs <= 94.05) ||
    (tempoSoundMs >= 95.01 && tempoSoundMs <= 96.03) ||
    (tempoSoundMs >= 96.99 && tempoSoundMs <= 98.01) ||
    (tempoSoundMs >= 98.97 && tempoSoundMs <= 99.99) ||
    (tempoSoundMs >= 100.95 && tempoSoundMs <= 101.97) ||
    (tempoSoundMs >= 102.93 && tempoSoundMs <= 103.95) ||
    (tempoSoundMs >= 104.91 && tempoSoundMs <= 105.93) ||
    (tempoSoundMs >= 106.89 && tempoSoundMs <= 107.91) ||
    (tempoSoundMs >= 108.87 && tempoSoundMs <= 109.89) ||
    (tempoSoundMs >= 110.85 && tempoSoundMs <= 111.87) ||
    (tempoSoundMs >= 112.83 && tempoSoundMs <= 113.85) ||
    (tempoSoundMs >= 114.81 && tempoSoundMs <= 115.83) ||
    (tempoSoundMs >= 116.79 && tempoSoundMs <= 117.81) ||
    (tempoSoundMs >= 118.77 && tempoSoundMs <= 119.79) ||
    (tempoSoundMs >= 120.75 && tempoSoundMs <= 121.77) ||
    (tempoSoundMs >= 122.73 && tempoSoundMs <= 123.75) ||
    (tempoSoundMs >= 124.71 && tempoSoundMs <= 125.73) ||
    (tempoSoundMs >= 126.69 && tempoSoundMs <= 127.71) ||
    (tempoSoundMs >= 128.67 && tempoSoundMs <= 129.69) ||
    (tempoSoundMs >= 130.65 && tempoSoundMs <= 131.67) ||
    (tempoSoundMs >= 132.63 && tempoSoundMs <= 133.65) ||
    (tempoSoundMs >= 134.61 && tempoSoundMs <= 135.63) ||
    (tempoSoundMs >= 136.59 && tempoSoundMs <= 137.61) ||
    (tempoSoundMs >= 138.57 && tempoSoundMs <= 139.59) ||
    (tempoSoundMs >= 140.55 && tempoSoundMs <= 141.57) ||
    (tempoSoundMs >= 142.53 && tempoSoundMs <= 143.55) ||
    (tempoSoundMs >= 144.51 && tempoSoundMs <= 145.53) ||
    (tempoSoundMs >= 146.49 && tempoSoundMs <= 147.51) ||
    (tempoSoundMs >= 148.47 && tempoSoundMs <= 149.49) ||
    (tempoSoundMs >= 150.45 && tempoSoundMs <= 151.47) ||
    (tempoSoundMs >= 152.43 && tempoSoundMs <= 153.45) ||
    (tempoSoundMs >= 154.41 && tempoSoundMs <= 155.43) ||
    (tempoSoundMs >= 156.39 && tempoSoundMs <= 157.41) ||
    (tempoSoundMs >= 158.37 && tempoSoundMs <= 159.39) ||
    (tempoSoundMs >= 160.35 && tempoSoundMs <= 161.37) ||
    (tempoSoundMs >= 162.33 && tempoSoundMs <= 163.35) ||
    (tempoSoundMs >= 164.31 && tempoSoundMs <= 165.33) ||
    (tempoSoundMs >= 166.29 && tempoSoundMs <= 167.31) ||
    (tempoSoundMs >= 168.27 && tempoSoundMs <= 169.29) ||
    (tempoSoundMs >= 170.25 && tempoSoundMs <= 171.27) ||
    (tempoSoundMs >= 172.23 && tempoSoundMs <= 173.25) ||
    (tempoSoundMs >= 174.21 && tempoSoundMs <= 175.23) ||
    (tempoSoundMs >= 176.19 && tempoSoundMs <= 177.21) ||
    (tempoSoundMs >= 178.17 && tempoSoundMs <= 179.19) ||
    (tempoSoundMs >= 180.15 && tempoSoundMs <= 181.17) ||
    (tempoSoundMs >= 182.13 && tempoSoundMs <= 183.15) ||
    (tempoSoundMs >= 184.11 && tempoSoundMs <= 185.13) ||
    (tempoSoundMs >= 186.09 && tempoSoundMs <= 187.11) ||
    (tempoSoundMs >= 188.07 && tempoSoundMs <= 189.09) ||
    (tempoSoundMs >= 190.05 && tempoSoundMs <= 191.07) ||
    (tempoSoundMs >= 192.03 && tempoSoundMs <= 193.05) ||
    (tempoSoundMs >= 194.01 && tempoSoundMs <= 195.03) ||
    (tempoSoundMs >= 195.99 && tempoSoundMs <= 197.01) ||
    (tempoSoundMs >= 197.97 && tempoSoundMs <= 198.99) ||
    (tempoSoundMs >= 199.95 && tempoSoundMs <= 200.97) ||
    (tempoSoundMs >= 201.93 && tempoSoundMs <= 202.95);
  if (primoBeatCondition) {
    push();
    fill(random(colori1beat));
    noStroke();
    var maxWidth = (position.x1 - position.x0 + bass) / 5;
    square(
      random(position.x0, position.x1),
      random(position.y0, position.y1),
      maxWidth
    );
    square(
      random(position.x0, position.x1),
      random(position.y0, position.y1),
      maxWidth
    );
    square(
      random(position.x0, position.x1),
      random(position.y0, position.y1),
      maxWidth
    );
    pop();
    return true;
  }
  return false;
}

function secondoBeatAnimation(tempoSoundMs, colori2beat, position, bass) {
  var secondoBeatCondition =
    (tempoSoundMs >= 205.24 && tempoSoundMs <= 206.65) ||
    (tempoSoundMs >= 207.18 && tempoSoundMs <= 208.59) ||
    (tempoSoundMs >= 209.12 && tempoSoundMs <= 210.53) ||
    (tempoSoundMs >= 211.06 && tempoSoundMs <= 212.47) ||
    (tempoSoundMs >= 213 && tempoSoundMs <= 214.41) ||
    (tempoSoundMs >= 214.94 && tempoSoundMs <= 216.35) ||
    (tempoSoundMs >= 216.88 && tempoSoundMs <= 218.29) ||
    (tempoSoundMs >= 218.82 && tempoSoundMs <= 220.23) ||
    (tempoSoundMs >= 220.76 && tempoSoundMs <= 222.17) ||
    (tempoSoundMs >= 222.7 && tempoSoundMs <= 224.11) ||
    (tempoSoundMs >= 224.64 && tempoSoundMs <= 226.05) ||
    (tempoSoundMs >= 226.58 && tempoSoundMs <= 227.99) ||
    (tempoSoundMs >= 228.52 && tempoSoundMs <= 229.93) ||
    (tempoSoundMs >= 230.46 && tempoSoundMs <= 231.87) ||
    (tempoSoundMs >= 232.4 && tempoSoundMs <= 233.81) ||
    (tempoSoundMs >= 234.34 && tempoSoundMs <= 235.75) ||
    (tempoSoundMs >= 236.28 && tempoSoundMs <= 237.69) ||
    (tempoSoundMs >= 238.22 && tempoSoundMs <= 239.63) ||
    (tempoSoundMs >= 240.16 && tempoSoundMs <= 241.57) ||
    (tempoSoundMs >= 242.1 && tempoSoundMs <= 243.51) ||
    (tempoSoundMs >= 244.04 && tempoSoundMs <= 245.45) ||
    (tempoSoundMs >= 245.98 && tempoSoundMs <= 247.39) ||
    (tempoSoundMs >= 247.92 && tempoSoundMs <= 249.33) ||
    (tempoSoundMs >= 249.86 && tempoSoundMs <= 251.27) ||
    (tempoSoundMs >= 251.8 && tempoSoundMs <= 253.21) ||
    (tempoSoundMs >= 253.74 && tempoSoundMs <= 255.15) ||
    (tempoSoundMs >= 255.68 && tempoSoundMs <= 257.09) ||
    (tempoSoundMs >= 257.62 && tempoSoundMs <= 259.03) ||
    (tempoSoundMs >= 259.56 && tempoSoundMs <= 260.97) ||
    (tempoSoundMs >= 261.5 && tempoSoundMs <= 262.91) ||
    (tempoSoundMs >= 263.44 && tempoSoundMs <= 264.85) ||
    (tempoSoundMs >= 265.38 && tempoSoundMs <= 266.79) ||
    (tempoSoundMs >= 267.32 && tempoSoundMs <= 268.73) ||
    (tempoSoundMs >= 269.26 && tempoSoundMs <= 270.67) ||
    (tempoSoundMs >= 271.2 && tempoSoundMs <= 272.61) ||
    (tempoSoundMs >= 273.14 && tempoSoundMs <= 274.55) ||
    (tempoSoundMs >= 275.08 && tempoSoundMs <= 276.49) ||
    (tempoSoundMs >= 277.02 && tempoSoundMs <= 278.43) ||
    (tempoSoundMs >= 278.96 && tempoSoundMs <= 280.37) ||
    (tempoSoundMs >= 280.9 && tempoSoundMs <= 282.31) ||
    (tempoSoundMs >= 282.84 && tempoSoundMs <= 284.25) ||
    (tempoSoundMs >= 284.78 && tempoSoundMs <= 286.19) ||
    (tempoSoundMs >= 286.72 && tempoSoundMs <= 288.13) ||
    (tempoSoundMs >= 288.66 && tempoSoundMs <= 290.07) ||
    (tempoSoundMs >= 290.6 && tempoSoundMs <= 292.01) ||
    (tempoSoundMs >= 292.54 && tempoSoundMs <= 293.95) ||
    (tempoSoundMs >= 294.48 && tempoSoundMs <= 295.89) ||
    (tempoSoundMs >= 296.42 && tempoSoundMs <= 297.83) ||
    (tempoSoundMs >= 298.36 && tempoSoundMs <= 299.77) ||
    (tempoSoundMs >= 300.3 && tempoSoundMs <= 301.71) ||
    (tempoSoundMs >= 302.24 && tempoSoundMs <= 303.65) ||
    (tempoSoundMs >= 304.18 && tempoSoundMs <= 305.59) ||
    (tempoSoundMs >= 306.12 && tempoSoundMs <= 307.53) ||
    (tempoSoundMs >= 308.06 && tempoSoundMs <= 309.47) ||
    (tempoSoundMs >= 310 && tempoSoundMs <= 311.41) ||
    (tempoSoundMs >= 311.94 && tempoSoundMs <= 313.35) ||
    (tempoSoundMs >= 313.88 && tempoSoundMs <= 315.29) ||
    (tempoSoundMs >= 315.82 && tempoSoundMs <= 317.23);
  if (secondoBeatCondition) {
    push();
    fill(random(colori2beat));
    var maxWidthA = (position.x1 - position.x0 + bass) / 3;
    var maxWidthB = (position.x1 - position.x0 + bass) / 6;
    noStroke();
    rect(
      random(position.x0, position.x1),
      random(position.y0, position.y1),
      maxWidthA,
      maxWidthB
    );
    rect(
      random(position.x0, position.x1),
      random(position.y0, position.y1),
      maxWidthA,
      maxWidthB
    );
    rect(
      random(position.x0, position.x1),
      random(position.y0, position.y1),
      maxWidthA,
      maxWidthB
    );
    rect(
      random(position.x0, position.x1),
      random(position.y0, position.y1),
      maxWidthA,
      maxWidthB
    );
    rect(
      random(position.x0, position.x1),
      random(position.y0, position.y1),
      maxWidthA,
      maxWidthB
    );
    pop();
    return true
  }
  return false
}

function spuntoniAnimation(tempoSoundMs, position, primoBeatCondition) {
  if (!primoBeatCondition && tempoSoundMs >= 82.17 && tempoSoundMs <= 205) {
    let t = frameCount * 0.01;
    push();
    for (let i = 0; i < 10; i++) {
      let x = random(position.x0, position.x1);
      let y = random(position.y0, position.y1);
      let h = position.y1 - position.y0;
      let maxHeight = position.y1 - position.y0;
      let maxWidth = position.x1 - position.x0;
      stroke(255, 255); 

      let base = maxWidth / 25 + (maxWidth / 30) * sin(t + i);
      noFill();
      strokeWeight(random(2, 4));
      stroke(255); 
      
      beginShape();
      vertex(x, y / 0.8);
      vertex(x - base / 2, y + h);
      vertex(x + base / 2, y + h);
      endShape(CLOSE);
    }
    pop();
  }
}

function lineeWithPointAnimation(tempoSoundMs, multiLinee) {
  if (tempoSoundMs < 35) multiLinee.display(tempoSoundMs);
}

function lineeGlitchAnimation(
  tempoSoundMs,
  position,
  primoBeatCondition = false
) {
  var lineeGlitchCondition = ((tempoSoundMs > 35 && tempoSoundMs <= 82.17) || (tempoSoundMs >= 313.5 && tempoSoundMs <= 344.48) || primoBeatCondition)
  if (lineeGlitchCondition) {
    var lineeGlitch = new MultiLineeGlitch();
    var lineeGlitchColor = new MultiLineeGlitch();
    lineeGlitch.display(position, tempoSoundMs);
    lineeGlitchColor.display(
      position,
      tempoSoundMs,
      (withColor = withColor = tempoSoundMs >= 40 && tempoSoundMs <= 81.15)
    );
  }
}

function rettangoliGlitchAnimation(tempoSoundMs, position) {
  if (tempoSoundMs >= 66 && tempoSoundMs <= 81.15) {
    for (let i = 0; i < tempoSoundMs / 25; i++) {
      push();
      frameRate(24);
      let col = color(random(360), random(100), random(100), random(100));
      fill(col);
      noStroke();
      let x = random(position.x0, position.x1);
      let y = random(position.y0, position.y1);
      let w = random(10, 50);
      let h = random(10, 50);
      rect(x, y, w, h);
      pop();
    }
  }
}

function titleAnimation(title, tempoSoundMs, position) {
  if (tempoSoundMs >= 42 && tempoSoundMs <= 51) {
    push();
    translate((position.x0 + position.x1) /2,(position.y0 + position.y1) / 2);
    title.display(1);
    pop();
  }
}

function graffiAnimation(numeroGraffi, tempoSoundMs, position) {
  var graffi =
    (tempoSoundMs >= 102.35 && tempoSoundMs <= 102.38) ||
    (tempoSoundMs >= 104.39 && tempoSoundMs <= 104.46) ||
    (tempoSoundMs >= 112.23 && tempoSoundMs <= 112.33) ||
    (tempoSoundMs >= 120.08 && tempoSoundMs <= 120.15) ||
    (tempoSoundMs >= 127.53 && tempoSoundMs <= 128) ||
    (tempoSoundMs >= 143.22 && tempoSoundMs <= 143.28) ||
    (tempoSoundMs >= 151.05 && tempoSoundMs <= 151.14) ||
    (tempoSoundMs >= 158.5 && tempoSoundMs <= 158.58) ||
    (tempoSoundMs >= 98.42 && tempoSoundMs <= 98.55) ||
    (tempoSoundMs >= 166.3 && tempoSoundMs <= 166.48) ||
    (tempoSoundMs >= 174.18 && tempoSoundMs <= 174.34) ||
    (tempoSoundMs >= 320.33 && tempoSoundMs <= 320.57) ||
    (tempoSoundMs >= 328.15 && tempoSoundMs <= 328.4) ||
    (tempoSoundMs >= 334.06 && tempoSoundMs <= 334.32) ||
    (tempoSoundMs >= 335.1 && tempoSoundMs <= 336.23);
  if (graffi) {
    for (let i = 0; i < numeroGraffi; i++) {
      var graffio = new Graffio(position);
      graffio.display();
    }
    return true;
  }
  return false;
}

function pistolaAnimation(numeroPistole, tempoSoundMs, position) {
  var pistola =
    (tempoSoundMs >= 106.13 && tempoSoundMs <= 106.32) ||
    (tempoSoundMs >= 113.58 && tempoSoundMs <= 114.15) ||
    (tempoSoundMs >= 115.53 && tempoSoundMs <= 116.12) ||
    (tempoSoundMs >= 117.49 && tempoSoundMs <= 118.07) ||
    (tempoSoundMs >= 119.46 && tempoSoundMs <= 120.03) ||
    (tempoSoundMs >= 121.42 && tempoSoundMs <= 121.59) ||
    (tempoSoundMs >= 123.38 && tempoSoundMs <= 123.55) ||
    (tempoSoundMs >= 125.33 && tempoSoundMs <= 125.51) ||
    (tempoSoundMs >= 127.3 && tempoSoundMs <= 127.48) ||
    (tempoSoundMs >= 137.11 && tempoSoundMs <= 137.28) ||
    (tempoSoundMs >= 139.36 && tempoSoundMs <= 139.53) ||
    (tempoSoundMs >= 141.03 && tempoSoundMs <= 141.21) ||
    (tempoSoundMs >= 144.55 && tempoSoundMs <= 145.12) ||
    (tempoSoundMs >= 146.51 && tempoSoundMs <= 147.08) ||
    (tempoSoundMs >= 148.48 && tempoSoundMs <= 149.04) ||
    (tempoSoundMs >= 150.43 && tempoSoundMs <= 151) ||
    (tempoSoundMs >= 152.39 && tempoSoundMs <= 152.57) ||
    (tempoSoundMs >= 154.35 && tempoSoundMs <= 154.53) ||
    (tempoSoundMs >= 156.32 && tempoSoundMs <= 156.49) ||
    (tempoSoundMs >= 158.28 && tempoSoundMs <= 158.46) ||
    (tempoSoundMs >= 160.24 && tempoSoundMs <= 160.41) ||
    (tempoSoundMs >= 162.2 && tempoSoundMs <= 162.37) ||
    (tempoSoundMs >= 164.16 && tempoSoundMs <= 164.34) ||
    (tempoSoundMs >= 166.13 && tempoSoundMs <= 166.29) ||
    (tempoSoundMs >= 168.08 && tempoSoundMs <= 168.26) ||
    (tempoSoundMs >= 170.05 && tempoSoundMs <= 170.22) ||
    (tempoSoundMs >= 172.01 && tempoSoundMs <= 172.17) ||
    (tempoSoundMs >= 173.57 && tempoSoundMs <= 174.14) ||
    (tempoSoundMs >= 175.53 && tempoSoundMs <= 176.1) ||
    (tempoSoundMs >= 177.49 && tempoSoundMs <= 178.07) ||
    (tempoSoundMs >= 181.41 && tempoSoundMs <= 181.59) ||
    (tempoSoundMs >= 183.37 && tempoSoundMs <= 183.54) ||
    (tempoSoundMs >= 185.53 && tempoSoundMs <= 185.54) ||
    (tempoSoundMs >= 187.29 && tempoSoundMs <= 187.47) ||
    (tempoSoundMs >= 189.26 && tempoSoundMs <= 189.46) ||
    (tempoSoundMs >= 192.46 && tempoSoundMs <= 193.23) ||
    (tempoSoundMs >= 202.58 && tempoSoundMs <= 203.25) ||
    (tempoSoundMs >= 206.51 && tempoSoundMs <= 207.22) ||
    (tempoSoundMs >= 208.52 && tempoSoundMs <= 209.12) ||
    (tempoSoundMs >= 212.37 && tempoSoundMs <= 213.04) ||
    (tempoSoundMs >= 214.34 && tempoSoundMs <= 214.58) ||
    (tempoSoundMs >= 216.08 && tempoSoundMs <= 216.27) ||
    (tempoSoundMs >= 216.32 && tempoSoundMs <= 216.54) ||
    (tempoSoundMs >= 218.27 && tempoSoundMs <= 218.5) ||
    (tempoSoundMs >= 220.24 && tempoSoundMs <= 220.47) ||
    (tempoSoundMs >= 231.31 && tempoSoundMs <= 232) ||
    (tempoSoundMs >= 247 && tempoSoundMs <= 247.29) ||
    (tempoSoundMs >= 257.09 && tempoSoundMs <= 257.37) ||
    (tempoSoundMs >= 261.02 && tempoSoundMs <= 261.29) ||
    (tempoSoundMs >= 263 && tempoSoundMs <= 263.23) ||
    (tempoSoundMs >= 264.54 && tempoSoundMs <= 265.2) ||
    (tempoSoundMs >= 266.51 && tempoSoundMs <= 267.14) ||
    (tempoSoundMs >= 268.47 && tempoSoundMs <= 269.11) ||
    (tempoSoundMs >= 270.44 && tempoSoundMs <= 271.08) ||
    (tempoSoundMs >= 274.34 && tempoSoundMs <= 274.58) ||
    (tempoSoundMs >= 276.33 && tempoSoundMs <= 276.57) ||
    (tempoSoundMs >= 278.26 && tempoSoundMs <= 278.5) ||
    (tempoSoundMs >= 280.23 && tempoSoundMs <= 280.48) ||
    (tempoSoundMs >= 282.2 && tempoSoundMs <= 282.42) ||
    (tempoSoundMs >= 284.16 && tempoSoundMs <= 284.4) ||
    (tempoSoundMs >= 286.11 && tempoSoundMs <= 286.35) ||
    (tempoSoundMs >= 288.36 && tempoSoundMs <= 288.6) ||
    (tempoSoundMs >= 292.04 && tempoSoundMs <= 292.24) ||
    (tempoSoundMs >= 293.34 && tempoSoundMs <= 293.55) ||
    (tempoSoundMs >= 301.4 && tempoSoundMs <= 302.04) ||
    (tempoSoundMs >= 303.37 && tempoSoundMs <= 304.03) ||
    (tempoSoundMs >= 307.3 && tempoSoundMs <= 307.48) ||
    (tempoSoundMs >= 308.56 && tempoSoundMs <= 309.25) ||
    (tempoSoundMs >= 319.05 && tempoSoundMs <= 319.34) ||
    (tempoSoundMs >= 324.25 && tempoSoundMs <= 324.5) ||
    (tempoSoundMs >= 334.33 && tempoSoundMs <= 325.05) ||
    (tempoSoundMs >= 339.53 && tempoSoundMs <= 340.17);

  if (pistola) {
    push();
    colorMode(RGB);
    for (let i = 0; i < numeroPistole; i++) {
      maxHeight = position.y1 - position.y0;
      stroke(255, 255); 
      strokeWeight(random(maxHeight / 30, maxHeight / 25));
      let x1 = position.x0;
      let x2 = position.x1;
      let y = random(position.y0, position.y1);
      line(x1, y, x2, y);
    }
    pop();
    return true;
  }
  return false;
}

function PistolaGrossaAnimation(
  pistolaGrossaSotto,
  pistolaGrossaSopra,
  tempoSoundMs
) {
  push();
  strokeWeight(1);
  stroke(255);
  var pistolaCondition =
    (tempoSoundMs >= 161.49 && tempoSoundMs <= 162.2) ||
    (tempoSoundMs >= 167.4 && tempoSoundMs <= 168.08) ||
    (tempoSoundMs >= 177.2 && tempoSoundMs <= 177.49) ||
    (tempoSoundMs >= 179.46 && tempoSoundMs <= 180.02) ||
    (tempoSoundMs >= 183.09 && tempoSoundMs <= 183.37) ||
    (tempoSoundMs >= 190.52 && tempoSoundMs <= 191.3) ||
    (tempoSoundMs >= 200.3 && tempoSoundMs <= 201.14) ||
    (tempoSoundMs >= 208.16 && tempoSoundMs <= 208.49) ||
    (tempoSoundMs >= 210.42 && tempoSoundMs <= 211.12) ||
    (tempoSoundMs >= 214.08 && tempoSoundMs <= 214.34) ||
    (tempoSoundMs >= 223.48 && tempoSoundMs <= 224.13) ||
    (tempoSoundMs >= 226.11 && tempoSoundMs <= 226.38) ||
    (tempoSoundMs >= 229.36 && tempoSoundMs <= 230.06) ||
    (tempoSoundMs >= 239.16 && tempoSoundMs <= 239.45) ||
    (tempoSoundMs >= 241.41 && tempoSoundMs <= 242.1) ||
    (tempoSoundMs >= 245.05 && tempoSoundMs <= 245.35) ||
    (tempoSoundMs >= 254.45 && tempoSoundMs <= 255.12) ||
    (tempoSoundMs >= 260.33 && tempoSoundMs <= 261.02) ||
    (tempoSoundMs >= 270.13 && tempoSoundMs <= 270.44) ||
    (tempoSoundMs >= 272.39 && tempoSoundMs <= 273.06) ||
    (tempoSoundMs >= 276 && tempoSoundMs <= 276.33) ||
    (tempoSoundMs >= 278.02 && tempoSoundMs <= 278.26) ||
    (tempoSoundMs >= 285.44 && tempoSoundMs <= 286.1) ||
    (tempoSoundMs >= 288.08 && tempoSoundMs <= 288.36) ||
    (tempoSoundMs >= 291.26 && tempoSoundMs <= 291.58) ||
    (tempoSoundMs >= 301.18 && tempoSoundMs <= 301.4) ||
    (tempoSoundMs >= 306.58 && tempoSoundMs <= 307.3) ||
    (tempoSoundMs >= 316.42 && tempoSoundMs <= 317.08) ||
    (tempoSoundMs >= 322.3 && tempoSoundMs <= 323.05) ||
    (tempoSoundMs >= 332.1 && tempoSoundMs <= 332.42) ||
    (tempoSoundMs >= 337.58 && tempoSoundMs <= 338.3);

  pistolaGrossaSotto.update(pistolaCondition);
  pistolaGrossaSopra.update(pistolaCondition);

  pistolaGrossaSotto.display();
  pistolaGrossaSopra.display();
  pop();
}

function formeAnimation(tempoSoundMs, position) {
  var forme =
    (tempoSoundMs >= 115.22 && tempoSoundMs <= 115.28) ||
    (tempoSoundMs >= 119.02 && tempoSoundMs <= 119.06) ||
    (tempoSoundMs >= 122.55 && tempoSoundMs <= 122.59) ||
    (tempoSoundMs >= 130.37 && tempoSoundMs <= 130.55) ||
    (tempoSoundMs >= 112.58 && tempoSoundMs <= 113.33) ||
    (tempoSoundMs >= 114.57 && tempoSoundMs <= 115.35) ||
    (tempoSoundMs >= 116.52 && tempoSoundMs <= 117.32) ||
    (tempoSoundMs >= 120.43 && tempoSoundMs <= 121.19) ||
    (tempoSoundMs >= 124.39 && tempoSoundMs <= 125.12) ||
    (tempoSoundMs >= 126.31 && tempoSoundMs <= 127.07) ||
    (tempoSoundMs >= 128.3 && tempoSoundMs <= 129.03) ||
    (tempoSoundMs >= 132.21 && tempoSoundMs <= 132.54) ||
    (tempoSoundMs >= 134.15 && tempoSoundMs <= 135.05) ||
    (tempoSoundMs >= 136.13 && tempoSoundMs <= 136.47) ||
    (tempoSoundMs >= 138.09 && tempoSoundMs <= 138.41) ||
    (tempoSoundMs >= 140.04 && tempoSoundMs <= 140.4) ||
    (tempoSoundMs >= 142.01 && tempoSoundMs <= 142.38) ||
    (tempoSoundMs >= 143.59 && tempoSoundMs <= 144.33) ||
    (tempoSoundMs >= 145.57 && tempoSoundMs <= 146.28) ||
    (tempoSoundMs >= 147.5 && tempoSoundMs <= 148.27) ||
    (tempoSoundMs >= 149.47 && tempoSoundMs <= 150.22) ||
    (tempoSoundMs >= 151.47 && tempoSoundMs <= 152.17) ||
    (tempoSoundMs >= 153.38 && tempoSoundMs <= 154.23) ||
    (tempoSoundMs >= 155.34 && tempoSoundMs <= 156.06) ||
    (tempoSoundMs >= 157.29 && tempoSoundMs <= 158.05) ||
    (tempoSoundMs >= 159.27 && tempoSoundMs <= 160) ||
    (tempoSoundMs >= 161.23 && tempoSoundMs <= 161.56) ||
    (tempoSoundMs >= 163.2 && tempoSoundMs <= 163.55) ||
    (tempoSoundMs >= 165.16 && tempoSoundMs <= 165.48) ||
    (tempoSoundMs >= 167.11 && tempoSoundMs <= 167.39) ||
    (tempoSoundMs >= 169.07 && tempoSoundMs <= 169.42) ||
    (tempoSoundMs >= 171.03 && tempoSoundMs <= 171.37) ||
    (tempoSoundMs >= 173 && tempoSoundMs <= 173.31) ||
    (tempoSoundMs >= 174.56 && tempoSoundMs <= 175.27) ||
    (tempoSoundMs >= 176.51 && tempoSoundMs <= 177.2) ||
    (tempoSoundMs >= 178.58 && tempoSoundMs <= 139.21) ||
    (tempoSoundMs >= 180.43 && tempoSoundMs <= 181.17) ||
    (tempoSoundMs >= 182.39 && tempoSoundMs <= 183.17) ||
    (tempoSoundMs >= 184.36 && tempoSoundMs <= 125.07) ||
    (tempoSoundMs >= 186.32 && tempoSoundMs <= 187.03) ||
    (tempoSoundMs >= 188.29 && tempoSoundMs <= 189.03) ||
    (tempoSoundMs >= 326.21 && tempoSoundMs <= 326.42) ||
    (tempoSoundMs >= 330.14 && tempoSoundMs <= 330.35) ||
    (tempoSoundMs >= 334.05 && tempoSoundMs <= 334.27) ||
    (tempoSoundMs >= 336.02 && tempoSoundMs <= 326.28) ||
    (tempoSoundMs >= 341.51 && tempoSoundMs <= 342.1);
  if (forme && frameCount % 24 == 0) {
    var randomF = random();
    if (randomF > 0.5) {
      push();
      for (let y = 0; y < windowHeight / 10; y++) {
        for (let x = 0; x < windowWidth / 10; x++) {
          if (random(1) > 0.7) {
        
            let xPos = x * 10;
            let yPos = y * 10;
            let len = random(20, 50);
            if (random(1) > 0.5) {
              // Linee verticali
              line(xPos, yPos, xPos, yPos + len);
            } else {
              // Linee orizzontali
              line(xPos, yPos, xPos + len, yPos);
            }
          }
        }
      }
      for (let i = 0; i < height; i += int(random(5, 20))) {
        if (random(1) > 0.5) {
          stroke(255, 255, 255, random(50, 200));
          line(0, i, width, i);
        }
      }
      pop();
    } else {
      push();
      let words = [
        "glitch",
        "error",
        "anomalie",
        "not found",
        "404",
        "light",
        "not exist",
        "synesthesia",
      ];
      textSize(random(15, 20));
      textAlign(CENTER, CENTER);
      for (let i = 0; i < 50; i++) {
        let x = random(position.x0, position.x1);
        let y = random(position.y0, position.y1);
        let word = random(words);
        let flicker = random(200, 255);
        fill(255, flicker);
        text(word, x, y);
      }
      pop();
    }
  }
}

function ScossaAnimation(tempoSoundMs, lines) {
  var ScossaCondition =
    (tempoSoundMs >= 174.42 && tempoSoundMs <= 175.02) ||
    (tempoSoundMs >= 176.42 && tempoSoundMs <= 177.03) ||
    (tempoSoundMs >= 178.33 && tempoSoundMs <= 178.53) ||
    (tempoSoundMs >= 180.26 && tempoSoundMs <= 180.47) ||
    (tempoSoundMs >= 182.26 && tempoSoundMs <= 182.46) ||
    (tempoSoundMs >= 184.2 && tempoSoundMs <= 184.4) ||
    (tempoSoundMs >= 186.16 && tempoSoundMs <= 186.43) ||
    (tempoSoundMs >= 188.12 && tempoSoundMs <= 188.42) ||
    (tempoSoundMs >= 205.32 && tempoSoundMs <= 206.02) ||
    (tempoSoundMs >= 207.33 && tempoSoundMs <= 207.56) ||
    (tempoSoundMs >= 209.31 && tempoSoundMs <= 209.51) ||
    (tempoSoundMs >= 211.24 && tempoSoundMs <= 211.47) ||
    (tempoSoundMs >= 213.21 && tempoSoundMs <= 213.47) ||
    (tempoSoundMs >= 215.2 && tempoSoundMs <= 215.39) ||
    (tempoSoundMs >= 217.11 && tempoSoundMs <= 217.34) ||
    (tempoSoundMs >= 219.1 && tempoSoundMs <= 219.31) ||
    (tempoSoundMs >= 221.1 && tempoSoundMs <= 221.3) ||
    (tempoSoundMs >= 223.02 && tempoSoundMs <= 223.3) ||
    (tempoSoundMs >= 225 && tempoSoundMs <= 225.22) ||
    (tempoSoundMs >= 226.57 && tempoSoundMs <= 227.19) ||
    (tempoSoundMs >= 228.52 && tempoSoundMs <= 229.16) ||
    (tempoSoundMs >= 230.44 && tempoSoundMs <= 231.14) ||
    (tempoSoundMs >= 232.44 && tempoSoundMs <= 233.03) ||
    (tempoSoundMs >= 234.39 && tempoSoundMs <= 235.03) ||
    (tempoSoundMs >= 236.36 && tempoSoundMs <= 236.57) ||
    (tempoSoundMs >= 238.31 && tempoSoundMs <= 238.56) ||
    (tempoSoundMs >= 240.3 && tempoSoundMs <= 240.54) ||
    (tempoSoundMs >= 242.23 && tempoSoundMs <= 242.44) ||
    (tempoSoundMs >= 244.18 && tempoSoundMs <= 244.43) ||
    (tempoSoundMs >= 246.16 && tempoSoundMs <= 246.36) ||
    (tempoSoundMs >= 248.12 && tempoSoundMs <= 248.34) ||
    (tempoSoundMs >= 250.06 && tempoSoundMs <= 250.29) ||
    (tempoSoundMs >= 252.04 && tempoSoundMs <= 252.24) ||
    (tempoSoundMs >= 254.02 && tempoSoundMs <= 254.24) ||
    (tempoSoundMs >= 255.57 && tempoSoundMs <= 256.2) ||
    (tempoSoundMs >= 257.57 && tempoSoundMs <= 258.18) ||
    (tempoSoundMs >= 259.48 && tempoSoundMs <= 260.09) ||
    (tempoSoundMs >= 261.44 && tempoSoundMs <= 262.03) ||
    (tempoSoundMs >= 263.38 && tempoSoundMs <= 264.01) ||
    (tempoSoundMs >= 265.34 && tempoSoundMs <= 265.54) ||
    (tempoSoundMs >= 267.35 && tempoSoundMs <= 267.55) ||
    (tempoSoundMs >= 269.28 && tempoSoundMs <= 269.49) ||
    (tempoSoundMs >= 271.27 && tempoSoundMs <= 271.48) ||
    (tempoSoundMs >= 273.22 && tempoSoundMs <= 273.43) ||
    (tempoSoundMs >= 275.18 && tempoSoundMs <= 275.39) ||
    (tempoSoundMs >= 277.14 && tempoSoundMs <= 277.34) ||
    (tempoSoundMs >= 279.09 && tempoSoundMs <= 279.32) ||
    (tempoSoundMs >= 281.07 && tempoSoundMs <= 281.27) ||
    (tempoSoundMs >= 283.05 && tempoSoundMs <= 283.25) ||
    (tempoSoundMs >= 285.02 && tempoSoundMs <= 285.21) ||
    (tempoSoundMs >= 286.55 && tempoSoundMs <= 287.15) ||
    (tempoSoundMs >= 288.53 && tempoSoundMs <= 289.13) ||
    (tempoSoundMs >= 290.48 && tempoSoundMs <= 291.08) ||
    (tempoSoundMs >= 292.43 && tempoSoundMs <= 293) ||
    (tempoSoundMs >= 294.38 && tempoSoundMs <= 295.01) ||
    (tempoSoundMs >= 296.33 && tempoSoundMs <= 296.54) ||
    (tempoSoundMs >= 298.32 && tempoSoundMs <= 298.54) ||
    (tempoSoundMs >= 300.25 && tempoSoundMs <= 300.47) ||
    (tempoSoundMs >= 302.24 && tempoSoundMs <= 302.43) ||
    (tempoSoundMs >= 304.18 && tempoSoundMs <= 304.41) ||
    (tempoSoundMs >= 306.18 && tempoSoundMs <= 306.37) ||
    (tempoSoundMs >= 308.1 && tempoSoundMs <= 308.31) ||
    (tempoSoundMs >= 310.09 && tempoSoundMs <= 310.3) ||
    (tempoSoundMs >= 312.04 && tempoSoundMs <= 312.24);
  push();
  stroke(255);
  if (ScossaCondition) {
    for (let i = 0; i < lines.length; i++) {
      lines[i].display();
    }
    pop();
  }
}

function CampanaAnimation(tempoSoundMs, campana) {
  let campanaCondition =
    (tempoSoundMs >= 189.58 && tempoSoundMs <= 205) ||
    (tempoSoundMs >= 213.18 && tempoSoundMs <= 216.28) ||
    (tempoSoundMs >= 220.52 && tempoSoundMs <= 313.45);

  if (campanaCondition) {
    campana.display();
  }
}