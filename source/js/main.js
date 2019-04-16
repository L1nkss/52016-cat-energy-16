(function main() {
    const burgerToggle = document.querySelector(".navigation__toggle");
    const burgerMenu = document.querySelector(".navigation__burger");
    const compareBar = document.querySelector(".compare__bar");
    const compareScale = document.querySelector(".compare__scale");
    const menu = document.querySelector(".menu");
    const burger = document.querySelector(".navigation__burger");

    // Закрываем меню, если JS загрузился
    menu.classList.add("menu--hide");
    burger.classList.add("navigation__burger--hide");

    function toggleMenu() {
      burger.classList.toggle("navigation__burger--hide");
      menu.classList.toggle("menu--hide");
    }

    //burgerToggle.addEventListener("click",toggleMenu);
    burgerMenu.addEventListener("click",toggleMenu)
})();
