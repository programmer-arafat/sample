const hamburger = document.getElementById("hamburger");
hamburger.addEventListener('click', ()=>{
    document.querySelector("#footer").style.display = "none";
    document.querySelector(".login-box").style.display = "none";
    document.querySelector('.booking').style.display = "none";
    document.querySelector(".wrapper").style.display = "none";
    const openmenu = document.querySelector(".hamburger-menu");
    openmenu.classList.add("hamburger-menu-visible");
})
const closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener('click', ()=>{
    document.querySelector("#footer").style.display = "block";
    document.querySelector(".login-box").style.display = "block";
    document.querySelector('.booking').style.display = "flex";
    document.querySelector(".wrapper").style.display = "block";
    const openmenu = document.querySelector(".hamburger-menu");
    openmenu.classList.remove("hamburger-menu-visible");
})
const dropList = document.getElementById("dropdown");
dropList.addEventListener('click', ()=>{
    const dropdownMenu = document.querySelector('#dropmenu');
    const arrow = document.getElementById('dropArrow');
    arrow.classList.toggle("arrow-up");
    dropdownMenu.classList.toggle("dropdown-links");
})