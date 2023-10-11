const hamburger = document.getElementById("hamburger");
hamburger.addEventListener('click', ()=>{
    document.querySelector(".booking").style.display = "none";
    document.querySelector(".wrapper").style.display = "none";
    document.getElementById("hamburger").style.display = "none";
    const openmenu = document.querySelector(".hamburger-menu");
    openmenu.classList.add("hamburger-menu-visible");
})
const closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener('click', ()=>{
    document.querySelector(".booking").style.display = "flex";
    document.querySelector(".wrapper").style.display = "block";
    document.getElementById("hamburger").style.display = "block";
    const openmenu = document.querySelector(".hamburger-menu");
    openmenu.classList.remove("hamburger-menu-visible");
})