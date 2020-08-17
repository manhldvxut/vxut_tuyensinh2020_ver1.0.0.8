new WOW().init();

$(document).ready(function () {

    if ($(window).innerWidth() >= 768) {
        $(window).scroll(function () { // load image xettuyen
            if ($(window).scrollTop() >= 1000) {
                $('.xettuyen-desk').addClass('act');
            }
            else {
                $('.xettuyen-desk').removeClass('act');
            }
        });
    } else {
        $('.xettuyen-desk').removeClass('act');
    }

    $(window).scroll(function(){    // load entry button
        if ($(this).scrollTop() > $(document).height() - $(window).height() - 900 || $(this).scrollTop() < 2000) {
        	$('.entry').fadeOut();
        }
        else {
            $('.entry').fadeIn();
        }
    });
    $(function() {
        $(document).ready(function(){ // cover box
            $(".cover_boxes2 ul li").hover(function(){
                  $('.cover_boxes2 ul li').removeClass('act');
                  $(this).addClass('act');
              });
              $(".cover_boxes ul li").hover(function(){
                  $('.cover_boxes ul li').removeClass('act');
                  $(this).addClass('act');
                });
          });
    });
     $(window).scroll(function(){ // scroll page
        if ($(this).scrollTop() > 1000) {
            $('#back_to_top').fadeIn();
        } else {
            $('#back_to_top').fadeOut();
        }
    });
    $('#back_to_top').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

    if($(window).innerWidth() >= 1024){ //load hover sinhvien
      $(function(){
          $('.list-blog .col-md-3 .avarta').hover(function() {
              $('.list-blog .col-md-3').addClass('hover');
            }, function() {
              $('.list-blog .col-md-3').removeClass('hover');
          })
      })

      $(function(){
          $('.list-blog .item').hover(function() {
              $(this).next('.list-blog .item').addClass('hide-hv');
            }, function() {
              $(this).next('.list-blog .item').removeClass('hide-hv');
          })
      })

      $(function(){
          $('.list-blog .item:nth-child(4n)').hover(function() {
              $(this).next('.list-blog .item').removeClass('hide-hv');
              $(this).prev('.list-blog .item').addClass('cir-rad');
            }, function() {
              $(this).prev('.list-blog .item').removeClass('cir-rad');
          })
        })
    }

    /*Title h2 bg_white*/
    jQuery(function($) {
        var text_effect = function() {
            var offset = $(window).scrollTop() + $(window).height(),
                $animatables = $('.title h2');
            if ($animatables.length == 0) {
                $(window).off('scroll', text_effect);
            }
            $animatables.each(function(i) {
                var $animatable = $(this);
                if (($animatable.offset().top + $animatable.height() - 20) < offset) {
                  $animatable.removeClass('animatable').addClass('animated');
                }
              });
          };

          $(window).on('scroll', text_effect);
          $(window).trigger('scroll');
    });
});

/*tracuuketqua*/

//date
        

//tracu

function waitingid() {
    var wating = document.getElementById("waiting");

    // kiem tra du lieu
    if ($("#txtName").val() === "") {
        alert("Vui long nhap ho va ten");
        return;
    }

    if ($("#txtName").val().length < 3) {
        alert("Vui long nhap chinh xac");
        return;
    }
};




const outputElement = document.getElementById('output_csv');

function getCsvData(dataPath) {
 const request = new XMLHttpRequest();
 request.addEventListener('load', (event) => {
  const response = event.target.responseText;
  outputElement.innerHTML = response;
 });
 request.open('GET', dataPath, true);
 request.send();
}

getCsvData('C:/kqtt.csv');


