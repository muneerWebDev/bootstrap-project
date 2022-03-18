$(function () {
    dynamicCssVariables();
    aspectRatioSetter();
    $(window).resize(function () {
        dynamicCssVariables();
        aspectRatioSetter();
    });


    addClassToBodyIfScrolled();
    $(window).scroll(function () {
        addClassToBodyIfScrolled();
    })

    $(window).on("load", function () {

        setTimeout(() => {
            addClassWhenSiteIsLoaded();
        }, 300);
    });

    // lightbox 
    $('.venobox').venobox();

    // testimonials slider 
    jQuery('.happy-clients .slider').slick({
        dots: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [,
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    })
});



/***************************/
// dynamic css variables
function dynamicCssVariables() {
    var siteHeaderHeight = $("#siteHeader").outerHeight();
    var siteFooterHeight = $("#siteFooter").outerHeight();
    $("body").css({
        "--siteHeaderHeight": siteHeaderHeight + "px",
        "--siteFooterHeight": siteFooterHeight + "px",
    });
}




/***************************/
//adding class to body if scrolled from pagetop
function addClassToBodyIfScrolled() {

    var scrollTop = $(window).scrollTop();
    if (scrollTop > 10) {
        $("body").addClass("scrolled");
    } else {
        $("body").removeClass("scrolled");
    }

}


/***************************/
//aspect ratio setter for elements
function aspectRatioSetter() {
    if ($(".bg-aspectratio-children").length) {

        var $aspectratio_children = $('.bg-aspectratio-children > *');
        var elem_width = $('.bg-aspectratio-children').attr("aspect-width");
        var elem_height = $('.bg-aspectratio-children').attr("aspect-height");

        $aspectratio_children.each(function () {
            var newHeight = $(this).width() * (elem_height / elem_width);
            $(this).innerHeight(newHeight / 1);
        })
    }
}


/***************************/
// add class to body when the webpage is initially loaded
function addClassWhenSiteIsLoaded() {
    $("body").addClass('loaded');
}
