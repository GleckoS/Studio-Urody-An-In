$('.slider__inner, .news__slider-inner').slick({
    nextArrow: '<button type="button" class="slick-btn slick-next"> </button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"> </button>',
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
})

$('.header__btn__menu').on('click', function () {
    $('.menu ul').slideToggle();
    let element = document.getElementById("slider__inner");
    if (!(element.classList.contains('displayNone'))) {
        element.classList.add("displayNone");
    } else {
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
            breakpoint: 676,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
})

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

const fryzjerA = [
    {
        name: "- Strzyżenie damskie",
        cena: "+100,00 zł"
    },
    {
        name: "- Strzyżenie końcówek na sucho",
        cena: "60,00 zł"
    },
    {
        name: "- Strzyżenie grzywki",
        cena: "20,00 zł"
    },
    {
        name: "- Strzyżenie męskie",
        cena: "50,00 zł"
    },
    {
        name: "- Strzyżenie brody i wąsów",
        cena: "25,00 zł"
    },
    {
        name: "- Strzyżenie dzieci",
        cena: "40,00 zł"
    }
]

fryzjerA.map(item => {
    let str = ` <li class="dialog__item">
          <strong>${item.name}</strong>
          <span><strong>${item.cena}</strong></span>
  </li>`
    let doc = new DOMParser().parseFromString(str, 'text/xml')
    document.getElementById("fryzjerA").append(doc.firstChild)
})

const fryzjerB = [
    {
        name: "- Koloryzacja jednolita włosy długi",
        cena: "+200,00 zł"
    },
    {
        name: "- Koloryzacja jednolita włosy średni",
        cena: "+180,00 zł"
    },
    {
        name: "- Koloryzacja jednolita włosy krótki",
        cena: "+160,00 zł"
    },
    {
        name: "- Decoloryzacja + koloryzacja",
        cena: "+200,00 zł"
    },
    {
        name: "- Koloryzacja odrostów",
        cena: "+160,00 zł"
    },
    {
        name: "- koloryzacja farbą klientki",
        cena: "+100,00 zł"
    },
    {
        name: "- Balayage",
        cena: "+300,00 zł"
    },
    {
        name: "- Shatush",
        cena: "+300,00 zł"
    },
    {
        name: "- Air Touch",
        cena: "+500,00 zł"
    },
    {
        name: "- Refleksy",
        cena: "+200,00 zł"
    },
]

fryzjerB.map(item => {
    let str = ` <li class="dialog__item">
          <strong>${item.name}</strong>
          <span><strong>${item.cena}</strong></span>
  </li>`
    let doc = new DOMParser().parseFromString(str, 'text/xml')
    document.getElementById("fryzjerB").append(doc.firstChild)
})

const fryzjerC = [
    {
        name: "- Botox na włosy",
        cena: "+80,00 zł"
    },
    {
        name: "- Keratynowe prostowanie włosów",
        cena: "+250,00 zł"
    },
    {
        name: "- Bio trwała ondulacja włosów długich",
        cena: "350,00 zł"
    },
    {
        name: "- Bio trwała ondulacja włosów średnich",
        cena: "280,00 zł"
    },
    {
        name: "- Bio trwała ondulacja włosów krótkich",
        cena: "180,00 zł"
    }
]

fryzjerC.map(item => {
    let str = ` <li class="dialog__item">
          <strong>${item.name}</strong>
          <span><strong>${item.cena}</strong></span>
  </li>`
    let doc = new DOMParser().parseFromString(str, 'text/xml')
    document.getElementById("fryzjerC").append(doc.firstChild)
})

const manicureA = [
    {
        name: "- Manicure hybrydowy",
        cena: "100,00 zł"
    },
    {
        name: "- Manicure hybrydowy frencz",
        cena: "100,00 zł"
    },
    {
        name: "- Malowanie hybrydą",
        cena: "60,00 zł"
    },
    {
        name: "- Manicure frezarkowy lub kombinowany",
        cena: "50,00 zł"
    },
    {
        name: "- Żel na naturalnej płytce",
        cena: "110,00 zł"
    },
    {
        name: "- Przedłużanie żelem",
        cena: "140,00 zł"
    },
    {
        name: "- Uzupełnianie żelem",
        cena: "110,00 zł"
    },
    {
        name: "- Manicure męski",
        cena: "70,00 zł"
    },
    {
        name: "- Ściągnięcie hybrydy",
        cena: "20,00 zł"
    },
    {
        name: "- Ściągnięcie żelu",
        cena: "20,00 zł"
    }
]

manicureA.map(item => {
    let str = ` <li class="dialog__item">
          <strong>${item.name}</strong>
          <span><strong>${item.cena}</strong></span>
  </li>`
    let doc = new DOMParser().parseFromString(str, 'text/xml')
    document.getElementById("manicureA").append(doc.firstChild)
})

const pedicureA = [
    {
        name: "- Pedicure klasyczny",
        cena: "100,00 zł"
    },
    {
        name: "- Pedicure hybrydowy",
        cena: "130,00 zł"
    },
    {
        name: "- Pedicure hybrydowy mini",
        cena: "100,00 zł"
    },
    {
        name: "- Pedicure męski",
        cena: "120,00 zł"
    },
    {
        name: "- Ściągnięcie hybrydy",
        cena: "20,00 zł"
    }
]

pedicureA.map(item => {
    let str = ` <li class="dialog__item">
          <strong>${item.name}</strong>
          <span><strong>${item.cena}</strong></span>
  </li>`
    let doc = new DOMParser().parseFromString(str, 'text/xml')
    document.getElementById("pedicureA").append(doc.firstChild)
})

const przedluzanieA = [
    {
        name: "- Lifting i laminacja rzęś",
        cena: "120,00 zł"
    },
    {
        name: "- Przedłuzanie metodą 1:1",
        cena: "120,00 zł"
    },
    {
        name: "- Przedłuzanie metodą 1:2",
        cena: "140,00 zł"
    },
    {
        name: "- Przedłuzanie metodą 1:3",
        cena: "160,00 zł"
    },
    {
        name: "- Przedłuzanie metodą 1:4",
        cena: "180,00 zł"
    },
    {
        name: "- Ściągnięcie rzęs",
        cena: "35,00 zł"
    }
]

przedluzanieA.map(item => {
    let str = ` <li class="dialog__item">
          <strong>${item.name}</strong>
          <span><strong>${item.cena}</strong></span>
  </li>`
    let doc = new DOMParser().parseFromString(str, 'text/xml')
    document.getElementById("przedluzanieA").append(doc.firstChild)
})

const depilacjaA = [
    {
        name: "- Bikini brazylijskie + pachy",
        cena: "105,00 zł"
    },
    {
        name: "- Bikini brazylijskie + pachy + łydki",
        cena: "145,00 zł"
    },
    {
        name: "- Bikini brazylijskie + nogi całe",
        cena: "150,00 zł"
    },
    {
        name: "- Bikini brazylijskie",
        cena: "80,00 zł"
    },
    {
        name: "- Bikini klasycznie + całe nogi",
        cena: "115,00 zł"
    },
    {
        name: "- Bikini klasycznie",
        cena: "30,00 zł"
    },
    {
        name: "- Twarz",
        cena: "20,00 zł"
    },
    {
        name: "- Wąsiki",
        cena: "15,00 zł"
    },
    {
        name: "- Ręce całe",
        cena: "55,00 zł"
    },
    {
        name: "- Ręce do łokcia",
        cena: "35,00 zł"
    },
    {
        name: "- Plecy",
        cena: "40,00 zł"
    },
    {
        name: "- Brzuch",
        cena: "30,00 zł"
    },
    {
        name: "- Pachy",
        cena: "35,00 zł"
    },
    {
        name: "- Uda",
        cena: "45,00 zł"
    },
    {
        name: "- Łydki",
        cena: "45,00 zł"
    },
    {
        name: "- Całe nogi",
        cena: "80,00 zł"
    }
]

depilacjaA.map(item => {
    let str = ` <li class="dialog__item">
          <strong>${item.name}</strong>
          <span><strong>${item.cena}</strong></span>
  </li>`
    let doc = new DOMParser().parseFromString(str, 'text/xml')
    document.getElementById("depilacjaA").append(doc.firstChild)
})

const depilacjaB = [
    {
        name: "- Bikini brazylijskie + pachy",
        cena: "230,00 zł"
    },
    {
        name: "- Bikini brazylijskie + pachy + łydki",
        cena: "380,00 zł"
    },
    {
        name: "- Bikini brazylijskie + nogi całe",
        cena: "400,00 zł"
    },
    {
        name: "- Bikini brazylijskie + brzuch",
        cena: "230,00 zł"
    },
    {
        name: "- Bikini brazylijskie",
        cena: "200,00 zł"
    },
    {
        name: "- Bikini klasycznie",
        cena: "100,00 zł"
    },
    {
        name: "- Bikini głębokie",
        cena: "160,00 zł"
    },
    {
        name: "- Całe ciało",
        cena: "700,00 zł"
    },
    {
        name: "- Brzwi",
        cena: "30,00 zł"
    },
    {
        name: "- Twarz",
        cena: "120,00 zł"
    },
    {
        name: "- Ręce całe",
        cena: "130,00 zł"
    },
    {
        name: "- Ręce do łokcia",
        cena: "70,00 zł"
    },
    {
        name: "- Kark",
        cena: "70,00 zł"
    },
    {
        name: "- Plecy",
        cena: "120,00 zł"
    },
    {
        name: "- Pachy",
        cena: "60,00 zł"
    },
    {
        name: "- Tors + brzuch",
        cena: "130,00 zł"
    },
    {
        name: "- Brzuch",
        cena: "90,00 zł"
    },
    {
        name: "- Tors",
        cena: "90,00 zł"
    },
    {
        name: "- Pośladki",
        cena: "100,00 zł"
    },
    {
        name: "- Całe nogi",
        cena: "200,00 zł"
    }
]

depilacjaB.map(item => {
    let str = ` <li class="dialog__item">
          <strong>${item.name}</strong>
          <span><strong>${item.cena}</strong></span>
  </li>`
    let doc = new DOMParser().parseFromString(str, 'text/xml')
    document.getElementById("depilacjaB").append(doc.firstChild)
})

const tatuazA = [
    {
        name: "- Konsultacja",
        cena: "0,00 zł"
    },
    {
        name: "- Odświeżanie brwi",
        cena: "300,00 zł"
    },
    {
        name: "- Makijaż permanentny brwi",
        cena: "350,00 zł"
    },
    {
        name: "- Makijaż permanentny brwi metodą cieniowania",
        cena: "450,00 zł"
    },
    {
        name: "- Korekcja makijażu permanentnego brwi",
        cena: "250,00 zł"
    },
    {
        name: "- Makijaż permanentny ust",
        cena: "350,00 zł"
    },
    {
        name: "- Korekcja makijażu permanentnego ust",
        cena: "250,00 zł"
    }
]

tatuazA.map(item => {
    let str = ` <li class="dialog__item">
          <strong>${item.name}</strong>
          <span><strong>${item.cena}</strong></span>
  </li>`
    let doc = new DOMParser().parseFromString(str, 'text/xml')
    document.getElementById("tatuazA").append(doc.firstChild)
})

const laserA = [
    {
        name: "- Brazylijskie bikini",
        cena: "180,00 zł"
    },
    {
        name: "- Klasyczne bikini",
        cena: "150,00 zł"
    },
    {
        name: "- Wąsiki",
        cena: "80,00 zł"
    },
    {
        name: "- Pachy",
        cena: "150,00 zł"
    },
    {
        name: "- Ręce",
        cena: "150,00 zł"
    },
    {
        name: "- Brzuch",
        cena: "50,00 zł"
    },
    {
        name: "- Uda",
        cena: "150,00 zł"
    },
    {
        name: "- Łydki",
        cena: "150,00 zł"
    }
]

laserA.map(item => {
    let str = ` <li class="dialog__item">
          <strong>${item.name}</strong>
          <span><strong>${item.cena}</strong></span>
  </li>`
    let doc = new DOMParser().parseFromString(str, 'text/xml')
    document.getElementById("laserA").append(doc.firstChild)
})

const masazA = [
    {
        name: "- Masaż banką chińską",
        cena: "80,00 zł",
        czas: "30min"
    },
    {
        name: "- Masaż banką chińską",
        cena: "100,00 zł",
        czas: "45min"
    },
    {
        name: "- Masaż banką chińską",
        cena: "140,00 zł",
        czas: "60min"
    },
    {
        name: "- Masaż klasyczny-częściowy",
        cena: "80,00 zł",
        czas: "30min"
    },
    {
        name: "- Masaż klasyczny-częściowy",
        cena: "100,00 zł",
        czas: "45min"
    },
    {
        name: "- Masaż klasyczny-częściowy",
        cena: "140,00 zł",
        czas: "60min"
    },
    {
        name: "- Masaż relaksacyjny-częściowy",
        cena: "80,00 zł",
        czas: "30min"
    },
    {
        name: "- Masaż relaksacyjny-częściowy",
        cena: "100,00 zł",
        czas: "45min"
    },
    {
        name: "- Masaż relaksacyjny-częściowy",
        cena: "140,00 zł",
        czas: "60min"
    },
    {
        name: "- Masaż Lomi Lomi",
        cena: "180,00 zł",
        czas: "90min"
    },
    {
        name: "- Masaż gorącymi kamieniami",
        cena: "200,00 zł",
        czas: "75min"
    },
]

masazA.map(item => {
    let str = ` <li class="dialog__item">
          <strong>${item.name}</strong>
          <span><strong>${item.cena}</strong></span>
  </li>`
    let doc = new DOMParser().parseFromString(str, 'text/xml')
    document.getElementById("masazA").append(doc.firstChild)
})

const kosmetologiaA = [
    {
        name: "- Oczyszczanie twarzy",
        cena: "140,00 zł"
    },
    {
        name: "- Masaż twarzy z maską",
        cena: "120,00 zł",
    },
    {
        name: "- Przeciwzmarszczkowo-liftingujący zabieg",
        cena: "250,00 zł"
    },
    {
        name: "- Peeling kawitacyjny",
        cena: "140,00 zł"
    },
    {
        name: "- Masaż twarży, szyi i dekoltu dla mężczyzny",
        cena: "120,00 zł"
    },
    {
        name: "- Zabieg na odmłodzenie skóry dla mężczyzny",
        cena: "150,00 zł"
    },
    {
        name: "- Zabieg dla skóry naczyniowej i wrażliwej",
        cena: "150,00 zł"
    },
    {
        name: "- Zabieg liftingujący na twarz, Ella Bache",
        cena: "100,00 zł"
    },
    {
        name: "- Zabieg przeciwtrądzikowy",
        cena: "150,00 zł"
    },
    {
        name: "- Zabieg kwasem mlekowym",
        cena: "100,00 zł"
    },
    {
        name: "- Zabieg kwasem migdałowym",
        cena: "120,00 zł"
    },
]

kosmetologiaA.map(item => {
    let str = ` <li class="dialog__item">
          <strong>${item.name}</strong>
          <span><strong>${item.cena}</strong></span>
  </li>`
    let doc = new DOMParser().parseFromString(str, 'text/xml')
    document.getElementById("kosmetologiaA").append(doc.firstChild)
})
