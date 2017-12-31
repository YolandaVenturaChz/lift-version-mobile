$(document).ready(function () {
     
    function first() {
        $('li:first-child').click(function () {
             $(this).siblings().fadeToggle('fast');
            $(this).css('background', ' linear-gradient(to bottom right, #530060, #e19)');
            $(this).siblings().css('background', 'none');
            
        });

        $('li:eq(1),li:eq(2),li:eq(3)').click(function () {
            event.preventDefault();
             $(this).siblings().fadeToggle('fast');
            $(this).css('background', ' linear-gradient(to bottom right, #530060, #e19)');
            $(this).siblings().css('background', 'none');
        })
    }
     first();

    $('input').keyup(function () {
         event.preventDefault();

         var valor = $("input").val();
         console.log(valor.length);
         if (valor.length < 10) {
             $('button').attr('disabled', true);
            $('button').removeClass('btn-success');
        

         } else if (valor.length == 10) {
             $('button').attr('disabled', false);
             $('button').addClass('btn-success');
         } {
            
             
         }
    });
   /*codigo aleatorio de laboratoria*/
    function rand_code(chars, lon) {
        code = '';
        for (x = 0; x < lon; x++) {
            rand = Math.floor(Math.random() * chars.length);
            code += chars.substr(rand, 1);
        }
        return code;
    }
    rand_code();

    caracteres = '0123456789';
    longitud = 3;
    /* Mostrando codigo aleatorio*/
    



});


