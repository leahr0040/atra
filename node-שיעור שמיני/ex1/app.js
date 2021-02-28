const fs= require('fs');
const { createInterface } = require('readline');


fs.readFile("text.txt",'utf8',(err,data)=>{
    if(err)
    console.log(err)
    else
    console.log(1,data)
})
const data=fs.readFileSync("text.txt",'utf8');
console.log(4,data)

try{
const read=fs.promises
const fun=async ()=>{
   const data= await read.readFile("text.txt",'utf8')
   console.log(2,data)
}
fun(); 
}
catch(err)
{
    console.log(err)
}


try{
const readLine=createInterface({
    input:fs.createReadStream("text.txt", 'utf8'),
    crlfDelay:Infinity

})
readLine.on('line',(date)=>{
    console.log(3,date)
})
readLine.on('end',()=>{
    console.log('end')
})

//readLine.close()
}
catch(err)
{
    console.log(err)
}
