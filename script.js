const hello = document.getElementById("button");
const area = document.getElementById("text");
hello.addEventListener("click",()=>{
    area.textContent = "Hello";
});
