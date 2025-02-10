var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(email, name, userId, courses) {
        if (courses === void 0) { courses = 0; }
        this.email = email;
        this.name = name;
        this.userId = userId;
        this.courses = courses;
        this.city = "Abc City";
        this.email = email;
        this.name = name;
        this.userId = userId;
    }
    Object.defineProperty(User.prototype, "getEmail", {
        get: function () {
            return "apple_".concat(this.email);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "setEmail", {
        set: function (email) {
            this.email = email;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "getCourseCount", {
        get: function () {
            return this.courses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "setCourseCount", {
        set: function (n) {
            this.courses = n;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var A = /** @class */ (function (_super) {
    __extends(A, _super);
    function A() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    A.prototype.changeCourseCount = function () {
        this.courses = 4;
    };
    return A;
}(User));
var _v1 = new User("abc@gmail.com", "abc", 1223);
var _v2 = new User("def@gmail.com", "def", 4432);
console.log(_v1);
console.log(_v2);
_v1.setEmail = "hello@123.com";
console.log(_v1.getEmail);
_v1.setCourseCount = 5;
console.log(_v1);
var _v3 = new A("v3@gmail.com", "version3", 544);
_v3.isfamily = true;
_v3.changeCourseCount();
console.log(_v3);
