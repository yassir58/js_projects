"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var array = [];
var object = {};
var name = "dksj";
var something = name / 6;
console.log(_typeof(null));
console.log(_typeof(object));
console.log(_typeof(array));
console.log(typeof undefined === "undefined" ? "undefined" : _typeof(undefined));
console.log(typeof test === "undefined" ? "undefined" : _typeof(test));
console.log(NaN);
console.log(Number.isNaN(something));
console.log(Number("45"));