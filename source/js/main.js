(function main() {
    const burgerMenu = document.querySelector(".burger");
    const menu = document.querySelector(".menu");
    const burger = document.querySelector(".burger__toggle");
    const button = document.querySelector(".compare");

    // Закрываем меню, если JS загрузился
    menu.classList.add("menu--hide");
    burger.classList.add("burger__toggle--hide");

    function toggleMenu() {
      burger.classList.toggle("burger__toggle--hide");
      menu.classList.toggle("menu--hide");
    }

    //burgerToggle.addEventListener("click",toggleMenu);
    burgerMenu.addEventListener("click",toggleMenu)

    // Смена изображения before/after

    // Смени изображения с помощью toggle

})();

//  clip: rect(auto, 345px, auto, auto);
