$(window).scroll(function(){
    var scrollHeight = $(window).scrollTop();
    console.log(scrollHeight);
    var homeY = (-1/870) * scrollHeight + 97/87;
    $('.home-box').eq(0).css('opacity', homeY);
    var homeY2 = (-1/500) * scrollHeight + 2.85;
    $('.home-box').eq(1).css('opacity', homeY2);
    var homeY3 = (-1/500) * scrollHeight + 24/5;
    $('.home-box').eq(2).css('opacity', homeY3);
   
    
});