const confirm_pass = document.getElementById('conf_password');
const pass = document.getElementById('password');
const number_phone = document.getElementById('phone_number');
const email = document.getElementById('email');
const btn_create = document.getElementById('button_create');
const second_block = document.getElementById('second-block');
const new_div = document.createElement('div');
let isElement = false;

btn_create.addEventListener("click",create_account);

number_phone.addEventListener('input', () => {number_phone.value = number_phone.value.replace(/[^+\d]/g, '')})

function create_account() {
    (pass.value != confirm_pass.value) ? confirm_pass.setCustomValidity('Passwords don\'t match') :
        confirm_pass.setCustomValidity('');
}

function border_red(array) {
    for (let index = 0; index < array.length; index++) {
        array[index].style.border = '1px solid red';
    }
}

