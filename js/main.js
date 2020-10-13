$('.slider__inner, .news__slider-inner').slick({
    nextArrow: '<button type="button" class="slick-btn slick-next"> </button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"> </button>',
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
})

$('.header__btn__menu').on('click', function() {
    $('.menu ul').slideToggle();
    let element = document.getElementById("slider__inner");
    if(!(element.classList.contains('displayNone'))) {
        element.classList.add("displayNone");
    } else{
        element.classList.remove("displayNone");
    }
});

$('.services__items').slick({
    nextArrow: '<button type="button" class="slick-btn slick-next"> </button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"> </button>',
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
})


const Fryzjer = [
    {name: "Klasyczne bikini", cena: "150zł" },{name: "Brazylijskie bikini", cena: "180zł"},{name: "Łydki", cena: "250zł"}
]


const animItems = document.querySelectorAll(`._anim-items`)
if (animItems.length > 0) {
    window.addEventListener(`scroll`, animOnScroll)

    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index]
            const animItemHeight = animItem.offsetHeight
            const animItemOffSet = offset(animItem).top
            const animStart = 4
            let animItemPoint = window.innerHeight - animItemHeight / animStart
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart
            }
            if ((pageYOffset > animItemOffSet - animItemPoint) && pageYOffset < (animItemOffSet + animItemHeight)) {
                animItem.classList.add(`_active`)
            } else {
                if (!(animItem.classList.contains(`_anim-no-hide`))) {
                    animItem.classList.remove(`_active`)
                }
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect()
        let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }

    setTimeout(() => {
        animOnScroll()
    }, 300)
}
