
const emailField = document.getElementById('email-field');
const inputBox = document.getElementById('input-box');
const p = document.createElement('p');
const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const valided = () =>{
    if(emailField.value.match(regEx)){
        p.innerText = 'Success';
        p.style.color = 'green';
    }
    else{
        p.innerText = 'Error!';
        p.style.color = 'red';
    }
    inputBox.appendChild(p);
}


// function ValidateEmail(inputText)
// {
// var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// if(inputText.value.match(mailformat))
// {
// alert("Valid email address!");
// document.form1.text1.focus();
// return true;
// }
// else
// {
// alert("You have entered an invalid email address!");
// document.form1.text1.focus();
// return false;
// }
// }

