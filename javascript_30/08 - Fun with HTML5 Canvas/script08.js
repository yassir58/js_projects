const canvas = document.getElementById ('draw');
const ctx = canvas.getContext ('2d');
const range = document.getElementById ('range');
const color = document.getElementById ('color');
const clear = document.querySelector ('.clear');
const regular = document.querySelector ('.regular');
const round = document.querySelector ('.round');

let isDrawing = false;
let firstX = 0;
let firstY = 0;
let penGenre = 0;
let lineWidth = 0;

ctx.strokeStyle = 'black';
ctx.lineWidth = 100;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

range.addEventListener ('change', (e)=>
{
	console.log (range.value)
	ctx.lineWidth = range.value;
});
color.addEventListener ('change', (e)=>
{
	console.log (color.value)
	ctx.strokeStyle = color.value;
});
round.addEventListener ('click', (e)=>
{
	ctx.lineJoin = 'round';
	ctx.lineCap = 'round';
});
regular.addEventListener ('click', (e)=>{
	ctx.lineJoin = '';
	ctx.lineCap = 'square';
});
clear.addEventListener ('click', (e)=>{

	ctx.clearRect (0, 0, canvas.width, canvas.height);
});

canvas.addEventListener ('mousemove', draw);
canvas.addEventListener ('mousedown',(e)=>{
	isDrawing = true;
	firstX = e.offsetX;
	firstY = e.offsetY;
});
canvas.addEventListener ('mouseup', (e)=>isDrawing 	= false);
canvas.addEventListener ('mouseout', (e)=> isDrawing = false);



function draw(e)
{
	if (!isDrawing)
		return ;
	console.log (`listeninig ${e.offsetX} ${e.offsetY}`);
	ctx.beginPath ();
	ctx.moveTo (firstX, firstY);
	ctx.lineTo (e.offsetX, e.offsetY);
	ctx.stroke (); 
	firstX = e.offsetX;
	firstY = e.offsetY;
	//ctx.fillRect (e.offsetX, e.offsetY, 10, 10);
}
