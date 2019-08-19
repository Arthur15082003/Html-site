$(document).ready(function() {
  $('.category:eq(0)').css('color', '#63c0d1');
  $('.category:eq(3)').css('color', '#63c0d1');
  var position = $(window).scrollTop(); 
  var width = $(window).outerWidth();
  let marginTop = $('.home').css('marginTop');
  let marginNegative = -1 * parseInt(marginTop) + 'px';
  $('.line').css('top', marginNegative);
  $('.line').css({'height': $(document).height()});

  $(window).resize(function() {
    console.log(1);
    $('.line').css({'height': $(document).height()});
  });

   $(window).scroll(function() {
    let el1 = $('.home').offset().top;
    let el2 = $('.services').offset().top;
    let el3 = $('.contact').offset().top;
    let scrollSize = $(document).scrollTop();
    if (scrollSize < el2) {
      $('.category:eq(0)').css('color', '#63c0d1');
      $('.category:eq(3)').css('color', '#63c0d1');
    } else {
      $('.category:eq(0)').css('color', 'black'); 
      $('.category:eq(3)').css('color', 'black');
    }

    if (scrollSize >= el2 && scrollSize < el3) {
      $('.category:eq(1)').css('color', '#63c0d1')
      $('.category:eq(4)').css('color', '#63c0d1')
    } else {
      $('.category:eq(1)').css('color', 'black');
      $('.category:eq(4)').css('color', 'black');
    }
    if (scrollSize >= el3) {
      $('.category:eq(2)').css('color', '#63c0d1')
      $('.category:eq(5)').css('color', '#63c0d1')
    } else {
      $('.category:eq(2)').css('color', 'black');
      $('.category:eq(5)').css('color', 'black');
    }

    let currentScrolling = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScrolling > 0) {
      try {
        $('.logo-name').addClass('hidden-header-text').removeClass('logo-name');
      } catch (e) {

      }
    } else {
      $('.hidden-header-text').addClass('logo-name').removeClass('hidden-header-text');
    }


    var scroll = $(window).scrollTop();
    if(scroll > position) {
      $('.toggle-header-items').css('top', '-160px');
      $('.header').css('top', '-160px');
    } else {
      $('.toggle-header-items').css('top', 0);
      $('.header').css('top', 0); 
    }
    position = scroll;

  })

  function onToggleClick() {
    if ($('.toggle').hasClass('toggle-close-icon')) {
      $('.toggle-close-icon').removeClass('toggle-close-icon');
      $('.toggle-header-items').css('transform', 'translateY(-100px)');
      $('.toggle-header-items').css('opacity', '0');
      return;
    } else {
      $('.toggle').addClass('toggle-close-icon');
      $('.toggle-header-items').css('transform', 'translateY(80px)');
      $('.toggle-header-items').css('opacity', '1');
    }

  }

  $('.toggle').click(() => onToggleClick());
  $('.category').click(() => {
    if (width < 867) {
      onToggleClick();
    }
  });
});

