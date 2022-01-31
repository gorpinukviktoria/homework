$('.about-items > div').on('click', function(){
    $(this).children('.about-icon').toggleClass('active');
    $(this).parent('.about-items').toggleClass('toggleBg');
    $(this).toggleClass('toggleColor');
    $(this).next('p').slideToggle(300).toggleClass('toggleColor');
})

$('.features-items > div').on ('click', function(){
    $(this).toggleClass('toggleColor-ic');
    $(this).next('p').slideToggle(300)
})