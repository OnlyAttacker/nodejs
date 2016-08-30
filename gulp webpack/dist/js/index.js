webpackJsonp([0,1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Person = __webpack_require__(1);

	var _Person2 = _interopRequireDefault(_Person);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var person = new _Person2.default('gaojiahao', 'male');
	console.log(person);

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Person = function Person(name, gender) {
		_classCallCheck(this, Person);

		this.name = name;
		this.gender = gender;
	};

	exports.default = Person;

/***/ }
]);