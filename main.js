AOS.init();
//nav버튼 클릭 이동
$(".nav__skills").click(function () {
  document.querySelector(".skills__head").scrollIntoView(true);
});
$(".nav__project").click(function () {
  document.querySelector(".project__head").scrollIntoView(true);
});

//홈으로 버튼
$(window).scroll(function () {
  if ($(this).scrollTop() > 500) {
    $(".goHome").fadeIn("fast");
  } else {
    $(".goHome").fadeOut("fast");
  }
});
$(".goHome").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 500);
});


$('.home__main--text2:contains("FRONT-END")').css("color", "var(--y-color)");

//스크롤 위치에 따른 자연스럽게 사라지는 효과, 모바일 계산 다시해야함
$(window).scroll(function () {
  var scrollHeight = $(window).scrollTop();
  console.log(scrollHeight);
  var homeY = (-1 / 800) * scrollHeight + 1;
  $(".home__box").eq(0).css("opacity", homeY);
  var homeY2 = (-1 / 500) * scrollHeight + 3;
  $(".home__box").eq(1).css("opacity", homeY2);
  var homeY3 = (-1 / 500) * scrollHeight + 4.8;
  $(".home__box").eq(2).css("opacity", homeY3);
});

//타이핑 효과
var homeTyping = document.querySelector(".home__main--text1");
var homeText = document.querySelector(".home__main--text1").innerHTML;
var homeTypingSecond = document.querySelector(".home__main--text2");
var homeTextSecond = document.querySelector(".home__main--text2").innerHTML;
var homeTypingThird = document.querySelector(".home__main--text3");
var homeTextThird = document.querySelector(".home__main--text3").innerHTML;

window.addEventListener("load", function () {
  homeTyping.innerHTML = "";
  homeTypingSecond.innerHTML = "";
  homeTypingThird.innerHTML = "";
  for (let i = 0; i < homeText.length; i++) {
    setTimeout(function () {
      homeTyping.innerHTML = homeTyping.innerHTML + homeText[i];
    }, i * 80);
  }
  for (let i = 0; i < homeTextSecond.length; i++) {
    setTimeout(function () {
      homeTypingSecond.innerHTML = homeTypingSecond.innerHTML + homeTextSecond[i];
    }, (i + homeText.length) * 80);
  }
  for (let i = 0; i < homeTextThird.length; i++) {
    setTimeout(function () {
      homeTypingThird.innerHTML = homeTypingThird.innerHTML + homeTextThird[i];
    }, (i + homeText.length + homeTextSecond.length) * 80);
  }
});

//스킬 슬라이드

var nowskills = 1;
$(".skills__btn--right").click(function () {
  if (nowskills < 5) {
    $(".skills").css("transform", "translateX(-" + nowskills + "00vw)");
    nowskills = nowskills + 1;
  }
});

$(".skills__btn--left").click(function () {
  if (nowskills > 1) {
    $(".skills").css("transform", "translateX(-" + (nowskills - 2) + "00vw)");
    nowskills = nowskills - 1;
  }
});


//연락처 아이콘 연동
let mobile = '010-9128-6689'
let email = 'forking91@gmail.com'
let gitad = 'https://github.com/pomeranian91/portfolio.git'
$('.mobileNum').click(function(){
  if($('.contact__text').css('display') == "none"){
    $('.contact__text').show();
    $('.contact__text').html(mobile);
  }
  else if($('.contact__text').css('display') == "block" && $('.contact__text').html() == email|| $('.contact__text').html() == gitad){
    $('.contact__text').html(mobile);
  } else {
    $('.contact__text').hide();
  }
});

$('.emailadress').click(function(){
  if($('.contact__text').css('display') == "none"){
    $('.contact__text').show();
    $('.contact__text').html(email);
  } else if($('.contact__text').css('display') == "block" && $('.contact__text').html() == mobile || $('.contact__text').html() == gitad){
    $('.contact__text').html(email);
  } else{
    $('.contact__text').hide();
  }
});

$('.gitadress').click(function(){
  if($('.contact__text').css('display') == "none"){
    $('.contact__text').show();
    $('.contact__text').html(gitad);
  } else if($('.contact__text').css('display') == "block" && $('.contact__text').html() == mobile|| $('.contact__text').html() == email){
    $('.contact__text').html(gitad);
  } else {
    $('.contact__text').hide();
  }
});