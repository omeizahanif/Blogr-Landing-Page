const openMenu = document.querySelector("#hamburger");
const closeMenu = document.querySelector("#close");
const menu = document.querySelector("#menu");
const dropBtn = document.querySelectorAll(".dropbtn");
const subMenu = document.querySelectorAll(".sub-menu");
const hero = document.querySelector("hero");

openMenu.addEventListener("click", function(e) {
    menu.style.display = "block";
    openMenu.style.display = "none";
    closeMenu.style.display = "block";
})

closeMenu.addEventListener("click", function(e) {
    menu.style.display = "none";
    openMenu.style.display = "block";
    closeMenu.style.display = "none";
});

/*dropBtn.forEach((button) => {
    button.addEventListener("click", function(){
        subMenu.forEach((item) => {
            item.classList.remove("show");
        })
        
        button.nextElementSibling.classList.add("show");

    })
})*/

/*hero.addEventListener("click", function() {
    subMenu.forEach((item) => {
        item.style.display = "none";
    })
})*/