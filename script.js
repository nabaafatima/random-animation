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
});
const emoji = document.getElementById("one");
emoji.addEventListener("click", ()=>{
    if(area.textContent === "") {
        area.textContent = "😆";
    } else {
        let e = area.textContent;
        area.textContent = e + "😆";
    }
});
const bye = document.getElementById("bye");
bye.addEventListener("click",()=>{
    if(area.textContent === "") {
        area.textContent = "Bye";
    } else{
        let b = area.textContent;
        area.textContent = b + "bye";
    };
});