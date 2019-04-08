(function main() {
    const burgerToggle = document.querySelector(".navigation__toggle");
    const compareBar = document.querySelector(".compare__bar");
    const compareScale = document.querySelector(".compare__scale");

    function toggleMenu() {
        const burger = document.querySelector(".navigation__burger");
        const menu = document.querySelector(".menu");
        burger.classList.toggle("navigation__burger--hide");
        menu.classList.toggle("menu--hide");
    }

    burgerToggle.addEventListener("click",toggleMenu);
})();
