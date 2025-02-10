abstract class x {
    constructor(public name:string,public email:string){
        this.name = name
        this.email = email
    }
    abstract greet():void
}

class y extends x{
    constructor(name:string,email:string){
        super(name,email);
    }
    greet(){
        console.log("Good Morning!!")
    }
}

const _v5 = new y("Abc","Abc@gmail.com");

console.log(_v5)
_v5.greet();