const hero = document.querySelector('.hero');
const h1 = hero.querySelector ('h1');





hero.addEventListener ('mousemove', shadow);


function shadow (e)
{
	const {offsetWidth:width, offsetHeight:height} = hero;
	let   {offsetX:x, offsetY:y} = e;

	if (this != e.target)
	{
		x = x + e.target.offsetLeft;
		y = y + e.target.offsetTop;
	}
	h1.style.textShadow = `${x} ${y} red`
	console.log (width, height, x, y);
}