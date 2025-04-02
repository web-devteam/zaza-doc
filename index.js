minus=1
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
if(index==2499){let create2 = document.createElement("img")
create2.id="img"
create2.src="heart2 temp.png"
document.getElementById("main").append(create2)}
let inter = setInterval(() => {
let ran3 = Math.floor(Math.random()*2)
if(ran3==0){create.style.opacity="30%"
setTimeout(()=>{create.style.opacity}, 99)
}
else{create.style.opacity="100%"}
}, 100);
setTimeout(()=>{clearInterval(inter)}, 20000)
}

