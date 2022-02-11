//nav버튼 클릭 이동
$(".nav_skills").click(function () {
  document.querySelector(".skills_header").scrollIntoView(true);
});
$(".nav_project").click(function () {
  document.querySelector(".project_header").scrollIntoView(true);
});
$(".nav_contact").click(function () {
  document.querySelector(".contact_header").scrollIntoView(true);
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

//스크롤 위치에 따른 자연스럽게 사라지는 효과, 모바일 계산 다시해야함
$(window).scroll(function () {
  let scrollHeight = $(window).scrollTop();
  console.log(scrollHeight);
  let homeY = (-1 / 800) * scrollHeight + 1;
  $(".home_box").eq(0).css("opacity", homeY);
  let homeY2 = (-1 / 500) * scrollHeight + 3;
  $(".home_box").eq(1).css("opacity", homeY2);
  let homeY3 = (-1 / 500) * scrollHeight + 4.7;
  $(".home_box").eq(2).css("opacity", homeY3);
});

//타이핑 효과

window.addEventListener("load", function () {
  let homeTyping = document.querySelector(".home_main-text1");
  let homeText = document.querySelector(".home_main-text1").innerHTML;
  let homeTypingSecond = document.querySelector(".home_main-text2");
  let homeTextSecond = document.querySelector(".home_main-text2").innerHTML;
  let homeTypingThird = document.querySelector(".home_main-text3");
  let homeTextThird = document.querySelector(".home_main-text3").innerHTML;
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

// 프로젝트버튼링크
$(".project_portfolio-git").click(function () {
  window.open("https://github.com/pomeranian91/portfolio.git");
});
$(".project_portfolio-page").click(function () {
  window.open("https://pomeranian91.github.io/portfolio/");
});
$(".project_aninotepad-git").click(function () {
  window.open("https://github.com/pomeranian91/ani_notepad.git");
});
$(".project_aninotepad-page").click(function () {
  window.open("https://pomeranian91.github.io/ani_notepad/");
});

//연락처 아이콘 연동
const mobile = "010-9128-6689";
const email = "forking91@gmail.com";
const gitad = "https://github.com/pomeranian91";
const blog = "https://velog.io/@pomeranian91";
$(".mobileNum").click(function () {
  if ($(".contact_text").css("display") == "none") {
    $(".contact_text").show();
    $(".contact_text").html(mobile);
  } else if (($(".contact_text").css("display") == "block" && $(".contact_text").html() == email) || $(".contact_text").html() == gitad || $(".contact_text").html() == blog) {
    $(".contact_text").html(mobile);
  } else {
    $(".contact_text").hide();
  }
});

$(".emailadress").click(function () {
  if ($(".contact_text").css("display") == "none") {
    $(".contact_text").show();
    $(".contact_text").html(email);
  } else if (($(".contact_text").css("display") == "block" && $(".contact_text").html() == mobile) || $(".contact_text").html() == gitad || $(".contact_text").html() == blog) {
    $(".contact_text").html(email);
  } else {
    $(".contact_text").hide();
  }
});

$(".gitadress").click(function () {
  if ($(".contact_text").css("display") == "none") {
    $(".contact_text").show();
    $(".contact_text").html(gitad);
  } else if (($(".contact_text").css("display") == "block" && $(".contact_text").html() == mobile) || $(".contact_text").html() == email || $(".contact_text").html() == blog) {
    $(".contact_text").html(gitad);
  } else {
    $(".contact_text").hide();
  }
});

$(".blogadress").click(function () {
  if ($(".contact_text").css("display") == "none") {
    $(".contact_text").show();
    $(".contact_text").html(blog);
  } else if (($(".contact_text").css("display") == "block" && $(".contact_text").html() == mobile) || $(".contact_text").html() == email || $(".contact_text").html() == gitad) {
    $(".contact_text").html(blog);
  } else {
    $(".contact_text").hide();
  }
});

// 연락처 클릭 링크 이동
$(".contact_text").click(function () {
  if ($(".contact_text").html() == email) {
    window.open("mailto:forking91@gmail.com");
  }
});

$(".contact_text").click(function () {
  if ($(".contact_text").html() == gitad) {
    window.open(gitad);
  }
});
$(".contact_text").click(function () {
  if ($(".contact_text").html() == blog) {
    window.open(blog);
  }
});
