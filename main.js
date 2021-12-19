$('.home-hello_text_second:contains("FRONT-END")').css('color','var(--y-color)');

$(window).scroll(function(){
    var scrollHeight = $(window).scrollTop();
    console.log(scrollHeight);
    var homeY = (-1/800) * scrollHeight + 1.3;
    $('.home-box').eq(0).css('opacity', homeY);
    var homeY2 = (-1/500) * scrollHeight + 3;
    $('.home-box').eq(1).css('opacity', homeY2);
    var homeY3 = (-1/500) * scrollHeight + 4.8;
    $('.home-box').eq(2).css('opacity', homeY3);
});

var homeTyping = document.querySelector('.home-hello_text_first');
var homeText = document.querySelector('.home-hello_text_first').innerHTML;
var homeTypingSecond = document.querySelector('.home-hello_text_second');
var homeTextSecond = document.querySelector('.home-hello_text_second').innerHTML;
var homeTypingThird = document.querySelector('.home-hello_text_third');
var homeTextThird = document.querySelector('.home-hello_text_third').innerHTML;

window.addEventListener('load',function(){
    homeTyping.innerHTML = '';
    homeTypingSecond.innerHTML = '';
    homeTypingThird.innerHTML = '';
    for(let i = 0; i < homeText.length; i++){
    setTimeout(function(){
        homeTyping.innerHTML = homeTyping.innerHTML + homeText[i]
    }, i*80);
};
    for(let i = 0; i < homeTextSecond.length; i++){
    setTimeout(function(){
        homeTypingSecond.innerHTML = homeTypingSecond.innerHTML + homeTextSecond[i]
    }, (i+homeText.length)*80);
};
    for(let i = 0; i < homeTextThird.length; i++){
    setTimeout(function(){
        homeTypingThird.innerHTML = homeTypingThird.innerHTML + homeTextThird[i]
    }, (i+homeText.length+homeTextSecond.length)*80);
};
});
