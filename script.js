// =========================
// FBI WEBSITE SCRIPT
// =========================

// Dark Mode Toggle

const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", () => {

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){
darkModeBtn.innerHTML = "☀️";
localStorage.setItem("theme","dark");
}else{
darkModeBtn.innerHTML = "🌙";
localStorage.setItem("theme","light");
}

});

// Load Saved Theme

window.addEventListener("load", () => {

const savedTheme = localStorage.getItem("theme");

if(savedTheme === "dark"){
document.body.classList.add("dark");
darkModeBtn.innerHTML = "☀️";
}

});

// =========================
// Animated Counters
// =========================

function animateCounter(id,target,speed){

let count = 0;

const counter =
document.getElementById(id);

const updateCounter = () => {

const increment =
target / speed;

if(count < target){

count += increment;

counter.innerText =
Math.floor(count);

setTimeout(updateCounter,20);

}else{

counter.innerText =
target.toLocaleString();

}

};

updateCounter();

}

animateCounter("counter1",1250,100);
animateCounter("counter2",8500,120);
animateCounter("counter3",480,80);
animateCounter("counter4",15000,140);

// =========================
// Contact Form
// =========================

const contactForm =
document.getElementById("contactForm");

contactForm.addEventListener("submit",(e)=>{

e.preventDefault();

alert(
"Thank you for contacting Federal Bureau Institute. Your message has been received."
);

contactForm.reset();

});

// =========================
// Scroll Animation
// =========================

const cards =
document.querySelectorAll(".card,.news-card");

const observer =
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity = "1";

entry.target.style.transform =
"translateY(0px)";

}

});

});

cards.forEach(card=>{

card.style.opacity = "0";
card.style.transform =
"translateY(40px)";
card.style.transition =
"all 0.8s ease";

observer.observe(card);

});

// =========================
// Header Shadow
// =========================

window.addEventListener("scroll",()=>{

const header =
document.querySelector(".header");

if(window.scrollY > 50){

header.style.boxShadow =
"0 10px 25px rgba(0,0,0,.25)";

}else{

header.style.boxShadow =
"0 4px 12px rgba(0,0,0,.12)";

}

});

// =========================
// Current Year Footer
// =========================

const footer =
document.querySelector("footer");

footer.innerHTML +=
`<p style="margin-top:10px;">
©️ ${new Date().getFullYear()} Federal Bureau Institute
</p>`;

// =========================
// Welcome Message
// =========================

window.addEventListener("load",()=>{

setTimeout(()=>{

console.log(
"Federal Bureau Institute Portal Loaded Successfully."
);

},1000);

});

// =========================
// Smooth Navigation
// =========================

document.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{

anchor.addEventListener("click",
function(e){

e.preventDefault();

document.querySelector(
this.getAttribute("href")
).scrollIntoView({

behavior:"smooth"

});

});

});
