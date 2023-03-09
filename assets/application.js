// $(document).ready(function () {

//   	var $slider = $('.brands-slider-wrapper');
//     var $progressBar = $('.progress');
//     var cookie = Cookies.get('sele-cookie')
//     var currency = '€'
//     var $firstImgSrc = $( ".small-image:first-of-type" ).find("img").attr("src")
//     var $firstImgAlt = $( ".small-image:first-of-type" ).find("img").attr("alt")
//     $(".featured-image img").first().attr("src", $firstImgSrc);

//     if (cookie) {
//         $(".cookies").css("display", "none");
//     }

//   	var $grid = $(".photoshoots-wrapper").masonry({
//         // options
//         itemSelector: ".slide",
//         columnWidth: ".slide",
//         percentPosition: true,
//         gutter: 30,
//         fitWidth: true
//     });

//   $grid.imagesLoaded().progress(function() {
//   $grid.masonry("layout");
// });

//     $(window).scroll(function() {
//     	var scrollTop = $(this).scrollTop();

//       $('.header-background').css({
//         opacity: function() {
//           var elementHeight = $(this).height();
//           return 1 - (elementHeight - scrollTop) / elementHeight;
//         }
//       });
//     });

//   	$(window).on('load', function() {
//       $('.logo-anim').addClass('logo-anim-start');
// 	});

//   	$('.logo-anim').on('animationend', function () {
//         $('.logo-anim-container').css('opacity', '0')
//         setTimeout(function () {
//             $('.logo-anim-container').css('display', 'none')
//         }, 500)
//     })

//     $('.small-image').click(function () {
//       $(".featured-image > video").first().remove();
//       $(".featured-image > iframe").first().remove();
//       $(".featured-image > img").first().remove();
//       $(".featured-image").prepend(`
//         <img class="product-image first" src="${$(this).find("img").attr("src")}" alt="${$(this).find("img").attr("alt")}">
//       `);

//       $('.small-image img, .small-media iframe, .small-video video').css("border", "0px solid #FFE58A");
//       $(this).find("img").css("border", "5px solid #FFE58A");
//     });

//     $('.small-media').click(function () {
//       const iframe = $(this).find('iframe').clone().addClass('first');
//       $(".featured-image > video").first().remove();
//       $(".featured-image > iframe").first().remove();
//       $(".featured-image > img").first().remove();
//       $(".featured-image").prepend(iframe);

//       $('.small-image img, .small-media iframe, .small-video video').css("border", "0px solid #FFE58A");
//       $(this).find("iframe").css("border", "5px solid #FFE58A");
//     });

//     $('.small-video').click(function () {
//       const video = $(this).find('video').clone().addClass('first');
//       $(".featured-image > video").first().remove();
//       $(".featured-image > iframe").first().remove();
//       $(".featured-image > img").first().remove();
//       $(".featured-image").prepend(video);

//       $('.small-image img, .small-media iframe, .small-video video').css("border", "0px solid #FFE58A");
//       $(this).find("video").css("border", "5px solid #FFE58A");
//     });

//     $('.search-bar').click(function () {
//       if($(".search-close").css("width") == "0px" ) {
//         $(".search-bar > .search-form input").css("width", "7rem");
//         $(".search-bar > .search-form button").css("pointer-events", "unset");
//         $(".search-close").css("width", "20px");
//         $(".search-form").css("gap", "20px");

//       }
//     });

//    	$('.search-close').click(function () {
//      	$(".search-bar > .search-form input").css("width", "0rem");
//         $(".search-bar > .search-form button").css("pointer-events", "none");
//         $(".search-close").css("width", "0px");
//       $(".search-form").css("gap", "0");
//     });

//     $('.slide').click(function () {
//         var $slide = $('.slide').index(this);
//         $('.gallery-slider-wrapper').slick('slickGoTo', $slide);
//         $(".gallery-slider").css("opacity", "1");
//         $(".gallery-slider").css("pointer-events", "unset");
//         $("body").css("overflow", "hidden");
//     });

//     $('.close-gallery').click(function () {
//         $(".gallery-slider").css("opacity", "0");
//         $(".gallery-slider").css("pointer-events", "none");
//         $("body").css("overflow", "unset");
//     });

//     $('.cookies-close').click(function () {
//         Cookies.set('sele-cookie', true, {
//             expires: 7,
//             path: ''
//         })
//         Cookies.set('sele-opt-out', true, {
//             expires: 7,
//             path: ''
//         })
//         $(".cookies").css("opacity", "0");
//         $(".cookies").css("pointer-events", "none");
//     });

//     $('.cookies-accept').click(function () {
//         Cookies.set('sele-cookie', true, {
//             expires: 7,
//             path: ''
//         })
//         Cookies.set('sele-opt-in', true, {
//             expires: 7,
//             path: ''
//         })
//         $(".cookies").css("opacity", "0");
//         $(".cookies").css("pointer-events", "none");
//     });

//     for (let i = 0; i < $('.metafield').length; i++) {
//         let $metafield = $('.metafield').eq(i);
//         $metafield.click(function () {
//           $('.metafield-desc').css("height", "0");
//           $('.metafield-controller').css("opacity", "1");

//           $metafield.children('.metafield-desc').css("height", "fit-content");
//           $metafield.children('.metafield-controller').css("opacity", "0");
//         })
//     }

//     $('.close-info').click(function () {
//         $(".delivery-information").css("right", "-100vw");
//     });

//     $('.open-info').click(function () {
//         $(".delivery-information").css("right", "0");
//     });

//   	$('.btn-plus, .btn-minus').on('click', function(e) {
//       const isNegative = $(e.target).closest('.btn-minus').is('.btn-minus');
//       const input = $(e.target).closest('.input-group').find('input');
//       if (input.is('input')) {
//         input[0][isNegative ? 'stepDown' : 'stepUp']()
//       }
//     })

//     $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
//         var calc = ((nextSlide) / (slick.slideCount - 1)) * 100 * 2;

//         $progressBar
//             .css('background-size', calc + '% 100%')
//             .attr('aria-valuenow', calc);
//     });

//     $('.quote-slider-wrapper').slick({
//         fade: true,
//         infinite: true,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         swipeToSlide: true,
//         arrows: false,
//         dots: true,
//         autoplay: true,
//         autoplaySpeed: 2000,
//     });

//     $('.brands-slider-wrapper').slick({
//         infinite: false,
//         slidesToShow: 5,
//         slidesToScroll: 1,
//         swipeToSlide: true,
//         arrows: true,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         prevArrow: $('.prev-brands'),
//         nextArrow: $('.next-brands'),
//         responsive: [
//             {
//             breakpoint: 1024,
//             settings: {
//                 slidesToShow: 4,
//                 }
//             },
//             {
//             breakpoint: 600,
//             settings: {
//                 slidesToShow: 2,
//                 }
//             },
//             {
//             breakpoint: 480,
//             settings: {
//                 slidesToShow: 1,
//                 }
//             }
//         ]
//     });

//     $('.gallery-slider-wrapper').slick({
//         fade: true,
//         infinite: true,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         swipeToSlide: true,
//         arrows: true,
//         dots: false,
//         prevArrow: $('.prev-gallery'),
//         nextArrow: $('.next-gallery'),
//     });

//     $('.slide-show-wrapper').slick({
//         infinite: true,
//         slidesToScroll: 1,
//         slidesToShow: 1,
//         swipeToSlide: true,
//         arrows: true,
//         dots: false,
//         variableWidth: true,
//         centerMode: true,
//         prevArrow: $('.prev-gallery'),
//         nextArrow: $('.next-gallery'),
//     });

//     var $productJson = $(location).attr('href').concat('.json');

//     $.getJSON($productJson, function(data) {
//       var js = data;

//       if (js.product) {
//         if (js.product.variants){
//           $('.product-price').html(currency.concat(js.product.variants[0].price));

//           //Change price on variant
//           $('.product-select').change(function () {
//             var $i = $(this).prop('selectedIndex');
//             $('.product-price').html(currency.concat(js.product.variants[$i].price));
//           });
//         }
//       }
//     });
// });
