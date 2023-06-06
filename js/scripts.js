$(document).ready(function(){

    $('#cpf').mask('999.999.999-99', {
        placeholder: '000.000.000-00'
    });
    $('#cep').mask('00000-000', {
        placeholder: '00000-000'
    });
    


    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }

        },
        messages: {
            nome: 'Por favor, insira seu nome',
            cep: 'Este campo é obrigatório',
            email: 'Digite um E-mail válido',
            endereco: 'Este campo é obrigatório',
            cpf: 'Este campo é obrigatório',
        },
        submitHandler: function(form){
            console.log(form)
        }, invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos!`)
            }
        },
        errorClass: 'erro'
    })
})