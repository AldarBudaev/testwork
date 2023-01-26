
// $(document).ready(function () {
//     $("#clients-slider").owlCarousel({
//         items: 1,
//     });
// });

$(document).ready(function () {
    
    // Находим блок с слайдами 
    const owl = $('#clients-slider');
    // Запускаем карусель
    owl.owlCarousel({
        items: 1,
        loop: true,
        navSpeed: 800
    });
    
    // Находим кастомные кнопки Вперед / Назад
    const prev = $('#sliderPrev');
    const next = $('#sliderNext');
    
    // Клик на кнопку Назад и прокрутка карусели
    prev.click(function () {
        owl.trigger('prev.owl.carousel');
    });
    // Клик на кнопку Вперед и прокрутка карусели
    next.click(function () {
        owl.trigger('next.owl.carousel');
    });  
});


// ************************  Код пример
// var owl = $('.owl-carousel');
// owl.owlCarousel();
// // Go to the next item
// $('.customNextBtn').click(function() {
//     owl.trigger('next.owl.carousel');
// })
// // Go to the previous item
// $('.customPrevBtn').click(function() {
//     // With optional speed parameter
//     // Parameters has to be in square bracket '[]'
//     owl.trigger('prev.owl.carousel', [300]);
// })
// *************************************

