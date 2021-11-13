
$(document).ready(function(){
$(".dl_space2_hinh").slick({
    dots: true,
    infinite: true,
    // speed: 500,
    // fade: true,
    // cssEase: 'linear'.
    autoplay: true,
    autoplaySpeed: 2000,
    // prevArrow: '<div class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
    // nextArrow: '<div class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
    // arrow: true,
    prevArrow:"<button type='button' class='slick-prev slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
    });
}); 
$(document).ready(function(){
$(".time-page").slick({
      infinite: true,
      prevArrow:"<button type='button' class='slick-prev slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
      nextArrow:"<button type='button' class='slick-next slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
      });
}); 

$(document).ready(function(){
  $(".sp-page").slick({
      infinite: true,
      prevArrow:"<button type='button' class='slick-prev slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
      nextArrow:"<button type='button' class='slick-next slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
      });
}); 
$(document).ready(function(){
  $(".sp-page1").slick({
      infinite: true,
      prevArrow:"<button type='button' class='slick-prev slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
      nextArrow:"<button type='button' class='slick-next slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
      });
}); 

$(document).ready(function(){
$(".infot_hinhto").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".infot_text_4",
    prevArrow:"<button type='button' class='slick-prev slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
  });
$(".infot_text_4").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: ".infot_hinhto",
    // dots: true,
    centerMode: true,
    focusOnSelect: true,
    prevArrow:"<button type='button' class='slick-prev slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
  });
}); 

$(document).ready(function(){
  $(".anhgiay").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: ".slide-giay",
      prevArrow:"<button type='button' class='slick-prev slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
      nextArrow:"<button type='button' class='slick-next slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
    });
  $(".slide-giay").slick({
      autoplay: true,
      autoplaySpeed: 2000,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: ".anhgiay",
      // dots: true,
      centerMode: true,
      focusOnSelect: true,
      prevArrow:"<button type='button' class='slick-prev slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
      nextArrow:"<button type='button' class='slick-next slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
    });
  }); 

$(document).ready(function(){
  $(".recom").slick({
        infinite: true,
        prevArrow:"<button type='button' class='slick-prev slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
        });
  }); 
