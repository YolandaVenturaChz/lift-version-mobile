$(document).ready(function () {

    function time() {
        $("#city").delay(4000).fadeIn();
        $("#splash").delay(4001).fadeOut();
    }
    time();

    function first() {
        $('li:first-child').click(function () {
            $(this).siblings().fadeToggle('fast');


        });

        $('li:eq(1),li:eq(2),li:eq(3)').click(function () {
            event.preventDefault();
            $(this).siblings().fadeToggle('fast');

        });
    }
    first();
    /*funcion de desabilitar button*/

    $('#test').keyup(function () {
        event.preventDefault();
        
        var valor = $("#test").val();
        console.log(valor.length);
        if (valor.length < 10) {
            $('#btndisabled').addClass('disabled');
            $('#btndisabled').removeClass('enabled');

        } else if (valor.length == 10) {
            $('#btndisabled').removeClass('disabled');
            $('#btndisabled').addClass('enabled, btn-success');

        } else {
            $('#btndisabled').addClass('disabled');
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
    caracteres = '0123456789';
    longitud = 3;

    /* Mostrando codigo aleatorio de laboratoria y agregando enlace para la siguiente ventana*/

    $('#btndisabled').click(function () {
        set = rand_code(caracteres, longitud);
        alert('Tu codigo LAB -' + set);
        $('#btndisabled').attr('href', 'verifique.html');
    });



    /**ventana verifique */
    $('#test1').keyup(function () {
        event.preventDefault();

        var valor = $("#test1").val();
        console.log(valor.length);
        if (valor.length < 3) {
            $('#btndisabled1').addClass('disabled');
            $('#btndisabled1').removeClass('enabled');

        } else if (valor.length == 3) {
            $('#btndisabled1').removeClass('disabled');
            $('#btndisabled1').addClass('enabled, btn-success');
            $('#btndisabled1').attr('href', 'regiter.html');

        } else {
            $('#btndisabled1').addClass('disabled');
        }

    });

    /**ventana regiter */

    var $email = $('#laboratoria');

    //asociando eventos a los inputs
    $email.on('input', function () {
        //console.log(event.target.value);  
    })


 //$('#laboatoria').keyup(function () {
    event.preventDefault();

    

});