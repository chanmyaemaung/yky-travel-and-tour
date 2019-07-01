(function ($) {

    "use strict";

    /*=================== PRELOADER ===================*/
    $(window).on('load', function () {
        $(".preloading").fadeOut("slow");
    });

    /*=================== SIDENAV  ===================*/
    $('.button-collapse').sideNav({
        menuWidth: 250,
        edge: 'left',
        closeOnClick: true,
        draggable: true,
        onOpen: function (el) {},
        onClose: function (el) {},
    });

    /*=================== CAROUSEL SLIDER  ===================*/
    $('.carousel.carousel-slider').carousel({
        fullWidth: true
    }, setTimeout(autoplay, 4500));

    function autoplay() {
        $('.carousel').carousel('next');
        setTimeout(autoplay, 4500);
    }

    /*=================== GALLERY FILTERING FUCTION  ===================*/
    $(".filter-button").on("click", function () {
        var value = $(this).attr('data-filter');

        if (value == "gallery-no-filter") {
            $('.gallery-img-box').removeClass("gallery-hidden");
        } else {
            $(".gallery-img-box").not('.' + value).addClass("gallery-hidden");
            $('.gallery-img-box').filter('.' + value).removeClass("gallery-hidden");

        }
    });

    $('.filter-gallery .filter-button').on("click", function () {
        $('.filter-gallery').find('.filter-button.active').removeClass('active');
        $(this).addClass('active');
    });

    /*=================== MAGNIFICPOPUP GALLERY  ===================*/
    $(".gallery-list").magnificPopup({
        type: "image",
        removalDelay: 300
    });

    // ======================= PROMO  ======================= // 
    if ($('#promo-item').length > 0) {
        $("#promo-item").owlCarousel({
            dots: false,
            loop: true,
            autoplay: true,
            slideSpeed: 2000,
            margin: 0,
            responsiveClass: true,
            nav: false,
            navText: ["<i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>", "<i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>"],
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                480: {
                    items: 1,
                    nav: false
                },
                600: {
                    items: 1,
                    nav: false
                },
                1000: {
                    items: 1,
                    nav: false,
                    margin: 0
                }
            }

        });
    }

    // ======================= TESTIMONIAL  ======================= // 
    if ($('#testimonial-item').length > 0) {
        $("#testimonial-item").owlCarousel({
            dots: true,
            loop: true,
            autoplay: true,
            slideSpeed: 2000,
            margin: 0,
            responsiveClass: true,
            nav: false,
            navText: ["<i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>", "<i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>"],
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                480: {
                    items: 1,
                    nav: false
                },
                600: {
                    items: 1,
                    nav: false
                },
                1000: {
                    items: 1,
                    nav: false,
                    margin: 0
                }
            }

        });
    }

    /*=================== FOOTER ===================*/
    $('#page-content').css('min-height', $(document).height() - ($('#header').height() + $('.section.top-header-menu').height()) - $('#footer').height());

    $(function () {
        if ($('textarea#chan').length) {
            CKEDITOR.replace('chan');
        }
    })

    $("form").on("submit", e => {
        e.preventDefault();
        const name = $("#name")
            .val()
            .trim();
        const email = $("#email")
            .val()
            .trim();
        const phone = $("#phone")
            .val()
            .trim();
        const mainsub = $("#mainsub")
            .val()
            .trim();
        const text = $("#text")
            .val()
            .trim();
        const data = {
            name,
            email,
            phone,
            mainsub,
            text
        };
        $.post('/contact', data, function () {
            console.log('Server received our data');
        });
    });


})(jQuery);

var arrLang = {
    'en': {
        // HEADER
        'mn_yky': 'Yay Kyi Yar',

        // TOP MENU
        'tm_acc': 'Account',
        'tm_trip': 'My Trip',
        'tm_favo': 'favorite',

        // SIDE NAV
        'sn_yky': 'Yay Kyi Yar',
        'sn_travel_company': 'Travel & Tour Co., Ltd.',
        'sn_home': 'Home',
        'sn_contact': 'Contact',
        'sn_desti': 'Destination',
        'sn_team': 'Our Office Staff',
        'sn_gallery': 'Gallery',
        'sn_blog': 'Blog',

        // SERVICE
        'os_our': 'Our',
        'os_ser': 'Services',
        'os_book1': 'Booking',
        'os_book2': 'Tickets',
        'os_plan1': 'PlanningTours',
        'os_plan2': 'Tours',
        'os_docu': 'Documents',
        'os_bookho1': 'Booking',
        'os_bookho2': 'Hotel',
        'os_travel1': 'Travel',
        'os_travel2': 'Insurance',
        'os_trans': 'Transport',

        // PROMO
        'p_special1': 'See Our Special!',
        'p_special2': 'Promo Offers',
        'p_best_destin1': 'Best of ',
        'p_best_destin2': 'Destinations',
        'p_getin': 'Get In Touch!',

        // NEW
        'new_knowledge1': 'Knowledges',
        'new_knowledge2': ' News',

        // DESTINATION
        'des_vaca1': 'Vacations',
        'des_vaca2': ' destinations'

    },
    'mm': {
        // HEADER
        'mn_yky': 'ရေကြည်ရာ',

        // TOP MENU
        'tm_acc': 'အကောင့်',
        'tm_trip': 'ခရီးစဉ်များ',
        'tm_favo': 'စိတ်ဝင်စားဖွယ်',

        // SIDE NAV
        'sn_yky': 'ရေကြည်ရာ',
        'sn_travel_company': 'ရေကြည်ရာ အေဂျင်စီ',
        'sn_home': 'မူလ',
        'sn_contact': 'ဆက်သွယ်ရန်',
        'sn_desti': 'စရိတ်ငြိမ်းခရီးစဉ်များ',
        'sn_team': 'ကျွနု်ပ်တို့၏ ရုံးဝန်ထမ်းများ',
        'sn_gallery': 'ခရီးသွားဓာတ်ပုံများ',
        'sn_blog': 'ဘလော့စာမျက်နှာ',

        // SERVICE
        'os_our': 'ကျွန်ုပ်တို့၏ ',
        'os_ser': 'ဝန်ဆောင်မှုများ',
        'os_book1': 'ခရီးသွား',
        'os_book2': 'လက်မှတ်အစီအစဉ်',
        'os_plan1': 'အဖွဲ့လိုက်',
        'os_plan2': 'ခရီးစဉ်များ',
        'os_docu': 'ဗီဇာဝန်ဆောင်မှုများ',
        'os_bookho1': 'ဟိုတယ်',
        'os_bookho2': 'ဘွတ်ကင်များ',
        'os_travel1': 'ခရီးသွားအာမခံ',
        'os_travel2': 'ဝန်ဆောင်မှုများ',
        'os_trans': 'အမြန်ကား',

        // PROMO
        'p_special1': 'ကျွန်ုပ်တို့၏အထူးအရောင်း',
        'p_special2': 'မြှင့်ကမ်းလှမ်းချက်ကိုကြည့်ပါ',
        'p_best_destin1': 'ကမ္ဘာအနှံ့',
        'p_best_destin2': 'အကောင်းဆုံးခရီးစဉ်များအတွက်',
        'p_getin': 'Call Now!',

        // NEW
        'new_knowledge1': 'ဗဟုသုတ',
        'new_knowledge2': 'နေ့စဉ်သတင်းများ',
        'new_readmore': ' ဆက်လက်ဖတ်ရှုပါရန်',
        'new_readmore': 'READ MORE',

        // DESTINATION
        'des_vaca1': 'စရိတ်ငြိမ်းလည်ပတ်ဖို့ကောင်းသော',
        'des_vaca2': 'ခရီးစဉ်များ',

    }
};

$(function () {
    $('.translate').click(function () {
        var lang = $(this).attr('id');

        $('.lang').each(function (index, item) {
            $(this).text(arrLang[lang][$(this).attr('key')]);
        });
    });
});