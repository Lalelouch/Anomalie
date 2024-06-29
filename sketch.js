// gruppo : Lara Bellatalla, Giorgia Bettineschi, Diletta D'Alto
let sound; // file audio
let jumpSound = 7; 
let fft;

let title; // Titolo Glitch
let fps = 24; //Frame per secondo


let multiLinee;

//mixer
let mixer;

//liste colori
let colori1beat;
let colori2beat;


let playButton;

//volume
let volume;
let volumeWidth = 200;
let volumeHeight = 20;

//Scossa
let scossa = [];

//Campana
let campana;


//Valori modificati

let customCursor; // Cursore
let fontSize = 20;


//Rotellone
let roteloneDestro;
let roteloneSinistro;

//Pistola Grossa
let pistolaGrossaSopra;
let pistolaGrossaSotto;

let canvasHeight = 1080;
let canvasWidth = 1920;
let canvasPosition = new Position(108,108, 1812, 972, w=1920, h=1080);

//sideWave
let sideWave;
let ampSideWave;

//Frame Glitch
let frameGlitch;
let frameWidth = 968;
let frameHeight = 808;

//Time Slider
let timeSlider;


function mousePressed() { playButton.handleClick(jumpSound); }

function preload() {
  customCursor = new Cursor("assets\\cursor.png");
  sound = loadSound("UNIEQAV_02_UNI_MIA/UNIEQAV02UNIMIA.alvanoto.mp3");
}

function setup() {
  createCanvas(canvasPosition.w, canvasPosition.h);
  frameRate(fps);
  colorMode(HSL);
  
  //liste colori
  colori1beat = [
    color(0, 100, 42, random(0.5, 1)), //rosso
    color(119, 73, 45, random(0.5, 1)), //verde
    color(184, 100, 50, random(0.5, 1)), //azzurro
  ];

  colori2beat = [
    color(201, 75, 52, random(0.5, 1)), //azzurro
    color(300, 85, 53, random(0.5, 1)), //rosa
    color(164, 82, 64, random(0.5, 1)), // verde acqua
  ];


  fft = new p5.FFT();
  
  customCursor.disableCursor();
  
  frameGlitch = new FrameGlitch(canvasPosition, frameWidth, frameHeight);
  
  // slider Time
  timeSlider = new TimeSlider(canvasPosition, frameWidth, fontSize, sound);
  
  
  //play
  var playPosition = new Position(1504.1,  404.6, 1729.1, 479.6, 225, 75)
  playButton = new PlayButton(playPosition,fontSize, sound);
  
  //SineWave
  var sineWavePosition = new Position(1183.5, 296.3, 1812.3, 336.3, 628.8, 80)
  sineWave = new SineWave(sineWavePosition, 2);

  //Rotelloni
  var rotelloneDxPosition = new Position(1714.5, 108, 1811, 204.5, 96.5, 96.5)
  roteloneDestro = new Rotellone(rotelloneDxPosition, false);
  
  var rotelloneSxPosition = new Position(1184.6, 108, 1281.1, 204.5, 96.5, 96.5)
  roteloneSinistro = new Rotellone(rotelloneSxPosition, true);
  
  //Volume
  var volumePosition = new Position(1375.9, 179.6, 1640.9, 204.6, 265, 25)
  volume = new VolumeSlider(volumePosition, fontSize);
  
  //Pistola grossa
  var pistolaGrossaSopraPosition = new Position(1184.6, 546.9, 1344.6, 706.9, 160, 160)
  pistolaGrossaSopra = new PistolaGrossa(pistolaGrossaSopraPosition)
  var pistolaGrossaSottoPosition = new Position(1183.5, 811.9, 1640.1, 971.9, 160, 160)
  pistolaGrossaSotto = new PistolaGrossa(pistolaGrossaSottoPosition)
  
  //Mixer
  mixer = new Mixer(1);
  var pmixerX = 1811 - mixer.mixerWidth;
  var pmixerY = 971.9 - mixer.mixerHeight;
  mixer.setPosition(pmixerX,pmixerY); 
  
  title = new TitleGlitch("assets\\anomalie.png", 3);
  var frameInternoPosition = frameGlitch.getFrameInternoPosition();
  
  multiLinee = new MultiLineaPunti(25, frameInternoPosition);
  
  //Scossa
  for (let y = 0; y < canvasHeight / 15; y++) {
    for (let x = 0; x < canvasWidth / 15; x++) {
      scossa.push(new Scossa(x * 15, y * 15));
    }
  }
  
   
  //Campana
  campana = new Campana((frameInternoPosition.x0 + frameInternoPosition.x1) /2,(frameInternoPosition.y0 + frameInternoPosition.y1) / 2, 150, 200);
  
}


function draw() {  
  background(0);

  let spectrum = fft.analyze();

  let bass = fft.getEnergy("bass"); 
  let mid = fft.getEnergy("mid"); 
  let treble = fft.getEnergy("treble"); 
  
  var tempoSoundMs = float(nf(sound.currentTime(), 1, 2));
    
  
  var frameInternoPosition = frameGlitch.getFrameInternoPosition();    
  if (playButton.playing) {


    let graffiCondition = graffiAnimation(250, tempoSoundMs, frameInternoPosition);   



    if(!graffiCondition){

      let scossaCondition = ScossaAnimation(tempoSoundMs, scossa);

      if(!scossaCondition){

        var primoBeatCondition = primoBeatAnimation(
          tempoSoundMs,
          colori1beat,
          frameInternoPosition,
          bass
        );

        var secondoBeatCondition = secondoBeatAnimation(
          tempoSoundMs,
          colori2beat,
          frameInternoPosition,
          bass
        );

        let pistolaCondition = pistolaAnimation(30, tempoSoundMs, frameInternoPosition);

        if(!pistolaCondition) spuntoniAnimation(tempoSoundMs, frameInternoPosition, primoBeatCondition);


        lineeWithPointAnimation(tempoSoundMs, multiLinee);

        lineeGlitchAnimation(tempoSoundMs, frameInternoPosition, primoBeatCondition);

        rettangoliGlitchAnimation(tempoSoundMs, frameInternoPosition);

        formeAnimation(tempoSoundMs, frameInternoPosition);      

        CampanaAnimation(tempoSoundMs, campana)
      }

    }



    titleAnimation(title, tempoSoundMs, frameInternoPosition);
  }

  frameGlitch.display();

  //Oggetti fuori cornice
  
  //play
  playButton.display();
  
  //Volume
  volume.update();
  volume.display();
  
  // Mixer
  mixer.update(bass, mid, treble);
  mixer.display();
    
  
  PistolaGrossaAnimation(pistolaGrossaSotto, pistolaGrossaSopra, tempoSoundMs);
  
  //rotellone
  roteloneDestro.angle = map(bass, 0, 255, 0, TWO_PI);
  roteloneSinistro.angle = map(bass, 0, 255, 0, TWO_PI);
  roteloneDestro.display();
  roteloneSinistro.display();
  
  //onda
  sineWave.update(bass);
  sineWave.display();
  
  //Time slider
  timeSlider.update();
  timeSlider.display();

  
  customCursor.display(); //cursore
}
