
$(function(){

    $('.img-thumb li').click(function(){
         //this 부모 li중 사용자가 클릭한 li
//         //그위에 이미지 src값
        var thisSrc = $(this).children().attr('src');
        $('.main-image img').attr('src', thisSrc);
    });
});