$(document).ready(function () {
  const hotelSwiper = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
  effect: "coverflow",
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  });
  const reviewsSwiper = new Swiper('.reviews-slider', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.reviews-slider__button--next',
      prevEl: '.reviews-slider__button--prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });

  var menuButton = $('.menu-button');
  menuButton.on('click', function (){
    $('.navbar-bottom').toggleClass('navbar-bottom--visible');
  });

  var modalButton = $('[data-toggle=modal]');
  var closeModalButton = $('.modal__close');
  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);

  function openModal() {
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.addClass('modal__overlay--visible');
    modalDialog.addClass('modal__dialog--visible');
    $(document).on('keydown', function(e){
      if(e.which === 27){ 
        modalOverlay.removeClass('modal__overlay--visible');
        modalDialog.removeClass('modal__dialog--visible');
      };
    });
  };
  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
  };
  //Обработка форм
  $('.form').each(function() {
    $(this).validate({
    errorClass: "invalid",
    messages: {
      name: {
        required: "Please enter your name",
        minlength: "Name must be at least 2 letters long",
      },
      email: {
        required: "Please enter your email",
        email: "Your email address must be in the format of name@domain.com"
      },
        phone: {
          required: "Please enter your phone",
          minlength: "Format: +7 (999) 999-99-99"
        },
      },
    });
  })
  var customOptions = {
  onKeyPress: function(val, e, field, options) {

    if (val.replace(/\D/g, '').length===2)
    {
        val = val.replace('8','');    
        field.val(val);
     }
     field.mask("+7 (999) 999-99-99", options);
    },
  };
  $("input[name='phone']").mask("+7 (999) 999-99-99", customOptions);
  AOS.init();
});