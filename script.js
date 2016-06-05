$(document).ready(function(){
  console.log("Script included!")
});

$(document).ready(function() {
  $('.myButton').click(function(){
      $('.directions').fadeOut('fast');
  });
  $('.myButton2').click(function(){
    $('.directions').fadeIn('fast');
  
  });
});

$(function () {
    $('input:checkbox').on('change', function () {
        var input = $(this).next('span');
        if (this.checked) {
            $(input).css('textDecoration', 'line-through');
        } else {
            $(input).css('textDecoration', 'none');
        }
    })
})

