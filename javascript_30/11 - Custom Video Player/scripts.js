const media = document.querySelector ('video');
const play = document.querySelector ('.toggle');
const player = document.querySelector ('.player');

let state = 0;

play.addEventListener ('click', (e)=>toggle_play ());
document.addEventListener ('keydown', (e)=>e.keyCode == 13 ? toggle_play ():0);
media.addEventListener ('click', (e)=>toggle_play ());


function toggle_play ()
{
	const maxWidth = getComputedStyle (player).maxWidth.match(/\d+/);
	const px_rate = parseInt (maxWidth[0]) / media.duration;
	console.log (Math.round (px_rate))
	if (state == 0)
	{
		media.play ();
		state = 1;
		play.innerText = '❚❚';
	}
	else
	{
		media.pause ();
		state = 0;
		play.innerText = '►';
	}
}