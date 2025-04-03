let minus=1
let minus2 = 1 
let create2 = ""
for (let index = 0; index < 2500; index++) {
let create = document.createElement("div")
create.className="dot"
let ran = Math.floor(Math.random()*1000)
let ran2 = Math.floor(Math.random()*965)
create.style.marginLeft=ran-500+"px"
create.style.marginTop=ran2-236+"px"
document.getElementById("main").append(create)
if(index==2499){let create3 = document.createElement("div")
create3.id="block"
document.getElementById("main").append(create3)}
if(index==2499){create2 = document.createElement("img")
create2.id="img"
create2.src="heart temp.png"
document.getElementById("main").append(create2)}
// animations
window.addEventListener("load", ()=>{

let inter1 = setInterval(() => {
minus2 = minus2+0.002
create.style.marginTop=ran2-236-minus2+"px"
}, 10)
setTimeout(()=>{clearInterval(inter1)
create2.src="heart2 temp.png"
create.style.marginTop=ran2-236+"px"
}, 29000)
setTimeout(() => {
let inter2 = setInterval(() => {
let ran3 = Math.floor(Math.random()*2)
if(ran3==0){create.style.opacity="30%"
setTimeout(()=>{create.style.opacity="100%"}, 99)
}}, 100)
setTimeout(() => {clearInterval(inter2)
create.style.animationName="fade"
setTimeout(() => {
create.style.opacity="0%"}, 2000);
}, 30000);
}, 30500);

setTimeout(() => {
create2.src="heart4 temp.png"
create.style.animationName="fade2"
setTimeout(() => {
create.style.opacity="100%"}, 2000);
setTimeout(() => {
let inter3 = setInterval(() => {
let ran3 = Math.floor(Math.random()*2)
if(ran3==0){create.style.backgroundColor="rgb(255, 0, 0.8"}
else{create.style.backgroundColor="rgb(255, 0, 0, 0.55)"}
}, 200);
setTimeout(() => {clearInterval(inter3)
create.style.backgroundColor="rgb(255, 0, 0, 0.55)"
}, 25000);
}, 2500);
}, 64000);
})
}


