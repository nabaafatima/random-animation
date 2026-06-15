const hello = document.getElementById("button");
const area = document.getElementById("text");

hello.addEventListener("click",()=>{
    if(area.textContent === "") {
      area.textContent = "Hello";  
    } else {
        let c = area.textContent;
        area.textContent = c + " Hello";
    }
});
const remove = document.getElementById("reset");
remove.addEventListener("click",()=>{
    area.textContent = "";
})
