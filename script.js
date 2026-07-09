// ==============================
// Portfolio Script
// Developed by Rithwik Kandakatla
// ==============================


// -------------------------------
// Sticky Navbar
// -------------------------------

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.style.background = "#06111f";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

    }

    else {

        navbar.style.background = "rgba(6,15,29,.90)";
        navbar.style.boxShadow = "none";

    }

});



// -------------------------------
// Active Navigation
// -------------------------------

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});



// -------------------------------
// Typing Animation
// -------------------------------

const roles = [

    "Software Engineer",

    "Full Stack Developer",

    "Backend Developer",

    "AI Enthusiast"

];

let roleIndex = 0;
let charIndex = 0;

const roleElement = document.querySelector(".hero h2");

function typeRole() {

    if (!roleElement) return;

    if (charIndex < roles[roleIndex].length) {

        roleElement.textContent += roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeRole, 80);

    }

    else {

        setTimeout(eraseRole, 1800);

    }

}

function eraseRole() {

    if (charIndex > 0) {

        roleElement.textContent = roles[roleIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(eraseRole, 40);

    }

    else {

        roleIndex++;

        if (roleIndex >= roles.length)

            roleIndex = 0;

        setTimeout(typeRole, 400);

    }

}

if (roleElement) {

    roleElement.textContent = "";

    typeRole();

}



// -------------------------------
// Scroll Reveal
// -------------------------------

const revealElements = document.querySelectorAll(

    ".skill-box,.project-card,.info-card,.achievement-card,.timeline-item,.education-card,.contact-card"

);

const observer = new IntersectionObserver(

(entries) => {

entries.forEach(entry => {

if (entry.isIntersecting) {

entry.target.classList.add("show");

}

});

},

{

threshold:0.15

}

);

revealElements.forEach(el => {

el.classList.add("hidden");

observer.observe(el);

});



// -------------------------------
// Back To Top Button
// -------------------------------

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.className = "top-btn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

if(window.scrollY>400){

topBtn.classList.add("show-top");

}

else{

topBtn.classList.remove("show-top");

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});



// -------------------------------
// Current Year
// -------------------------------

const year = document.querySelector("#year");

if(year){

year.textContent = new Date().getFullYear();

}
