(function($){
    $(function(){
        $(document).ready(function() {
            $('select').material_select();
        });
        $('.button-collapse').sideNav();

    }); // end of document ready
})(jQuery); // end of jQuery name space

var myInput = $('.my-input'),
    mySelect = $('.my-select'),
    myTr = $('.my-tr'),
    a = 0;

mySelect.on('change', function () {
    var ddd = $(this).val();


    $('#new-profession').val('');

 if($(this).val() >= 1){
     myInput.addClass('open');

     var myBtn = $('.my-btn');

     myBtn.on('click', function () {

         var text = $('#new-profession').val(),
         chenge = $(myTr[mySelect.val()-1]).find('td:last');

         if(text.length > 1 && text != ' ' && !(text*1)){
             chenge.text(text);
             myInput.removeClass('open');
             $('#new-profession').removeClass('error');

         } else {
             console.log('error');
             $('#new-profession').addClass('error');

         }
     })
 }
});
