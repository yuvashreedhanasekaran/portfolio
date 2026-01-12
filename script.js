/* ========SCROLL REVEAL======== */
const reveals = document.querySelectorAll(".reveal");
function revealOnScroll(){
  reveals.forEach(el => {
    if(el.getBoundingClientRect().top < window.innerHeight - 100){
      el.classList.add("active");
    }
  });
}
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
/* ======DARK / LIGHT MODE + START ANIMATION================ */
const body = document.body;
const toggleBtn = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("theme");
const theme = savedTheme || "dark";
body.classList.add(theme);
toggleBtn.textContent = theme === "light" ? "🌞" : "🌙";
//START ANIMATION AFTER PAGE LOAD (IMPORTANT) 
window.onload = () => {
  if(theme === "dark"){
    body.classList.add("start-animate");
  }
};
toggleBtn.addEventListener("click", () => {
  body.classList.remove("start-animate");
  if(body.classList.contains("dark")){
    body.classList.replace("dark","light");
    toggleBtn.textContent = "🌞";
    localStorage.setItem("theme","light");
  }else{
    body.classList.replace("light","dark");
    toggleBtn.textContent = "🌙";
    localStorage.setItem("theme","dark");
    setTimeout(() => {
      body.classList.add("start-animate");
    }, 50);
  }
});
// navbar 
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.nav-links:not(.desktop)');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  let lastScrollY = window.pageYOffset;

  window.addEventListener("scroll", () => {
    const currentScrollY = window.pageYOffset;

    // scroll DOWN → hide
    if (currentScrollY > lastScrollY && currentScrollY > 80) {
      navbar.classList.add("hide");
    }
    // scroll UP → show
    else {
      navbar.classList.remove("hide");
    }

    lastScrollY = currentScrollY;
  });
});

  const works = [
  {
    img: "assets/images/work4.png",
    note: "Captured during my experience working with friends at their company, this moment reflects collaborative learning, shared problem-solving, and real-time development exposure.Team collaboration moment during my time at a friend-led company, where I gained hands-on exposure to real-world project workflows, teamwork, and practical development practices."
  },
  {
    img: "assets/images/work2.png",
    note: "SQLite Employee Management System – Add, view, search and delete employee records using Python and SQLite."
  },
  {
    img: "assets/images/work3.png",
    note: "AI Face Detection Project – Real-time face detection using OpenCV Haar Cascade with webcam integration."
  },
  {
    img: "assets/images/work5.png",
    note: "Bank Account Management System (OOPS) – Encapsulation-based Python project with deposit, withdraw, edit profile and validation features."
  },
  {
    img: "assets/images/work1.png",
    note:  "Python + MySQL Mini Project – User registration system with database connectivity, validation and menu-driven operations."
  },
  {
    img: "assets/images/work6.jpeg",
    note:  "The system is designed to generate clear, human-like voices with proper pronunciation, tone, and flow, making it suitable for applications such as virtual assistants, accessibility tools, audiobooks, and automated announcements."
  }
];
  let currentWork = 0;
  function openWork() {
    document.getElementById("experience").classList.add("hidden");
    document.getElementById("workShowcase").classList.remove("hidden");
    loadWork();
  }
  function backToExperience() {
    document.getElementById("workShowcase").classList.add("hidden");
    document.getElementById("experience").classList.remove("hidden");
  }
  function loadWork() {
    document.getElementById("workImage").src = works[currentWork].img;
    document.getElementById("workNote").innerText = works[currentWork].note;
  }
  function nextWork() {
    currentWork = (currentWork + 1) % works.length;
    loadWork();
  }
  function prevWork() {
    currentWork = (currentWork - 1 + works.length) % works.length;
    loadWork();
  }
  // /resume
function openResumeView(){
  document.getElementById("resumeViewModal").style.display = "flex";
}

function closeResumeView(){
  document.getElementById("resumeViewModal").style.display = "none";
}
const navbar = document.querySelector('.navbar');

// Hamburger toggle
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Hide navbar on scroll
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  if(currentScroll > lastScroll){
    navbar.classList.add('hide'); // scrolling down
  } else {
    navbar.classList.remove('hide'); // scrolling up
  }
  lastScroll = currentScroll;
});

// profile
const blob = document.querySelector('.blob');

document.addEventListener('mousemove', e => {
  const x = (window.innerWidth / 2 - e.pageX) / 25;
  const y = (window.innerHeight / 2 - e.pageY) / 25;

  blob.style.transform = `translate(${x}px, ${y}px)`;
});
