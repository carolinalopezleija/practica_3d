//let img;

//function preload() {
  // Reemplaza con la ruta o enlace de tu imagen
  //img = loadImage("images/kewpie.jpg");
//}


function setup() {
    createCanvas(710, 400, WEBGL);
    angleMode(DEGREES);
    normalMaterial();
}

function draw() {
    background("black");

     // Push y pop ayuda a separar las secciones

    // Plane
  push();
  translate(-250, -100, 0);
  rotateWithFrameCount();
  plane(70);
  pop();

  // Box
  push();
  translate(75, -100, 0);
  rotateWithFrameCount();
  box(70, 70, 70);
  pop();

  // Cylinder
  push();
  translate(100, -100, 0);
  rotateWithFrameCount();
  cylinder(70, 70);
  pop();

  // Cone
  push();
  translate(275, -100, 0);
  rotateWithFrameCount();
  cone(50, 70);
  pop();
}

function rotateWithFrameCount() {
  rotateZ(frameCount);
  rotateX(frameCount);
  rotateY(frameCount);
}
