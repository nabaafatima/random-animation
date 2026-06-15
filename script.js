const hello = document.getElementById("button");
const area = document.getElementById("text");
hello.addEventListener("click",()=>{
    if(area.textContent === "") {
      area.textContent = "Run" + " ";  
    } else {
        let c = area.textContent;
        area.textContent = c + "run" + " ";
    }
});
const remove = document.getElementById("reset");
remove.addEventListener("click",()=>{
    area.textContent = "";
});
const emoji = document.getElementById("one");
emoji.addEventListener("click", ()=>{
    if(area.textContent === "") {
        area.textContent = "😆" + " ";
    } else {
        let e = area.textContent;
        area.textContent = e + "😆" + " ";
    }
});
const bye = document.getElementById("bye");
bye.addEventListener("click",()=>{
    if(area.textContent === "") {
        area.textContent = "Away" + " ";
    } else{
        let b = area.textContent;
        area.textContent = b + "away" + " ";
    };
});
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
async function playGhostSequence() {
    const horrorQueue = [hello, bye, emoji, remove];
    while(true) {
        for (let btn of horrorQueue) {
           await delay(1500);
           btn.classList.add("ghost-press");
           await delay(540);
           btn.click();
           await delay(660);
           btn.classList.remove("ghost-press");
        }
        await delay(200);
    }
}
window.addEventListener("DOMContentLoaded", playGhostSequence);
