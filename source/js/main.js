(function main() {
    const burgerToggle = document.querySelector(".navigation__toggle");
    const burgerMenu = document.querySelector(".navigation__burger");
    const compareBar = document.querySelector(".compare__bar");
    const compareScale = document.querySelector(".compare__scale");
    const compareButton = document.querySelector(".compare__toggle");

    function toggleMenu() {
        const burger = document.querySelector(".navigation__burger");
        const menu = document.querySelector(".menu");
        burger.classList.toggle("navigation__burger--hide");
        menu.classList.toggle("menu--hide");
    }

    //burgerToggle.addEventListener("click",toggleMenu);
    burgerMenu.addEventListener("click",toggleMenu)

    compareButton.addEventListener("click", (e) => {
        console.log(e.clientX);
    });

    compareScale.addEventListener("click", (e) => {
            let percPosition = e.offsetX / compareScale.clientWidth * 100;
            console.log(percPosition.toFixed(0));
            compareButton.style.left = `${percPosition.toFixed(0)}%`;
    })
})();
