"use strict"

document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);  

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);

        if (error === 0 ) {

        } else {
            alert('Заполните поля');
        }
    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelector('._req')

        for (let i = 0; i < formReq.length; i++) {
            const input = formReq[i];
            formRemoveError(input);

            if(input.classlist.contains('.pay_form_name')) {
                if(input.value === '') {
                    formAddError(input);
                    error++;
                }
            }
        }
        return error;
    }
    function formAddError(input) {
        input.parentElement.classlist.add('_error');
        input.classlist.add('_error');
    }
    function formRemoveError(input) {
        input.parentElement.classlist.remove('_error');
        input.classlist.remove('_error');
    }
});



let randomNumber = Math.floor(Math.random()  * 98765);
document.getElementById('random_number').innerHTML = randomNumber;



