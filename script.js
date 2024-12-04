const confirm_pass = document.getElementById('conf_password');
const pass = document.getElementById('password');
const btn_create = document.getElementById('button_create');
const second_block = document.getElementById('second-block');
const new_div = document.createElement('div');
let isElement = false;

btn_create.addEventListener("click",create_account);

function create_account() {
    if (!isElement) {
        second_block.appendChild(new_div);
        isElement = true;
    }
    if (pass.value == '') {
        new_div.innerText = '*Enter password';
        border_red([pass,confirm_pass]);
        new_div.style.color = 'red';
    } 
    else if (pass.value != confirm_pass.value) {
        new_div.innerText = '*Passwords don\'t match';
        border_red([pass,confirm_pass]);
        new_div.style.color = 'red';
    }
    else {
        pass.style = '';
        confirm_pass.style = '';
        second_block.removeChild(new_div);
        isElement = false;
    }
}

function border_red(array) {
    for (let index = 0; index < array.length; index++) {
        array[index].style.border = '1px solid red';
    }
}

