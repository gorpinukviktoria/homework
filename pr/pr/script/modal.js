$('.modal-overlay').on('click',function(e){
    if($(e.target).closest('.modal').length==0){
        $(this).fadeOut()
    }
})

$('.close').on('click', function(){
    $(this).parents('.modal-overlay').fadeOut();
})

$('#modal-button').on('click', function(){
    $('.modal-overlay').fadeIn();
})


$('.about-modal').on('click',function(e){
    if($(e.target).closest('.abmod').length==0){
        $(this).fadeOut()
    }
})

$('.about-close').on('click', function(){
    $(this).parents('.about-modal').fadeOut();
})

$('#about-button').on('click', function(){
    $('.about-modal').fadeIn();
})

