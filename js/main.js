// Slider

$('.slider_item').slick({
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
});

$('.slider_nav.prev').click(function(){
    $('.slider_item').slick('slickPrev');
});

$('.slider_nav.next').click(function(){
    $('.slider_item').slick('slickNext');
});

//---