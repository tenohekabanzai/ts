function detectType(val: number|string){
    if(typeof val == "string")
    return val.toLowerCase();
    if(typeof val == "number")
    return val*100;
}