
function showCarrossel() {

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:4
            },
            600:{
                items:5
            },
            1000:{
                items:10
            }
        }
    })

}



