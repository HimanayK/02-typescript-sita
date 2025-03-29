# 02-typescript-sita

| **Reserved Words** | **Strict Mode Reserved Words** | **Contextual Keywords** |
|-----------------|-----------------------------|----------------------|
| break           | as                          | any                  |
| case            | implements                  | boolean              |
| catch           | interface                   | constructor          |
| class           | let                         | declare              |
| const           | package                     | get                  |
| continue        | private                     | module               |
| debugger        | protected                   | require              |
| default         | public                      | number               |
| delete          | static                      | set                  |
| do              | yield                       | string               |
| else            |                             | symbol               |
| enum            |                             | type                 |
| export          |                             | from                 |
| extends         |                             | of                   |
| false           |                             |                      |
| finally         |                             |                      |
| for             |                             |                      |
| function        |                             |                      |
| if              |                             |                      |
| import          |                             |                      |
| in              |                             |                      |
| instanceof      |                             |                      |
| new             |                             |                      |
| null            |                             |                      |
| return          |                             |                      |
| super           |                             |                      |
| switch          |                             |                      |
| this            |                             |                      |
| throw           |                             |                      |
| true            |                             |                      |
| try             |                             |                      |
| typeof          |                             |                      |
| var             |                             |                      |
| void            |                             |                      |
| while           |                             |                      |
| with            |                             |                      |



### 1. Primitive types
- string, number and boolean
- `var a: number | string | boolean | number[];`

### 2. Array -  number[]
- `var arr : number[] = [10,20,30,40]`
- `var str : string[] = ["a","b","c","d"]`

```ts
let arrayWithNumber: number[] = [1,2,3,4,5];
let arrWithString: string[] = ['Himani', 'Deepak'];
let arrayWithNumberString: (number | string)[] = ['Himani', 11, 'Deepak', 12];
arrayWithNumberString.map((item)=>{
    if(typeof(item) == "string"){
        console.log(`${item} is the string`)
    }else if(typeof(item) == "number"){
        console.log(`${item} is the number`);
    }
});

// twodimensioanl array-----------------------------
let twoDArray: (number | string | boolean)[][] = [
    [1, 'str', true],
    ['Himani', 11, 'Deepak'],
    ['Deepak', 'Sharma']
];

console.log(twoDArray);
```

### 3. Special Types: `any` and `unknown`
- `any`: disables the type-checking and allows variable to hold any type of value
- `unknown`: unknown is the type-safe counterpart of any. When a variable is of type unknown, TypeScript allows you check the type before you can use that variable. It is possbile using `typeof` operator 

```ts
let exampleAny: any;
let exampleUnknown: unknown;

// any 
exampleAny = 123;
exampleAny = 'Hello';

// unknown
exampleUnknown = 123;
exampleUnknown = 'World';

// any
exampleAny.allows.anything.you.can.imagine();
let anySetBool: boolean = exampleAny;


// unknown 
if (typeof exampleUnknown == 'string') {
    exampleUnknown.trim();
}

if (typeof exampleUnknown == 'boolean') {
   let unknownSetBool: boolean = exampleUnknown;
}
```
### 4. Object 
```ts
let person: object = {
    myName: 'Himani',
    city: 'Stockholm',
    marks: {
        math: 200,
        science: 400
    },
    test: [4, 6, 7, 8],
    welcome() {
        console.log('Function Declaration');
    },
    greeting: function() {
        console.log('Function Expression!!!')
    },
    right: () => {
        console.log('Arrow function')
    }
};
```

### 5. Functions
```ts
function check(a: number, b: number): boolean | string {
    if ( a>b) {
        return true
    } else {
        return "no"
    }
}
```
### 6. void: 
- do not return a value.
```ts
function dontReturn(str : string) : void{
    console.log("donot return anything");

}
dontReturn("")
```

### 7. never: 
- no return and no console, only throw error
```ts
function neverReturn(error: string): never {
    throw new Error(error)
}
neverReturn('No answer');
```

### 8. Type Alias
- Use to define custom type  using `type` keyword.
- enhance the readability with custom name and reusability of code.

```ts

type Person = {
    personName: string,
    email: string,
    phone: number,
    active: boolean | string | number
};

function createUser (user: Person) {
  return user.personName;
}

let result = createUser({personName: 'Himani', email: 'hk@gmail.com', phone: 5007699413, active: true});
console.log(result);
```

### 9. Tuple
- Tuple is a typed array with a pre-defined length and types for each index 
```ts
let newTuple: [number, string, boolean?];
newTuple = [4, 'str', true];

newTuple.push('newValue', 'newValue2');
console.log(newTuple); // Result: [ 4, 'str', true, 'newValue', 'newValue2' ]

newTuple.pop();
console.log(newTuple); // Result: [ 4, 'str', true, 'newValue' ]

//Example2:
let newTuple1: readonly [number, string, ...(string | number)[]];
newTuple1 = [4, 'str', 1, 'str1', 3, 4];
newTuple1.push('newValue', 'newValue2');  // Error: readonly
```

### 10. Enums - Enumerations
- to define a set of named constant (unchangeable variables)'
- The output of a TypeScript enum is an object

#### 1. Numeric Enums - Default
- for numberic enums it does reverselookup also.
```ts
enum Directions {
    north = 10,
    south = 5,
    east = 3,
    west = 1
};

console.log(Directions);
let currentDirection = Directions.west;
console.log(currentDirection); // 1
console.log(Directions[10]);  // north
/**
 {
  '1': 'west',
  '3': 'east',
  '5': 'south',
  '10': 'north',
  north: 10,
  south: 5,
  east: 3,
  west: 1
}
 */
```
### 2. String Enums

```ts
enum CardinalDirections {
  North = 'North',
  East = "East",
  South = "South",
  West = "West"
};
// logs "North"
console.log(CardinalDirections.North);
// logs "West"
console.log(CardinalDirections.West);
```

```ts
enum fruitsName {
    Apple = "APPLE",
    Banana = "Banana",
    Mango = "Mango",
    Papaya = "Papaya"
}
console.log(fruitsName);  //{ Apple: 'APPLE', Banana: 'Banana', Mango: 'Mango', Papaya: 'Papaya' }
```

#### 3. Heterogeneous Enums: 
```ts
// in output, you see, it does reverselookup for numeric value first
enum studentDetails {
    name = "ABCD",
    age = 20,
    rollno = 12345,
    address = "XYZ Place PQR city",
    school_name = "ABCDEFG"
}
console.log(studentDetails);

/**
 {
  '20': 'age',
  '12345': 'rollno',
  name: 'ABCD',
  age: 20,
  rollno: 12345,
  address: 'XYZ Place PQR city',
  school_name: 'ABCDEFG'
}
 */
 ```
 ---

 ### 11. Interface
 - Interfaces are similar to type aliases , except they only apply to object types.
- Uses extends keyword to use the exisiting interface properties in the new one.

```ts
interface UserDetails {
    name: string,
    age: string,
    email: string,
    class?: number
};

interface Coder extends UserDetails {
    isCoder: boolean,
    hasId?: number
};

interface Profession extends Coder {
    isFrontend: boolean,
    isFullStack?: string
};

interface CompleteStatus extends Profession {
    readonly role: "Junior" | "Associate" | "Senior",
    isActive?: boolean
}

// Using interface to create object
let user: CompleteStatus = {
    name: 'Himani',
    age: '40',
    email: 'HK@gmail.com',
    isCoder: true,
    isFrontend: true,
    role: "Senior"
};

console.log(user);
user.isFrontend = false;
user.role = "Junior";  // Error: Cannot assign to 'role' because it is a read-only property.

// Using interface as return value in function ------------------------------------------------------------------------------
function returnDetails(): UserDetails {
    return {
        name: 'Deepak',
        age: '20',
        email: 'dk@gmail.com',
    }
}

console.log(returnDetails());  //{ name: 'Deepak', age: '20', email: 'dk@gmail.com' }

```