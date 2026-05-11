const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const menuIcon = document.getElementById("menuIcon");

menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();

    mobileMenu.classList.toggle("active");

    menuIcon.textContent =
        mobileMenu.classList.contains("active") ? "✖" : "☰";
});

document.addEventListener("click", (e) => {
    if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
        mobileMenu.classList.remove("active");
        menuIcon.textContent = "☰";
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        mobileMenu.classList.remove("active");
        menuIcon.textContent = "☰";
    }
});





const faqBoxes=document.querySelectorAll(".faq-box");

faqBoxes.forEach(box=>{

    const btn=box.querySelector(".faq-question");
    const icon=btn.querySelector("span");

    btn.addEventListener("click",()=>{

        faqBoxes.forEach(item=>{

            if(item!==box){

                item.classList.remove("active");

                item.querySelector("span").innerHTML="+";
            }

        });

        box.classList.toggle("active");

        if(box.classList.contains("active")){

            icon.innerHTML="-";

        }else{

            icon.innerHTML="+";
        }

    });

});