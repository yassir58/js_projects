"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Bookshelf =
/*#__PURE__*/
function () {
  function Bookshelf() {
    _classCallCheck(this, Bookshelf);

    this.favoriteBooks = [];
  }

  _createClass(Bookshelf, [{
    key: "addFavoriteBook",
    value: function addFavoriteBook(bookName) {
      if (!bookName.includes("Great")) {
        this.favoriteBooks.push(bookName);
      }
    }
  }, {
    key: "printFavoriteBooks",
    value: function printFavoriteBooks() {
      console.log("Favorite Books: " + String(this.favoriteBooks.length));
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.favoriteBooks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var bookName = _step.value;
          console.log(bookName);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }]);

  return Bookshelf;
}();

var book_shelf = new Bookshelf();

function loadBooks(book_shelf) {
  fakeAjax(BOOK_API, book_shelf.addFavoriteBook);
  book_shelf.printFavoriteBooks();
}

var BOOK_API = "https://some.url/api"; // ***********************
// NOTE: don't modify this function at all

function fakeAjax(url, cb) {
  setTimeout(function fakeLoadingDelay() {
    cb(["A Song of Ice and Fire", "The Great Gatsby", "Crime & Punishment", "Great Expectations", "You Don't Know JS"]);
  }, 500);
}

loadBooks(book_shelf);