function func(){
    return {
        func1:()=>{return {id:1,name:'Leah'}},
        func2:(p)=>p
}
}

console.log(func())
console.log(func().func1(),func().func2('a'))