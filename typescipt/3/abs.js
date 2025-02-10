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
var x = /** @class */ (function () {
    function x(name, email) {
        this.name = name;
        this.email = email;
        this.name = name;
        this.email = email;
    }
    return x;
}());
var y = /** @class */ (function (_super) {
    __extends(y, _super);
    function y(name, email) {
        return _super.call(this, name, email) || this;
    }
    y.prototype.greet = function () {
        console.log("Good Morning!!");
    };
    return y;
}(x));
var _v5 = new y("Abc", "Abc@gmail.com");
console.log(_v5);
_v5.greet();
