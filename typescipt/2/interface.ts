interface _User {
    readonly dbId: number,
    email:string,
    userId: number,
    googleId?: string,
    startTrail?(): string,
    getCoupon?(s:string):number
}

// interfaces canbe extended unlike types
interface _User{
    githubToken?: string
}

interface _Admin extends _User{
    role?: "admin" | "ta" | "learner"
}

let _v1 : _User = {email:"abc@gmail.com",userId: 12345,dbId: 23,
    startTrail: ()=>{return "started trial"}}

let _v2 : _User = {email:"abc@gmail.com",userId: 12345,googleId:"heelo",dbId: 43, getCoupon(x:string){return 100}}

let _v3: _Admin = {email:"admin@gmail.com",userId:4211,dbId:222,
    role:"admin"
}

console.log(_v1,_v2,_v3)
