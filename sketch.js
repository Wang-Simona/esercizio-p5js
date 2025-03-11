let mic;
let font;
function preload(){
  font = loadFont('BAUHS93.TTF');
}

function setup() {
  createCanvas(500, 500);
  background(0);
}

mic=new p5.AudioIn();

function draw() {

//圆
fill(240,255,255);
ellipse(width/2,height/2,100,100);

//字体
fill(250);
textSize(70);
textFont(font);
//textAlign(CENTER);
//text("dipingere tutto",200,300);

// 文本宽度
let textK = "dipingere tutto";
let textWidthValue = textWidth(textK);

// 文本长度居中
text(textK, (width - textWidthValue) / 2, height/3);

//鼠标
noStroke();
fill(255, 20, 147)
circle(mouseX,mouseY,20);

}
