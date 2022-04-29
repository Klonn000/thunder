$('.about_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
})

$(document).ready(function(){
    $('.spoiler_item h3').click(function(event){
        if($('.spoiler').hasClass('open_one')) {
            $('.spoiler_item h3').not($(this)).removeClass('active');
            $('.spoiler_item p').not($(this).next()).slideUp('300');
        }
        $(this).toggleClass('active').next().slideToggle(300);
    });
});

const anchors = document.querySelectorAll('a[href*="#"]');

for(let anchor of anchors) {
   anchor.addEventListener("click", function(event){
    event.preventDefault();
    const blockID = anchor.getAttribute('href');
    document.querySelector('' + blockID).scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
   });
};

$(document).ready(function(){
    $('.header_burger').click(function(e){
        $('.header_burger, .nav').toggleClass('active');
        $('body').toggleClass('lock');
    });
})