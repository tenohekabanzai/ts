class User {
    private readonly city : string = "Abc City"
    constructor(public email:string,public name: string, private userId:number, protected courses:number = 0){
        this.email = email
        this.name = name
        this.userId = userId
    }
    get getEmail():string{
        return `apple_${this.email}`;
    }
    set setEmail(email:string){
        this.email = email
    }

    get getCourseCount():number{
        return this.courses;
    }

    set setCourseCount(n:number){
        this.courses = n;
    }
}

class A extends User {
    isfamily: boolean
    changeCourseCount(){
        this.courses = 4
    }
}

const _v1 = new User("abc@gmail.com","abc",1223)
const _v2 = new User("def@gmail.com","def",4432)

console.log(_v1)
console.log(_v2)

_v1.setEmail = "hello@123.com"
console.log(_v1.getEmail);

_v1.setCourseCount = 5
console.log(_v1)

const _v3 = new A("v3@gmail.com","version3",544)
_v3.isfamily = true
_v3.changeCourseCount()
console.log(_v3)