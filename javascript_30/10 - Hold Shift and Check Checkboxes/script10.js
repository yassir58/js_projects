const checkboxes = Array.from (document.querySelectorAll('input[type=checkbox]'));
let check_flag = 0;
let last_checked = 0;


checkboxes.forEach (elm =>
{
	let index = 0;
	elm.addEventListener ('click', (e)=>{
		if (check_flag == 1)
			handle_shift (checkboxes.findIndex (item=>item == elm));
		else if (elm.checked == true)
			last_checked = checkboxes.findIndex (item=>item == elm);
		});
});


document.addEventListener ('keydown', (e)=>
{
	if (e.keyCode == 16)
		check_flag = 1;
});

document.addEventListener ('keyup', (e)=>
{
	if (e.keyCode == 16)
		check_flag = 0;
});


function handle_shift (index)
{
	let i;
	if (index > last_checked)
	{
		i = last_checked;
		while (i < index)
		{
			checkboxes[i].checked = true;
			i++;
		}
	}
	else
	{
		i = last_checked;
		while (i > index)
		{
			checkboxes[i].checked = true;
			i--;	
		}
	}
}