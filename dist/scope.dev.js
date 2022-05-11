"use strict";

var _this = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function Class_test(name) {
  this.name = name;
}

Class_test.prototype.ask = function () {
  console.log("how are you today ? " + _this.name);
};

var person = new Class_test("yassir");
person.ask();

var Student =
/*#__PURE__*/
function () {
  function Student(name) {
    _classCallCheck(this, Student);

    this.name = name;
  }

  _createClass(Student, [{
    key: "greet",
    value: function greet() {
      console.log("hello " + this.name);
    }
  }, {
    key: "ask",
    value: function ask(topic) {
      if (topic.includes("weather")) {
        console.log("how is the weather today ?");
      } else if (topic.includes("name")) {
        console.log("what is your name ?");
      } else if (topic.includes("age")) {
        console.log("how old are you" + this.name);
      }
    }
  }]);

  return Student;
}();

var std_1 = new Student("yassir");
std_1.greet();
std_1.ask("age");