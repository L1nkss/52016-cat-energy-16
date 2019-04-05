(function main() {
    const burgerToggle = document.querySelector(".navigation__toggle");

    function toggleMenu() {
        const burger = document.querySelector(".navigation__burger");
        const menu = document.querySelector(".menu");
        burger.classList.toggle("navigation__burger--hide");
        menu.classList.toggle("menu--hide");
    }

    burgerToggle.addEventListener("click",toggleMenu);
})();