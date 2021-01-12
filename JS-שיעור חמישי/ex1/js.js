document.querySelector("#btn").addEventListener("click", () => {
  let tabs = [];
 
  for (let i = 0; i < document.querySelector("input").value; i++) {
    let tab = document.createElement("button");
     const br=document.createElement("br")
    tab.innerHTML = i+1;
    tab.className = "btn";
    tabs.push(tab,br);
  }
  const div=document.getElementById("tabs")
  div.innerHTML ='';
  tabs.forEach((val) => {
      div.appendChild(val);
  });
  console.log(document.getElementById("tabs"));
});
