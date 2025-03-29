// varibles
var a1 : number|string|boolean|number[]
a1 = 10
a1 = "hello"
a1 = true
a1 = [1,2,3,4,4]

// functions---------------------------------------------------------------------------------------------------------------
function check1(a: number , b : number): boolean | string{
    if(a>b){
        return true
    }else{
        return "no"
    }

}



// void - means you can write console ----------------------------------------------------------------------------------------------
function dontReturn1(str : string) : void{
    console.log("donot return anything");

}
dontReturn1("")

// never - no return no console, only throw error ----------------------------------------------------------------------------------------------------------
function neverReturn1(error : string) : never{
    throw new Error(error)
}

// type aliases ----------------------------------------------------------------------------------------------------------------

type User = {
    name : string | number | boolean,
    email : string,
    phoen : number,
    city : string
}

function createUser1(user : User){

}

createUser1({name : 465765,email : "",phoen : 475645, city:""})


// array with different datatypes
var arr : number[] = [1,2,3,4,5]
var strArr : string[] = ["sai","ganesh","varma"]
var arrayWithNumStr : (number|string)[] = ["sai","ganesh",1,2,3,4]
arrayWithNumStr.map((item)=>{
    if(typeof(item) == "string"){
        console.log(`${item} is the string`)
    }else if(typeof(item) == "number"){
        console.log(`${item} is the number`);
    }
})




// twodimensioanl array

var twodArray1 : (number|string | boolean)[][] = [
    [1,2,3,4,5, true],
    [1,2,3,4, 'himani'],
    ["sai"]
]