"use strict";

var array = ["anas", "yahya", "yassir"];

for (var _i = 0, _array = array; _i < _array.length; _i++) {
  var names = _array[_i];
  console.log(names);
}

function say_hi(name) {
  console.log("hello " + name);
}

var favoriteBooks = [];

function addFavoriteBook(bookName) {
  if (!bookName.includes("Great")) {
    favoriteBooks.push(bookName);
  }
}

addFavoriteBook("balala");
addFavoriteBook("the Great Gatsby");
addFavoriteBook("alice in wonderland");

for (var _i2 = 0, _favoriteBooks = favoriteBooks; _i2 < _favoriteBooks.length; _i2++) {
  var books = _favoriteBooks[_i2];
  console.log(books);
}