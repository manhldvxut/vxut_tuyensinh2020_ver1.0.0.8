/*
	TRUONG DAI HOC CONG NGHE VAN XUAN
	TUYEN SINH DAI HOC 2020
	CODER: WSOFT9773@GMAIL.COM
*/

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

/*tracuuketqua --- manh 20200819*/
//start
function waitingid() {
    var waiting = document.getElementById("waiting");  //Goi Id anh gif
    waiting.style.display = 'block';  // Hien thi anh gif
    
    if ($("#txtName").val() === "") {  // Du lieu trong
        setTimeout(function(){
            $("#waiting").fadeOut(500);
            alert("Vui lﾃｲng nh蘯ｭp H盻� vﾃ� Tﾃｪn");  // Thong bao loi
        }, 200)
        return;
    }

    if ($("#txtName").val().length < 4 || $("#txtName").val().length > 50) { // Ten < 4 ky tu va lon hon 50 ky tu
      setTimeout(function(){
            $("#waiting").fadeOut(500);
            alert("H盻� vﾃ� Tﾃｪn c盻ｧa b蘯｡n khﾃｴng chﾃｭnh xﾃ｡c");  // Thong bao loi
        }, 200)
        return;
    }
    
    if ( $("#txtNgaySinhDay").val() >= 30 &&  $("#txtNgaySinhMonth").val() == 2 ) {  // Thang 2 khong co ngay 30 va 31
    	setTimeout(function(){
            $("#waiting").fadeOut(500);
            alert("Ng?y sinh c盻ｧa b蘯｡n khﾃｴng chﾃｭnh xﾃ｡c"); //Thong bao loi
        }, 200)
        return;
    }
       
    var txtName = $("#txtName").val(); //Nhap ten tu form
    
    txtName = txtName.toLowerCase()   //Doi chu cai dau thanh chu in hoa
	    .split(' ') //Lay du lieu sau dau ngoac
	    .map((s) => s.charAt(0).toUpperCase() + s.substring(1)) //Chu cai dau in hoa
	    .join(' ') // Noi dau cach
	    .replace(/\s\s+/g, ' ')// Loai bo nhieu dau cach o giua cau
	    .replace(/\s+$/, '');  //Loai bo dau cach sau cau
    
    var txtDate = $("#txtNgaySinhDay").val() + "/" + $("#txtNgaySinhMonth").val() + "/" + $("#txtNgaySinhYear").val();  //Du lieu nhap ngay thang nam sinh tu form
    
    $(document).ready(function() {
    
      $.ajax({
          type: "GET",
          url: "kqts.csv",   // Duong dan CSV file
          dataType: "text",
          success: function(data) {processData(data);}, // Doc file thanh cong
          error: function(data){						//Doc file khong thanh cong, File khong ton tai
          	setTimeout(function(){
	            $("#waiting").fadeOut(500);
	            alert("Dinh dang file loi hoac file file khong ton tai, vui long kiem tra lai file");
	        }, 200)
	        return;
      		}
      });
          
      function processData(data) {  // Khi sccess = true
      
          var lines = data.split(/\r\n|\n/); // Dem dong
          var HoTen = [];  // Goi Ho va Ten
          var Ngaysinh = [];   // Goi ngay sinh
          var Nganh_trung = []  //Nganh trung tuyen
          
          var headings = lines[0].split(',');  // Gia tri header
          
          for (var j=1; j<lines.length; j++) {
            var values = lines[j].split(','); //lay cac gia tri trong lines
            
            HoTen = values[1]; //Du lieu ho va Ten
            Ngaysinh = values[2];  // Du lieu nganh sinh
            Nganh_trung = values[5]  // Du lieu nganh trung tuyen
            
            if((HoTen == txtName ) && (Ngaysinh == txtDate)){ // Truong hop Dung
              setTimeout(function(){   // Dua ra thong bao khi ket qua tra ve trung nhau
                    $("#waiting").fadeOut(500);
                      document.getElementById('thongbao').innerHTML = "Chuc mung ban " + HoTen + " da trung tuyen nganh " + Nganh_trung + " truong DHCN Van Xuan ";
                }, 500)
                break;  // ket thuc ket qua tim kiem
              }
            else{
                setTimeout(function(){ // Truong hop ket qua khong trung nhau.
                    $("#waiting").fadeOut(500);
                      document.getElementById('thongbao').innerHTML = "Chao ban " + txtName + "<br> Du lieu cua ban khong co trong he thong <br> Vui long lien he voi so dien thoai 0969 199 722 <br> De duoc biet them chi tiet";
                }, 500)
                
            }
         } 
      }
   })
};
//end

/*Khi ket thuc mua tuyen sinh*/
// start
var current = new Date();  // thoi gian hien tai
var month = current.getMonth();  // Thang hien tai
if((month < 5) || (month > 12)){  // thang < 5 hoac > 12 thi layout tra cuu khong hien thi
	document.getElementById("tracuu").style.display = "none";
}
// End
