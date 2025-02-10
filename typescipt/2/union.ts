let score: number|string = 100
score = 33
// score can accept both number and string
score = "34"

console.log(score)


type Emp = {
    username: string,
    id: number
}

type Admin = {
    username: string,
    id: number
}

let v1: Emp|Admin = {
    username:"tito",
    id:123
}

v1 = {username:"hello",id:321}

console.log(v1,typeof v1)

function getDbId(id: number | string){
    console.log(`DB id is ${id}`,typeof id);    
}

getDbId(123456)
getDbId("8904843")

const data3: (number|string)[] = [1,"2",3,"Hello"]
console.log(data3)

