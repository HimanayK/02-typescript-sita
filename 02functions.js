// varibles
var a;
a = 10;
a = "hello";
a = true;
a = [1, 2, 3, 4, 4];
// functions
function check(a, b) {
    if (a > b) {
        return true;
    }
    else {
        return "no";
    }
}
// void
function dontReturn(str) {
    console.log("donot return anything");
}
dontReturn("");
// never
function neverReturn(error) {
    throw new Error(error);
}
function createUser(user) {
}
createUser({ name: 465765, email: "", phoen: 475645, city: "" });
var arr = [1, 2, 3, 4, 5];
var strArr = ["sai", "ganesh", "varma"];
var arrayWithNumStr = ["sai", "ganesh", 1, 2, 3, 4];
arrayWithNumStr.map(function (item) {
    if (typeof (item) == "string") {
        console.log("".concat(item, " is the string"));
    }
    else if (typeof (item) == "number") {
        console.log("".concat(item, " is the number"));
    }
});
// twodimensioanl array
var twodArray = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4],
    ["sai"]
];
