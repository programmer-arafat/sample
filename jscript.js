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
    document.querySelector(".login-box").style.display = "flex";
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
const navbars = document.querySelectorAll('.navbar>a');
navbars.forEach((link)=>{
    link.addEventListener('click', (e)=>{
        localStorage.setItem('linkKey', JSON.stringify(e.target.id));
    })
    navbars.forEach(el=>{
        if(el.id==JSON.parse(localStorage.getItem('linkKey'))){
            el.classList.add('active-link');
        }else{
            el.classList.remove('active-link');
        }
    })
})
const footerNav = document.querySelectorAll('#footer-nav>a');
footerNav.forEach((link)=>{
    link.addEventListener('click', (e)=>{
        localStorage.setItem('linkKey', JSON.stringify(e.target.id));
    })
    navbars.forEach(el=>{
        if(el.id==JSON.parse(localStorage.getItem('linkKey'))){
            el.classList.add('active-link');
        }else{
            el.classList.remove('active-link');
        }
    })
})
const loginBtn = document.getElementById('login-bt');
loginBtn.addEventListener('click', ()=>{
    localStorage.setItem('linkKey', JSON.stringify(""));
})
const signBtn = document.getElementById('signup-bt');
signBtn.addEventListener('click', ()=>{
    localStorage.setItem('linkKey', JSON.stringify(""));
})

