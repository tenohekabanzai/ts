var scores = [];
var names = [];
function identity_One(val) {
    return val;
}
function identity_Two(val) {
    return val;
}
function identity_Three(val) {
    return val;
}
function identity_Four(val) {
    console.log(typeof val);
    return val;
}
console.log('----------------------------------------------');
console.log(identity_Three(1));
console.log(identity_Three("22354abc"));
console.log(identity_Three(true));
console.log(identity_Three(["Hello", "good", "morning"]));
console.log('----------------------------------------------');
console.log(identity_Four(1));
console.log(identity_Four("uijfuivb"));
console.log(identity_Four(true));
console.log(identity_Four(["Hello", "good", "morning"]));
console.log('----------------------------------------------');
//  generic func
function getSearchProducts(products) {
    var myIndex = 5;
    return products[myIndex];
}
var fetchProduct = function (products) {
    var myIndex = 5;
    return products[myIndex];
};
console.log(fetchProduct([1, 2, 7, 3, 4, 5, 102, 232]));
console.log('----------------------------------------------');
function anotherFunction(arg1, arg2) {
    return { arg1: arg1, arg2: arg2 };
}
console.log(anotherFunction("Toto", 'toto@gmail.com'));
console.log(anotherFunction("fruits", ['apples', 'pears', 'oranges']));
console.log('----------------------------------------------');
// generic class
var Sellable = /** @class */ (function () {
    function Sellable() {
        this.Cart = [];
    }
    Sellable.prototype.addToCart = function (products) {
        this.Cart.push(products);
    };
    return Sellable;
}());
var a1 = new Sellable();
var c1 = { name: 'c1', author: 'john doe', subject: 'sys desn' };
var c2 = { name: 'c2', author: 'jane austen', subject: 'devops' };
var q1 = { name: 'q1', type: "123" };
a1.addToCart(c1);
a1.addToCart(c2);
a1.addToCart(q1);
console.log(a1);
