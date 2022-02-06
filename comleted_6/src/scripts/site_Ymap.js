(()=>{

    // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [50.39402773740202, 30.48989792889011],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 16,
            controls: []
        });

      //   var myPlacemark = new ymaps.Placemark([50.39402773740202, 30.4898979288901], {}, {
      //     preset: 'islands#redIcon'
      // });


      var myPlacemark = new ymaps.Placemark([50.39402773740202, 30.4898979288901], {}, {
        iconLayout: 'default#image',
        iconImageHref: '../imgs/map_point.png',
        iconImageSize: [25, 30],
        iconImageOffset: [-13, -20]
    });


      myMap.geoObjects
      .add(myPlacemark)

    };


})();
    