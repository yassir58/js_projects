var array = ["anas", "yahya", "yassir"];

for (let names of array)
{
    console.log (names);
}

function say_hi(name)
{
    console.log ("hello " + name);
}
var favoriteBooks = [];
function addFavoriteBook(bookName)
{
  
    if (!bookName.includes("Great"))
    {
        favoriteBooks.push(bookName);
    }
}

addFavoriteBook ("balala");
addFavoriteBook("the Great Gatsby");
addFavoriteBook ("alice in wonderland");

for (let books of favoriteBooks)
{
    console.log (books);
}