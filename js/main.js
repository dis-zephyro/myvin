// Slider

$('.slider_item').slick({
    arrows: false,
    autoplay: false,
    lazyLoad: 'ondemand',
    slidesToShow: 1,
    slidesToScroll: 1
});

$('.prev').click(function(){
    $('.slider_item').slick('slickPrev');
});

$('.next').click(function(){
    $('.slider_item').slick('slickNext');
});
//---