let flag=true
const div=document.querySelector("#div")
div.style.width="100px"
div.style.height="100px"
div.style.backgroundColor="red"
div.addEventListener("click",()=>{
    if(flag)
    div.style.backgroundColor="yellow"
    else
    div.style.backgroundColor="red"
    flag = !flag
    console.log(flag)
})