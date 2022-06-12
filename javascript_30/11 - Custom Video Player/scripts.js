const media = document.querySelector ('video');
const play = document.querySelector ('.toggle');
const player = document.querySelector ('.player');
const progress_bar = document.querySelector ('.progress__filled');
const progress = document.querySelector ('.progress');
const sound = document.querySelector ('[name="volume"]');
const playBackRate = document.querySelector ('[name="playbackRate"]');
const controller_btn  = Array.from (document.querySelectorAll ('.player__button'));
const full_btn = document.querySelector ('#full__button');
let state = 0;
let mousedown = false;
let firstX = 0;
let lastX = 0;
let full = 0;
let playerWidth = player.style.maxWidth;

play.addEventListener ('click', (e)=>toggle_play ());
document.addEventListener ('keydown', key_handler);
media.addEventListener ('click', (e)=>toggle_play ());
media.addEventListener ('timeupdate', video_progress);
sound.addEventListener ('change', ()=>media.volume = sound.value);
controller_btn.forEach (btn=>{btn.addEventListener ('click', progress_control)});
playBackRate.addEventListener ('change', ()=> media.playbackRate = parseInt(playBackRate.value));
progress.addEventListener ('click', edit_progress);
full_btn.addEventListener ('click', toggle_fullscreen);
function toggle_play ()
{
	if (state == 0)
	{
		media.play ();
		state = 1;
		isPaused = 1;
		play.innerText = '❚❚';
	}
	else
	{
		media.pause ();
		state = 0;
		isPaused = 0;
		play.innerText = '►';
	}
}

function video_progress (e)
{
	const qs = window.getComputedStyle(progress);
	progress_bar.style.flexBasis = `${Math.round(((media.currentTime / media.duration) * 100))}%`;
}

function progress_control (e)
{
	const skip_time = Math.round (parseInt (this.dataset.skip));
	media.currentTime += skip_time;
}

function key_handler (e)
{
	console.log (e.keyCode)
	if (e.keyCode == 13)
		toggle_play ();
	else if (e.keyCode == 16)
		media.currentTime = 0;
	else if (e.keyCode == 39)
		media.currentTime += 25;
	else if (e.keyCode == 37)
		media.currentTime += -10;
	else if (e.keyCode == 27)
		document.exitFullscreen ();
}

function handle_drag (e)
{
	if (!mousedown)
		return ;
	console.log (e.offsetX);
	console.log (`first : ${firstX}`);
}

function edit_progress (e)
{
	console.log (e)
	console.log (Math.round(((e.offsetX / media.duration) * 100)))
	progress_bar.style.flexBasis = `${Math.round(((e.offsetX / media.duration) * 100))}%`;
	media.currentTime = Math.round((e.offsetX / (progress.offsetWidth) * media.duration));
}

function toggle_fullscreen ()
{
	if (full == 0)
	{
		media.requestFullscreen ();
		full = 1;
	}
	else
	{
		document.exitFullscreen ();
		full = 0;
	}
}