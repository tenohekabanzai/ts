let scores : Array<number> = []
let names : Array<string> = []

function identity_One(val: boolean | number): boolean | number{
    return val;
}

function identity_Two(val:any): any{
    return val;
}

function identity_Three<Type>(val:Type):Type{
    return val
}

function identity_Four<T>(val:T):T{
    console.log(typeof val)
    return val
}
console.log('----------------------------------------------')
console.log(identity_Three(1))
console.log(identity_Three("22354abc"))
console.log(identity_Three(true))
console.log(identity_Three(["Hello","good","morning"]))
console.log('----------------------------------------------')
console.log(identity_Four(1))
console.log(identity_Four("uijfuivb"))
console.log(identity_Four(true))
console.log(identity_Four(["Hello","good","morning"]))
console.log('----------------------------------------------')


//  generic func
function getSearchProducts<T>(products:T[] ):T{
    const myIndex=5;
    return products[myIndex];
}
const fetchProduct = <T>(products:T[]):T=>{
    const myIndex=5;
    return products[myIndex];
}
console.log(fetchProduct([1,2,7,3,4,5,102,232]))
console.log('----------------------------------------------')
function wrapf<T,U>(arg1:T,arg2:U):object{
    return {arg1,arg2}
}
console.log(wrapf("Toto",'toto@gmail.com'))
console.log(wrapf("fruits",['apples','pears','oranges']))
console.log('----------------------------------------------')

interface Quiz{
    name: string,
    type:string
}

interface Course{
    name:string,
    author:string,
    subject:string
}

// generic class
class Sellable<T>{
    public Cart:T[] = []
    addToCart(products:T):void{
        this.Cart.push(products)
    }
}   

let a1 = new Sellable();
let c1:Course = {name:'c1',author:'john doe',subject:'sys desn'}
let c2:Course = {name:'c2',author:'jane austen',subject:'devops'}
let q1: Quiz ={name:'q1',type:"123"}
a1.addToCart(c1)
a1.addToCart(c2)
a1.addToCart(q1)

console.log(a1)