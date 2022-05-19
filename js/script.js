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

const modalCall = $("[data-modal]");
const modalClose = $("[data-close]");


modalCall.on('click', function(e){
    e.preventDefault;

    let $this = $(this);
    let modalId = $this.data('modal');

    $(modalId).addClass('active');
    $("body").addClass('no-scroll');

    setTimeout(function(){
        $(modalId).find(".modal_rooms, .modal_basket_wrapper").css({
            transform: "rotateX(0)"
        });
    }, 200)

    $('#worksSlider').slick('setPosition')
});

modalClose.on('click', function(event){
    event.preventDefault;
    let $this = $(this);
    let modalParent = $this.parents('.modal, .modal_basket');

    modalParent.find(".modal_rooms, .modal_basket_wrapper").css({
        transform: "rotateX(90deg)"
    });

    setTimeout(function(){
        modalParent.removeClass('active');
        $("body").removeClass('no-scroll');
    }, 200)
});

    $(".modal, .modal_basket").on("click", function(event){
        let $this = $(this);
        $this.find(".modal_rooms, .modal_basket_wrapper").css({
            transform: "rotateX(90deg)"
        });

        setTimeout(function(){
            $this.removeClass('active');
            $("body").removeClass('no-scroll');
        }, 200)
    });
    $('.modal_rooms, .modal_basket_wrapper').on("click", function(event){
        event.stopPropagation();
    });
    
    
   $('[data-slider="rooms"]').slick({
       Infinity: true,
       slidesToShow: 1,
       slidesToScroll: 1,
       fade: true,
       autoplay: true,
       autoplaySpeed: 500
   })

   $(".slickPrev").on("click", function(event){
       event.preventDefault;

       let currentSlider = 
       $(this).parents('.modal').find('[data-slider="rooms"]');

       currentSlider.slick("slickPrev");
   });

   $('.slickNext').on("click", function(event){
        event.preventDefault();

        let currentSlider = 
       $(this).parents('.modal').find('[data-slider="rooms"]');

       currentSlider.slick("slickNext");
   })

    