AOS.init({duration:800,easing:"slide",once:!0}),jQuery(document).ready(function(e){"use strict";e(".js-clone-nav").each(function(){e(this).clone().attr("class","site-nav-wrap").appendTo(".site-mobile-menu-body")}),setTimeout(function(){var s=0;e(".site-mobile-menu .has-children").each(function(){var a=e(this);a.prepend('<span class="arrow-collapse collapsed">'),a.find(".arrow-collapse").attr({"data-toggle":"collapse","data-target":"#collapseItem"+s}),a.find("> ul").attr({class:"collapse",id:"collapseItem"+s}),s++})},1e3),e("body").on("click",".arrow-collapse",function(a){var s=e(this);s.closest("li").find(".collapse").hasClass("show")?s.removeClass("active"):s.addClass("active"),a.preventDefault()}),e(window).resize(function(){768<e(this).width()&&e("body").hasClass("offcanvas-menu")&&e("body").removeClass("offcanvas-menu")}),e("body").on("click",".js-menu-toggle",function(a){var s=e(this);a.preventDefault(),e("body").hasClass("offcanvas-menu")?(e("body").removeClass("offcanvas-menu"),s.removeClass("active")):(e("body").addClass("offcanvas-menu"),s.addClass("active"))}),e(document).mouseup(function(a){var s=e(".site-mobile-menu");s.is(a.target)||0!==s.has(a.target).length||e("body").hasClass("offcanvas-menu")&&e("body").removeClass("offcanvas-menu")}),0<e(".nonloop-block-13").length&&e(".nonloop-block-13").owlCarousel({center:!1,items:1,loop:!0,stagePadding:0,margin:0,autoplay:!0,nav:!0,navText:['<span class="icon-arrow_back">','<span class="icon-arrow_forward">'],responsive:{600:{margin:0,nav:!0,items:2},1e3:{margin:0,stagePadding:0,nav:!0,items:3},1200:{margin:0,stagePadding:0,nav:!0,items:4}}}),e(".slide-one-item").owlCarousel({center:!1,items:1,loop:!0,stagePadding:0,margin:0,autoplay:!0,pauseOnHover:!1,nav:!0,navText:['<span class="icon-keyboard_arrow_left">','<span class="icon-keyboard_arrow_right">']}),e(window).stellar({responsive:!1,parallaxBackgrounds:!0,parallaxElements:!0,horizontalScrolling:!1,hideDistantElements:!1,scrollProperty:"scroll"}),e("#date-countdown").countdown("2020/10/10",function(a){e(this).html(a.strftime('<span class="countdown-block"><span class="label">%w</span> weeks </span><span class="countdown-block"><span class="label">%d</span> days </span><span class="countdown-block"><span class="label">%H</span> hr </span><span class="countdown-block"><span class="label">%M</span> min </span><span class="countdown-block"><span class="label">%S</span> sec</span>'))}),0<e(".datepicker").length&&e(".datepicker").datepicker(),e(".js-sticky-header").sticky({topSpacing:0}),e(".site-menu-toggle"),e("body").on("click",".main-menu li a[href^='#'], .smoothscroll[href^='#'], .site-mobile-menu .site-nav-wrap li a",function(a){a.preventDefault();var s=this.hash;e("html, body").animate({scrollTop:e(s).offset().top},600,"easeInOutCirc",function(){window.location.hash=s})});e(window).scroll(function(){100<e(this).scrollTop()?e(".js-sticky-header").addClass("shrink"):e(".js-sticky-header").removeClass("shrink")})});