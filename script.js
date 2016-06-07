$(document).ready(function() {
  $('#hideimages').click(function(){
      $('.directions').fadeOut('fast');
  });
  $('#showimages').click(function(){
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

