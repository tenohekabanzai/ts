function createUser(user) {
    user.isActive = true;
    return user;
}
var u1 = {
    name: "Abc",
    email: "Abc@123.com",
    isActive: false,
};
console.log(createUser(u1));
var user1 = {
    _id: "12345",
    name: "Pqr",
    email: "pqr@123.com",
    isActive: false,
    credCardDetails: 786689976568
};
var user2 = {
    _id: "45345",
    name: "Ghi",
    email: "hij@123.com",
    isActive: false
};
user1.name = "Xyz";
user1.email = "Xyz@123.com";
user1.isActive = true;
console.log(user1, user2);
