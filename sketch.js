function preload(){
  launchPage = loadImage("../images/Launch Page.jpg");
  bleachedCoral = loadImage("../images/Bleached Coral.jpg");
  healthyCoral = loadImage("../images/Healthy Coral.jpg");
  boyCharacter = loadImage("../images/Boy Character.jpg");
  girlCharacter = loadImage("../images/Girl Character.jpg");
}

function setup() {
  createCanvas(displayWidth,displayHeight-105);
}

function draw() {
  background(launchPage);

  this.button = createButton('Enter');
  this.button.position(1450,600);
  this.button.size(125,65);

  this.button1 = createButton('Caring for the Corals');
  this.button1.position(700,50);
  this.button1.size(300,50);

  this.button.mousePressed(()=>{
    this.button.hide();
    this.button1.hide();

    this.button2 = createButton('Pick Your Avatar!');
    this.button2.position(700,50);
    this.button2.size(300,50);

    this.button3 = createButton('Boy Character');
    this.button3.position(100,250);
    this.button3.size(450,600);

    this.button4 = createButton('Girl Character');
    this.button4.position(1175,250);
    this.button4.size(450,600);

    this.button3.mousePressed(()=>{
      this.button2.hide();
      this.button3.hide();
      this.button4.hide();

      this.button5 = createButton('Pick a Location!');
      this.button5.position(700,50);
      this.button5.size(300,50);
  
      this.button6 = createButton('Beach');
      this.button6.position(50,250);
      this.button6.size(250,400);
  
      this.button7 = createButton('Bathroom Shower');
      this.button7.position(500,250);
      this.button7.size(250,400);

      this.button8 = createButton('Lake/River');
      this.button8.position(950,250);
      this.button8.size(250,400);
  
      this.button9 = createButton('Ocean/Sea');
      this.button9.position(1400,250);
      this.button9.size(250,400);
    })
  
    this.button4.mousePressed(()=>{
      this.button2.hide();
      this.button3.hide();
      this.button4.hide();

      this.button5 = createButton('Pick a Location!');
      this.button5.position(700,50);
      this.button5.size(300,50);
  
      this.button6 = createButton('Beach');
      this.button6.position(50,250);
      this.button6.size(250,400);
  
      this.button7 = createButton('Bathroom Shower');
      this.button7.position(500,250);
      this.button7.size(250,400);

      this.button8 = createButton('Lake/River');
      this.button8.position(950,250);
      this.button8.size(250,400);
  
      this.button9 = createButton('Ocean/Sea');
      this.button9.position(1400,250);
      this.button9.size(250,400);
  })

  })

  hide();

  drawSprites();
}
