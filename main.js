function preload() {
}
  
  function setup() {
     canvas=createCanvas(500, 500);
    canvas.center();
     webcam= createCapture(VIDEO);
     webcam.hide();
  }

  
  
  function draw() {
    background("white");
    image(webcam, 100, 150, 300, 200 );

    fill(0,160,0);
    stroke(0,160,0);
    rect(435, 28, 30, 400);

    fill(0,160,0);
    stroke(0,160,0);
    rect(28, 435, 400, 30);

    fill(160,0,0); 
    stroke(160,0,0);   
    circle(450, 450, 50);

    fill(160,0,0); 
    stroke(160,0,0);   
    circle(450, 50, 50);

    fill(0,160,0);
    stroke(0,160,0);
    rect(35, 28, 30, 400);

    fill(0,160,0);
    stroke(0,160,0);
    rect(28, 35, 400, 30);

    fill(160,0,0); 
    stroke(160,0,0);   
    circle(50, 50, 50);

    fill(160,0,0); 
    stroke(160,0,0);   
    circle(50, 450, 50);

  }

  
  function takesnapshot(){
    save("Image.png");
  }