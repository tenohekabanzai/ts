function addTwo(n:number){
    return n+2;
}

function getUpper(x:string){
    return x.toUpperCase();
}

function signUpUser(name:string, email:string, isPaid:boolean)
{}

let login = (name:string,email:string,isPaid:boolean)=>{

}

function getHello(name:string):string{
    return "Hello "+name;
}

let y = addTwo(5)
console.log(y)

console.log(getUpper("Abc"));
signUpUser("Abc","abc132@gmail.com",true);

console.log(getHello("Pqr"))

const arr:string[] = ['apples','pears','oranges'];

let xyz: string[] = arr.map( (i):string => {return i+" are fresh!!!"})
console.log(xyz)

function consoleError(errmsg:string):void{
    console.log(errmsg)
}

function handleError(errmsg:string):never{
    throw new Error(errmsg)
}

