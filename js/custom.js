(function($) {
    "use strict";

    // Preloader 
    jQuery(window).on('load', function() {
        jQuery("#status").fadeOut();
        jQuery("#preloader").delay(350).fadeOut("slow");
    });

    // on ready function
    jQuery(document).ready(function($) {
        var $this = $(window);

        // Back to Top js
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('#scroll').fadeIn();
            } else {
                $('#scroll').fadeOut();
            }
        });
        $('#scroll').on("click", function() {
            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        });

        // Menu show Hide
        var counter = 0;
        $('.lv_menu_btn').on("click", function(e) {
            if (counter == '0') {
                $('.lv_main_menu_wrapper').addClass('lv_main_menu_hide');
                $(this).children().removeAttr('class');
                $(this).children().attr('class', 'fa fa-close');
                counter++;
            } else {
                $('.lv_main_menu_wrapper').removeClass('lv_main_menu_hide');
                $(this).children().removeAttr('class');
                $(this).children().attr('class', 'fa fa-bars');
                counter--;
            }
        });

        // Magnific popup-video
        $('.popup-youtube').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,

            fixedContentPos: false
        });


        // Menu js for Position fixed
        $(window).scroll(function() {
            var window_top = $(window).scrollTop() + 1;
            if (window_top > 500) {
                $('.lv_bottom_header_wrapper, .lv_top_header_wrapper').addClass('menu_fixed animated fadeInDown');
            } else {
                $('.lv_bottom_header_wrapper, .lv_top_header_wrapper').removeClass('menu_fixed animated fadeInDown');
            }
        });

        //show hide login form js
        $('#search_button').on("click", function(e) {
            $('#search_open').slideToggle();
            e.stopPropagation();
        });

        $(document).on("click", function(e) {
            if (!(e.target.closest('#search_open'))) {
                $("#search_open").slideUp();
            }
        });

        // Event Gallery Slder
        $('.lv_glry_slider .owl-carousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        });

        // Flickr Gallery Slder
        $('.lv_flickr_slider .owl-carousel').owlCarousel({
            loop: true,
            margin: 5,
            nav: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 6
                }
            }
        });

        // Magnific Popup js
        $('.popup-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function(item) {
                    return item.el.attr('title') + '<small></small>';
                }
            }
        });

        // Magnific Popup js
        $('.flickr-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function(item) {
                    return item.el.attr('title') + '<small></small>';
                }
            }
        });

        // Magnific Popup Latest News js
        $('.popup-news').magnificPopup({
            delegate: '.lv_ltnews_box_img a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function(item) {
                    return item.el.attr('title') + '<small></small>';
                }
            }
        });

        // Tweeter Slider	
        $('.btn-vertical-slider').on('click', function() {

            if ($(this).attr('data-slide') == 'next') {
                $('#myCarousel').carousel('next');
            }
            if ($(this).attr('data-slide') == 'prev') {
                $('#myCarousel').carousel('prev')
            }

        });

        // Contact Form Submition
        $("#lv_submit").on("click", function() {
            var e = $("#uname").val();
            var t = $("#umail").val();
            var r = $("#msg").val();
            var n = $("#unum").val();
            $.ajax({
                type: "POST",
                url: "ajaxmail.php",
                data: {
                    username: e,
                    useremail: t,
                    mesg: r,
                    unum: n
                },
                success: function(n) {
                    var i = n.split("#");
                    if (i[0] == "1") {
                        $("#uname").val("");
                        $("#umail").val("");
                        $("#msg").val("");
                        $("#unum").val("");
                        $("#err").html(i[1]);
                    } else {
                        $("#uname").val(e);
                        $("#umail").val(t);
                        $("#msg").val(r);
                        $("#unum").val(n);
                        $("#err").html(i[1]);
                    }
                }
            });
        });

        // Single page scroll menu
        var pluginName = 'ScrollIt',
            pluginVersion = '1.0.3';

        /*
         * OPTIONS
         */
        var defaults = {
            upKey: 38,
            downKey: 40,
            easing: 'linear',
            scrollTime: 600,
            activeClass: 'active',
            onPageChange: null,
            topOffset: -85
        };

        $.scrollIt = function(options) {

            /*
             * DECLARATIONS
             */
            var settings = $.extend(defaults, options),
                active = 0,
                lastIndex = $('[data-scroll-index]:last').attr('data-scroll-index');

            /*
             * METHODS
             */

            /**
             * navigate
             *
             * sets up navigation animation
             */
            var navigate = function(ndx) {
                if (ndx < 0 || ndx > lastIndex) {
                    return;
                }

                var targetTop = $('[data-scroll-index=' + ndx + ']').offset().top + settings.topOffset + 1;
                $('html,body').animate({
                    scrollTop: targetTop,
                    easing: settings.easing
                }, settings.scrollTime);
            };

            /**
             * doScroll
             *
             * runs navigation() when criteria are met
             */
            var doScroll = function(e) {
                var target = $(e.target).closest("[href]").attr('href') ||
                    $(e.target).closest("[data-scroll-goto]").attr('data-scroll-goto');
                navigate(parseInt(target, 10));
            };

            /**
             * keyNavigation
             *
             * sets up keyboard navigation behavior
             */
            var keyNavigation = function(e) {
                var key = e.which;
                if ($('html,body').is(':animated') && (key == settings.upKey || key == settings.downKey)) {
                    return false;
                }
                if (key == settings.upKey && active > 0) {
                    navigate(parseInt(active, 10) - 1);
                    return false;
                } else if (key == settings.downKey && active < lastIndex) {
                    navigate(parseInt(active, 10) + 1);
                    return false;
                }
                return true;
            };

            /**
             * updateActive
             *
             * sets the currently active item
             */
            var updateActive = function(ndx) {
                if (settings.onPageChange && ndx && (active != ndx)) {
                    settings.onPageChange(ndx);
                }

                active = ndx;
                $('[href]').removeClass(settings.activeClass);
                $('[href=' + ndx + ']').addClass(settings.activeClass);
            };

            /**
             * watchActive
             *
             * watches currently active item and updates accordingly
             */
            var watchActive = function() {
                var winTop = $(window).scrollTop();

                var visible = $('[data-scroll-index]').filter(function(ndx, div) {
                    return winTop >= $(div).offset().top + settings.topOffset &&
                        winTop < $(div).offset().top + (settings.topOffset) + $(div).outerHeight();
                });
                var newActive = visible.first().attr('data-scroll-index');
                updateActive(newActive);
            };

            /*
             * runs methods
             */
            $(window).on('scroll', watchActive).scroll();

            $(window).on('keydown', keyNavigation);

            $('.lv_single_index_menu').on('click', '[href], [data-scroll-goto]', function(e) {
                e.preventDefault();
                doScroll(e);
            });

        };


        // CountDown Js
        var deadline = 'November 3 2018 11:59:00 GMT-0400';

        function time_remaining(endtime) {
            var t = Date.parse(endtime) - Date.parse(new Date());
            var seconds = Math.floor((t / 1000) % 60);
            var minutes = Math.floor((t / 1000 / 60) % 60);
            var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
            var days = Math.floor(t / (1000 * 60 * 60 * 24));
            return {
                'total': t,
                'days': days,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            };
        }

        function run_clock(id, endtime) {
            var clock = document.getElementById(id);

            // get spans where our clock numbers are held
            var days_span = clock.querySelector('.days');
            var hours_span = clock.querySelector('.hours');
            var minutes_span = clock.querySelector('.minutes');
            var seconds_span = clock.querySelector('.seconds');

            function update_clock() {
                var t = time_remaining(endtime);

                // update the numbers in each part of the clock
                days_span.innerHTML = t.days;
                hours_span.innerHTML = ('0' + t.hours).slice(-2);
                minutes_span.innerHTML = ('0' + t.minutes).slice(-2);
                seconds_span.innerHTML = ('0' + t.seconds).slice(-2);

                if (t.total <= 0) {
                    clearInterval(timeinterval);
                }
            }
            update_clock();
            var timeinterval = setInterval(update_clock, 1000);
        }
        run_clock('clockdiv', deadline);

    });
})();