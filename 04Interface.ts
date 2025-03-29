// Interface-----------------------------------------------------------------------------------------------------------
interface userDetails {
  name: string;
  age: number;
  email: string;
  isActive?: boolean;
  isAdmin?: any;
}
// Interface reopening with extends keyword ----------------------------------------------------------------------------
interface iSvalued extends userDetails {
  role?: "isadmin" | "guest" | "user" | "hacker";
  isActiver?: "";
}

interface myUser extends iSvalued {
  singer: "yes" | "no";
}
interface isActor extends myUser {
  panIndia: "yes" | "no";
}

// Using interface as object type
var myObj: isActor = {
  name: "java script",
  age: 10,
  email: "",
  isActive: true,
  isAdmin: "",
  role: "isadmin",
  singer: "no",
  panIndia: "yes",
};
console.log(myObj);

myObj.role = "user";
console.log(myObj);

function myUser(): userDetails {
  return {
    name: "",
    age: 10,
    email: "",
    isActive: true,
    isAdmin: "hello",
  };
}
console.log(myUser());


// type Alias -----------------------------------------------------------------------------
type myDel = {
  name: string;
  age: number;
  city: string;
  iSactive: true;
  customers: (number | string)[];
};

var myObjects: myDel = {
  name: "",
  age: 20,
  city: "",
  iSactive: true,
  customers: [1, "2"],
};
