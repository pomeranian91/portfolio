$(".nav__skills").click(function () {
  document.querySelector(".skills__head").scrollIntoView(true);
});
$(".nav__project").click(function () {
  document.querySelector(".project__head").scrollIntoView(true);
});
//nav버튼 클릭 이동

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
//홈으로 버튼

$('.home__main--text2:contains("FRONT-END")').css("color", "var(--y-color)");

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
//스크롤 위치에 따른 자연스럽게 사라지는 효과

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
//타이핑 효과
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
//스킬 슬라이드, 터치 넣을까 말까 흠
