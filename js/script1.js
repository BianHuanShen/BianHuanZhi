/* ==========================================
   THRONE OF THE CHANGING HEAVENS
   FORGOTTEN CELESTIAL EDITION
   SCRIPT.JS
========================================== */


/* ========= LOADER ========= */

window.addEventListener("load", () => {

setTimeout(() => {

document
.getElementById("loader")
?.classList.add("hide");

},1800);

});


/* ========= MOUSE GLOW ========= */

const glow =
document.getElementById(
"mouseGlow"
);

const root =
document.documentElement;

window.addEventListener(
"mousemove",
(e)=>{

if(glow){

glow.style.left =
e.clientX + "px";

glow.style.top =
e.clientY + "px";

}

root.style.setProperty(
"--mx",
e.clientX + "px"
);

root.style.setProperty(
"--my",
e.clientY + "px"
);

});


/* ========= SCROLL REVEAL ========= */

const observer =
new IntersectionObserver(
(entries)=>{

entries.forEach(entry=>{

if(
entry.isIntersecting
){

entry.target
.classList.add(
"active"
);

}

});

});

document
.querySelectorAll(
".reveal"
)
.forEach(el=>{

observer.observe(el);

});


/* ========= COSMIC CANVAS ENGINE ========= */

const canvas =
document.getElementById(
"cosmos"
);

const ctx =
canvas?.getContext(
"2d"
);

function resizeCanvas(){

if(!canvas) return;

canvas.width =
window.innerWidth;

canvas.height =
window.innerHeight;

}

resizeCanvas();

window.addEventListener(
"resize",
resizeCanvas
);

const particles=[];

const cosmicColors=[

"rgba(0,213,255,.75)",

"rgba(184,155,79,.45)",

"rgba(255,255,255,.55)"

];

if(canvas){

for(
let i=0;
i<120;
i++
){

particles.push({

x:
Math.random()
*
canvas.width,

y:
Math.random()
*
canvas.height,

r:
Math.random()
*
2.2,

s:
Math.random()
*
1.2,

color:

cosmicColors[

Math.floor(

Math.random()

*

cosmicColors.length

)

]

});

}

}

function animateCosmos(){

if(
!canvas ||
!ctx
) return;

ctx.clearRect(

0,
0,

canvas.width,

canvas.height

);

particles.forEach(p=>{

ctx.beginPath();

ctx.fillStyle =
p.color;

ctx.arc(

p.x,

p.y,

p.r,

0,

Math.PI*2

);

ctx.fill();

p.y += p.s;

p.x +=

Math.sin(
p.y*.01
)

*.35;

if(
p.y >
canvas.height
){

p.y=0;

p.x=

Math.random()

*

canvas.width;

}

});

requestAnimationFrame(

animateCosmos

);

}

if(
canvas &&
ctx
){

animateCosmos();

}


/* ========= READING PROGRESS ========= */

const progressBar =
document.getElementById(
"progressBar"
);

window.addEventListener(
"scroll",
()=>{

if(
!progressBar
) return;

const scrollTop =

document
.documentElement
.scrollTop;

const scrollHeight =

document
.documentElement
.scrollHeight

-

document
.documentElement
.clientHeight;

const progress =

scrollHeight > 0

?

(
scrollTop
/
scrollHeight
)

*100

:0;

progressBar.style.width =

progress + "%";

});


/* ========= BOOKMARK ========= */

const bookmarkBtn =
document.getElementById(
"bookmarkBtn"
);

bookmarkBtn
?.addEventListener(

"click",

()=>{

bookmarkBtn
.classList.toggle(
"active"
);

bookmarkBtn.innerText =

bookmarkBtn
.classList
.contains(
"active"
)

?

"★ Saved"

:

"☆ Bookmark";

});


/* ========= SHARE ========= */

const shareBtn =
document.getElementById(
"shareBtn"
);

shareBtn
?.addEventListener(

"click",

()=>{

navigator
.clipboard
?.writeText(

window.location.href

);

shareBtn.innerText =
"✓ Copied";

setTimeout(()=>{

shareBtn.innerText =

"⤴ Share";

},2000);

});


/* ========= CHAPTER NAVIGATION ========= */

document
.getElementById(
"nextBtn"
)
?.addEventListener(

"click",

()=>{

alert(

"Next Chapter — Coming Soon."

);

});


document
.getElementById(
"prevBtn"
)
?.addEventListener(

"click",

()=>{

alert(

"You are already at Chapter 1."

);

});


/* ========= PARALLAX ENGINE ========= */

const parallaxTargets =

document.querySelectorAll(

".hero-content"

);

window.addEventListener(

"mousemove",

(e)=>{

const x =

(
e.clientX
/
window.innerWidth

-.5
)

*12;

const y =

(
e.clientY
/
window.innerHeight

-.5
)

*12;

parallaxTargets
.forEach(el=>{

el.style.transform =

`translate(${x}px,${y}px)`;

});

});


/* ========= OPTIONAL DEBUG ========= */

console.log(

"THRONE OF THE CHANGING HEAVENS",

"| FORGOTTEN CELESTIAL EDITION",

"| SYSTEM ONLINE"

);
