let inter = setInterval(() => {
let create = document.createElement("img")
create.src="heart2.png"
create.className="img"
let ran = Math.floor(Math.random()*10)
let ran2 = Math.floor(Math.random()*100)
let ran3 = Math.floor(Math.random()*2)
create.style.width=40+ran+"px"
if(ran3==0){create.style.marginLeft=0+ran2+"px"}
else{create.style.marginLeft=0-ran2+"px"}
document.getElementById("main").append(create)

setTimeout(() => {
create.style.display="none"
}, 900);
}, 400);
let on = false
document.addEventListener("click", ()=>{
if(on==false){document.getElementsByTagName("span").item(0).style.animationName="blink"
document.getElementsByTagName("span").item(1).style.animationName="blink"
document.getElementsByTagName("span").item(2).style.animationName="blink"
on=true}
else{
    document.getElementsByTagName("span").item(0).style.animationName=""
    document.getElementsByTagName("span").item(1).style.animationName=""
    document.getElementsByTagName("span").item(2).style.animationName=""
on=false}
})

document.getElementsByTagName("audio").item(0).play()
document.getElementById("close").addEventListener("click", ()=>{
    document.getElementById("box").style.display="none"
})
document.addEventListener("dblclick", ()=>{
clearInterval(inter)
document.getElementsByTagName("span").item(0).style.animationName=""
document.getElementsByTagName("span").item(1).style.animationName=""
document.getElementsByTagName("span").item(2).style.animationName=""
document.getElementsByTagName("audio").item(0).pause()
 document.getElementById("box").style.display="flex"
  document.getElementById("txt").innerHTML="animations stopped reload page to restart animations"
})
