var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init () {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map(document.querySelector(".address__map"), {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [59.938631, 30.323055],
        zoom: 18
    }, {
        //searchControlProvider: 'yandex#search'
    });

    academyPlacemark = new ymaps.Placemark([59.938631, 30.323055], {
      hintContent: 'Иконка академии'
    }, {
      iconLayout: 'default#imageWithContent',
      iconImageHref: '../img/map-pin.webp',
      // Размеры метки.
      iconImageSize: [70, 70],
    })

    myMap.geoObjects
      .add(academyPlacemark)
}
