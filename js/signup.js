$(document).ready(function () {

    function first() {
        $('li:first-child').click(function () {
            $(this).siblings().fadeToggle('fast');


        });

        $('li:eq(1),li:eq(2),li:eq(3)').click(function () {
            event.preventDefault();
            $(this).siblings().fadeToggle('fast');

        })
    }
    first();

    $('input').keyup(function () {
        event.preventDefault();

        var valor = $("input").val();
        console.log(valor.length);
        if (valor.length < 10 ) {
            $('#btndisabled').addClass('disabled');
            $('#btndisabled').removeClass('enabled');


        } else if (valor.length == 10 ) {
            $('#btndisabled').removeClass('disabled');
            $('#btndisabled').addClass('enabled, btn-success');
         
        }else{
            $('#btndisabled').addClass('disabled');
        }
    
       
    
    });

    /*codigo aleatorio de laboratoria*/
    // Codigo aleatorio LAB-000
    function rand_code(chars, lon) {
        code = '';
        for (x = 0; x < lon; x++) {
            rand = Math.floor(Math.random() * chars.length);
            code += chars.substr(rand, 1);
        }
        return code;
    }
    caracteres = '0123456789';
    longitud = 3;
    // Mostrando codigo aleatorio
    $('#btndisabled').click(function () {
        event.preventDefault();
        set = rand_code(caracteres, longitud);
        alert('Tu codigo LAB -' + set);
        $('#btndisabled').attr('href', 'regiter.html');
      
        
    });

    /* Mostrando codigo aleatorio*/




});