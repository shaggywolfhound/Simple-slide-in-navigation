
var canvas, ctx;

window.onload = init;

function init(){
  canvas = document.querySelector("#myCanvas");
  ctx=canvas.getContext('2d');
  rectDraw();
}
function rectDraw(){
/* filled rectangle*/
ctx.fillStyle='red';
ctx.fillRect(120,10,50,50);
/*outlined rectangle*/
ctx.strokeStyle='orange';
ctx.lineWidth=3; /*thickness of border*/
ctx.strokeRect(10,10,100,100);
/*clear area small box inside red*/
ctx.clearRect(130, 20, 20, 20);

/*Do some text*/
ctx.fillStyle='blue';
ctx.font = 'italic 20pt Calibri';
ctx.fillText("hello", 180, 20);

}
