
// number ----------------------------------------------------------------------------------------------------------
var a : number = 10
console.log(a);

// string ----------------------------------------------------------------------------------------------------------
var b : string = "sai ganesh varma"
console.log(b);

// undefined ----------------------------------------------------------------------------------------------------------
var c : undefined
console.log(c);

// null ----------------------------------------------------------------------------------------------------------
var d : null = null
console.log(d);

// object ----------------------------------------------------------------------------------------------------------
var obj : object = {
    name : 'sai',
    city: 'Delhi'
}
console.log(obj);

// array with numbers ----------------------------------------------------------------------------------------------------------
var arr : number[] = [10,20,30,40]
console.log(arr);

// array with strings
var str : string[] = ["a","b","c","d"]
console.log(str);

var newStr : Array <string> = ["a","b","c","d"]
console.log(newStr);

// any --------------------------------------------------------------------------------------------------------------------------
var anyStr : any = "sai"

var anyNum : any = 10


var anyObj : any = {
    name : "sai"
}


// function with return type ----------------------------------------------------------------------------------------------------------
function add(a: number, b: number) {
    return a + b
}

console.log(10, 10);
export{}

// function return type ----------------------------------------------------------------------------------------------------------
function add1(a: number, b: number): number {
    return a + b
}

console.log(add1(10, 11));
export{}


// arrow function ----------------------------------------------------------------------------------------------------------
var add2 = (a: number,b: number): number => { 
    return a + b
}
console.log(add2(11, 10));


// Conditional Statement ----------------------------------------------------------------------------------------------------------
var e: number = 10
var f: number = 20
if (e > f) {
    console.log("a is the bigger");
} else {
    console.log("b is the bigger");
}



// ternary operator ---------------------------------------------------------------------------------------------------------------------
var num1: number = 10
var num2: number = 20

var result: boolean = (num1 > num2) ? true : false


// for loop ----------------------------------------------------------------------------------------------------------------
for (var i: number = 0; i<=10; i++) {
    console.log(i);
}

// while loop
var a1: number = 10

