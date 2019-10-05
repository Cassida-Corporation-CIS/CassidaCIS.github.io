$(function() {

    $.browserSelector();
  if($("html").hasClass("chrome")) {
    $.smoothScroll();
  }

  $('.navbar-nav > li ').hover(function () {
    $(this).addClass('onhover');
  },
  function () {
    $(this).removeClass('onhover');
  });

  $('.media-carousel').owlCarousel({
    items:4,
    nav: true,
    responsive: {
      0: {
        items: 1
      },

      630: {
        items: 2
      },

      991: {
        items: 3
      },

      1200: {
        items: 4
      }
    }
  });

  $('.partners-car').owlCarousel({
  items:6,
  nav: true,
  responsive: {
    0: {
      items: 1
    },

    440: {
      items: 1
    },

    630: {
      items: 3
    },

    960: {
      items: 4
    },

    1200: {
      items: 6
    }
  }
  });


  $('.gally-carousel').owlCarousel({
    items:6,
    nav: true,
    responsive: {
      0: {
        items: 1
      },

      440: {
        items: 1
      },

      630: {
        items: 3
      },

      960: {
        items: 4
      },

      1200: {
        items: 5
      }
    }
  });

  
  

  interView();

  $('.nav-preview > li').click(function () {
    var page = $(this).attr('data-page');
    if(page) {
      $(window).trigger('resize');
      $('.preview-box > div').removeClass('active');
      $('.preview-box > div').removeClass('anim');
      $('#'+page).addClass('active');

      setTimeout(function () {
        $('#'+page).addClass('anim');
      }, 300);


      $('.nav-preview > li').removeClass('active');
      $(this).addClass('active');
    }


  });

  footer();

  window.resize = function () {
    footer();
  };

  $('[data-toggle="tooltip"]').tooltip();

  $('.inc-gally').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    }
  });


  $('.inter-img').load(function () {
    
  });

  $('.loader-ct img').load(function () {
    var cont = $(this).parent('.loader-ct');
    $(cont).removeClass('loader');
    $(this).css('opacity', '1');
  });


  $('.colors .color').click(function () {
    $('.inter-view').addClass('loader');
    $('.inter-view img').css('opacity', '0.1');
  });

  $('#mainvideo').playbackRate = 0.5;


  $('.c-hamburger').click(function () {
    $(this).toggleClass('is-active');
    $('.main-nav').toggleClass('open');
    // $('.nav-toggle').toggleClass('open');

    setTimeout(function () {
      $('.main-nav').toggleClass('anim');
    }, 100);


  });
  
  $('#bonus_form').submit(function (e) {
    e.preventDefault();
    console.log($(this).serialize());
    var data = $(this).serialize();
    $.ajax({
      type: "POST",
      url: 'http://'+window.location.hostname+'/reqSend.php',
      data: data,
      success: function (data) {
        $('#succ').addClass('open');
        $('#bonus_form .btn-danger').hide();
      }
    });

  });
  
  $('#succ-close').click(function () {
    $('#succ').removeClass('open');
  });



});



$(document).scroll(function() {
  var footer = $('#footer');
  var ftop = $('html').height();
  var fh = $(footer).outerHeight();
  var sbot = $(window).scrollTop() + window.innerHeight;
  

  if($(window).scrollTop() > 200) {
    $('#header').addClass('stick');
    $('#header').slideDown();
  } else {
    $('#header').removeClass('stick');
  }
  


});

function interView() {
  $('.inter-point').each(function (i, elem) {
    var xpos = $(elem).attr('data-xpos');
    var ypos = $(elem).attr('data-ypos');
    var view = $(elem).attr('data-inter');

    $(elem).css({"left":xpos+'px', "top": ypos+'px'});
    $('#'+view).css({"left":xpos +'px', "top": ypos+'px'});

  });

  $('.inter-point').hover(function () {

    var view = $(this).attr('data-inter');

    $('#'+view).fadeIn(270);

  }, function () {
      var view = $(this).attr('data-inter');
      $('#'+view).hide()
    }
  )
}




function footer() {
  var fh = $('#footer').outerHeight();
  $('#main').css('margin-bottom', fh);
  
}



