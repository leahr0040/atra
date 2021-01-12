const div=document.querySelector("#div")
div.style.width="100px"
div.style.height="100px"
div.style.display="inline-block"
div.style.borderRadius="50%"
div.style.backgroundColor="red"
div.addEventListener("click", ()=>{
   
    let num1=Math.floor(Math.random()*1000) 
    let num2=Math.floor(Math.random()*100) 
    let num3=Math.floor(Math.random()*100) 
     console.log(num1)
    
    
    div.style.backgroundColor=`#${num1}`
    div.style.position="absolute"
    div.style.top=`${num2}%`
    div.style.right=`${num3}%`
})