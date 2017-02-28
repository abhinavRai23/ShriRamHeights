$(function() {
  $('#slider').rotateSlider({

  });

});

$(window).scroll(function() {

    if ($(this).scrollTop()>0)
     {
        $('#top-menu').fadeOut();
     }
    else
     {
      $('#top-menu').fadeIn();
     }
 });  
  // var fixmeTop = $('.fixme').offset().top;

if(screen.width > 480){

  var fixmeTop = 40;
  // console.log(fixmeTop);       // get initial position of the element

    $(window).scroll(function() {                  // assign scroll event listener

    var currentScroll = $(window).scrollTop(); // get current position

    if (currentScroll >= fixmeTop) {           // apply position: fixed if you
        $('.fixme').css({                      // scroll to that element or below it
            position: 'fixed',
            top: '0',
            left: '0',
            'padding-top':0+'px'
            // "background-color":#fff
        });
        $('.mainBody').css({
          position:'relative',
          'padding-top':7+'%'
        })
      } else {                                   // apply position: static
          $('.fixme').css({                      // if you scroll above it
              'padding-top':2.5+'%'
          });
      }

  });
}