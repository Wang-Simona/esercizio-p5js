let font;
let angle = 0;

function preload(){
  font = loadFont('BAUHS93.TTF');
}

let mic;
function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
  mic = new p5.AudioIn();  
  mic.start();
}


function draw() {
  
  let sole_x = width / 2;
  let sole_y = height / 2;
  let sole_d = 60;

//太阳
fill(255,255,0);
noStroke();
ellipseMode(CENTER);
ellipse(sole_x, sole_y, sole_d, sole_d);

// 阳光
let linea = 60;
  stroke(255,255,0);
  strokeWeight(5);

  for (let i = 0; i < 12; i++) {
    let a = angle + (PI / 6) * i; 
    let x1 = sole_x + cos(a) * (sole_d / 2 + 20);
    let y1 = sole_y + sin(a) * (sole_d / 2 + 20);
    let x2 = sole_x + cos(a) * (sole_d / 2 + 20 + linea);
    let y2 = sole_y + sin(a) * (sole_d / 2 + 20 + linea);
    
    line(x1, y1, x2, y2);
  }
  // 让光线旋转速度变慢
  angle += 0.001;

//字体
fill(250);
noStroke();
textSize(50);
textFont(font);
textAlign(CENTER,CENTER);
text("dipingere tutto",width/2,height/1.2);

// 文本宽度
//let textK = "dipingere tutto";
//let textWidthValue = textWidth(textK);
// 文本长度居中
//text(textK, (width - textWidthValue)/2, height/2.5);

//鼠标
fill(255, 20, 147)
circle(mouseX,mouseY,20);

}

//屏幕跟随变化
//function windowResized() {resizeCanvas(windowWidth,windowHeight)}

//截图
//function mouseClicked(){save ("image.png")}

//截图动图
//function mousePressed() {saveGif('myAnimation', 3)}
