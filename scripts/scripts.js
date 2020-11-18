/* ***************************
スムーズスクロール
*************************** */
function smoothScroll() {

  $('a[href^="#"]').on('click', function () {
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });

}

/* ***************************
スクロールしたらフェードイン
*************************** */
function scrollFadein() {

  $(".pageTop").hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.pageTop').fadeIn();
    } else {
      $('.pageTop').fadeOut();
    }
  });

}

/* ***************************
スクロールしたらClass追加
*************************** */
function scrollClass() {

  var $header = $('#header');
  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      $header.addClass('header__navi');
    } else {
      $header.removeClass('header__navi');
    }
  });
}

/* ***************************
ページトップボタン
*************************** */
function scrollslide() {

  var showFlag = false;
  var topBtn = $('.pageTop');
  topBtn.css('bottom', '-100px');
  var showFlag = false;
  //スクロールが100に達したらボタン表示
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      if (showFlag == false) {
        showFlag = true;
        topBtn.stop().animate({
          'bottom': '50px'
        }, 200);
      }
    } else {
      if (showFlag) {
        showFlag = false;
        topBtn.stop().animate({
          'bottom': '-100px'
        }, 200);
      }
    }
  });

}

/*============================
SP Menu
============================*/
function spMenu() {

  $('.spMenu').off('click');

  $('.spMenu').on('click', function () {
    // メニュー表示/非表示
    $(".c-navGlobal").stop().slideToggle();
    $('.spMenu span').toggleClass('is-open');
    return false;
  });

}


function frontendInit() {

  try {

    smoothScroll();

    //    scrollFadein();

    //    scrollClass();

    //    scrollslide();

    spMenu();

  } catch (e) {

  } finally {

  }

};

$(function () {
  frontendInit();
});