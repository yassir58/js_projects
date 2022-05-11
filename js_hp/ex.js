class BookShelf {
	constructor ()
	{
		this.favoriteBooks = [];
	}
	addFavoriteBooks (bookName)
	{
		if (!bookName.includes("Great"))
		{
			console.log (`book : ${bookName}`);
			this.favoriteBooks.push(bookName);
		}
	}
	printFavoriteBooks ()
	{
		console.log (`Books Number ${String(this.favoriteBooks.length)}`);
		for (let book of this.favoriteBooks)
		{
			console.log(book);
		}
	}
}


var my_shelf = new BookShelf ();
var BOOK_API = "https://book_api.com/api/xzw"

function loodBooks (shelf)
{
	fakeAjax(BOOK_API,(books)=>
	{
		for (let book of books)
		{
			shelf.addFavoriteBooks(book);
		}
		shelf.addFavoriteBooks();
	});
}




function fakeAjax (url,cf)
{
	if (!url.includes(BOOK_API))
		console.log ("request denied !");
	else {

		console.log ("waiting for response ...");
		setTimeout (()=>
		{
			cf ([
				"the song of ice and fire",
				"the art of war",
				"The great gatsby",
				"crime & punishment"
			]);
		}, 700);
	}
}

loodBooks(my_shelf);
