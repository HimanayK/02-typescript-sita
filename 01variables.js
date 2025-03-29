"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// number
var a = 10;
console.log(a);
// string
var b = "sai ganesh varma";
console.log(b);
// undefined
var c;
console.log(c);
// null
var d = null;
console.log(d);
// object
var obj = {
    name: 'sai',
};
// array with numbers
var arr = [10, 20, 30, 40];
console.log(arr);
// array with strings
var str = ["a", "b", "c", "d"];
console.log(str);
var newStr = ["a", "b", "c", "d"];
console.log(newStr);
// any 
var anyStr = "sai";
var anyNum = 10;
var anyObj = {
    name: "sai"
};
// function with return type
function add(a, b) {
    return a + b;
}
console.log(10, 10);
// function return type
function add1(a, b) {
    return a + b;
}
console.log(add1(10, 11));
// arrow function
var add2 = function (a, b) {
    return a + b;
};
console.log(add2(11, 10));
var e = 10;
var f = 20;
if (e > f) {
    console.log("a is the bigger");
}
else {
    console.log("b is the bigger");
}
// ternary operator
var num1 = 10;
var num2 = 20;
var result = (num1 > num2) ? true : false;
// for loop
for (var i = 0; i <= 10; i++) {
    console.log(i);
}
// while loop
var a1 = 10;
