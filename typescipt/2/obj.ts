type User= {
    name:string,
    email:string,
    isActive:boolean
}

function createUser(user:User):User{
    user.isActive = true
    return user;
}

let u1 :User = {
    name:"Abc",
    email:"Abc@123.com",
    isActive:false,
}
console.log(createUser(u1))

type user = {
    readonly _id: string
    name:string
    email:string
    isActive:boolean
    credCardDetails?: number // credCardDetails is an optional field
}

let user1: user = {
    _id: "12345",
    name:"Pqr",
    email:"pqr@123.com",
    isActive:false,
    credCardDetails: 786689976568
}

let user2: user = {
    _id: "45345",
    name:"Ghi",
    email:"hij@123.com",
    isActive:false
}

user1.name = "Xyz"
user1.email = "Xyz@123.com"
user1.isActive = true

console.log(user1,user2)

type cardNumber = {
    cardNumber: string
}

type cardDate = {
    cardDate: string
}

// creating new type by combining existing types
type cardDetails = cardNumber & cardDate & {cvv:number}
