let tUser:[string,number,boolean];

// tuple also lcks in the order of the types of the values
tUser= ["hc",122,true]
console.log(tUser)

let rgb: [number,number,number] = [255,123,112]
console.log(rgb)

type User_tup = [number,string];
const newUser : User_tup = [123,"user123"]
console.log(newUser)

newUser[0] = 432
console.log(newUser)