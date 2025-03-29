;
;
;
// Using interface to create object
var user = {
    name: 'Himani',
    age: '40',
    email: 'HK@gmail.com',
    isCoder: true,
    isFrontend: true,
    role: "Senior"
};
console.log(user);
user.isFrontend = false;
// user.role = "Junior"; //Error: Cannot assign to 'role' because it is a read-only property.
// Using interface as return value in function
function returnDetails() {
    return {
        name: 'Deepak',
        age: '20',
        email: 'dk@gmail.com',
    };
}
console.log(returnDetails());
