const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = [];
const input = document.querySelector ('[type=text]');
const button = document.querySelector ('[type=submit]');

itemsList.addEventListener ('click', (e)=>
{
	let temp;

	if (e.target.checked == true)
		console.log (e.target.dataset.check);
		temp = items.filter(item=>item != e.target.dataset.check);
		items.splice(0, items.length);
		items.push (...temp);
		localStorage.setItem ('list', JSON.stringify (items));
		render_list (JSON.parse (localStorage.getItem ('list')));
});

button.addEventListener ('click', addItems_routine);
const storedList = JSON.parse(localStorage.getItem('list'));
render_list (storedList);
items.push(...storedList);

function addItems_routine (e)
{
	e.preventDefault ();
	if (input.value != "")
	{
		items.push (input.value);
		localStorage.setItem('list', JSON.stringify(items));
	}
	input.value = "";
	render_list (JSON.parse(localStorage.getItem('list')));
}

function render_list (list)
{
	itemsList.innerHTML = "";
	list.forEach(element => {
		let child = document.createElement('li');
		child.innerHTML =  `<input type="checkbox" data-check="${element}"> <span>${element}</span>`;
		child.firstChild.style.display = 'block';
		child.firstChild.style.marginRight = '10px';
		itemsList.appendChild (child);
	});
}