// menu
function myFunction(){
    var navbar = document.getElementById('nav');
    navbar.classList.toggle('show');
}

// slider
var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter>4){
        counter = 1
    }
}, 5000);

// subscribe form
const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const number = document.getElementById('number');
const country = document.getElementById('country');
const TC = document.getElementById('TC');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs([name, email, number, country, TC]);
    checkLength(name, 3, 20);
    chechkNumber(number, 12);
    checkCountry(country);
});

function checkInputs(inputArr){
    inputArr.forEach(function (input){
        if(input.value.trim() === ''){
            setErrorFor(input, `${getFieldName(input)} cannot be blank`)
        } else{
            setSuccessFor(input, 'Successfull')
        }
    })
}

function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

function checkLength(name, min, max){
    if(name.value.length < min){
        setErrorFor(name, `${getFieldName(name)} must be atleast ${min} characters`)
    } else if(name.value.length > max){
        setErrorFor(name, `${getFieldName(name)} must be less than ${max} characters`)
    } else{
        setSuccessFor(name, 'Succesfull');
    }
}

function checkCountry(country){
    if(country != 'Indonesia' | 'Singapore' | 'Malaysia'){
        setErrorFor(country, `Must input one of the country`)
    }else {
        setSuccessFor(country, 'Succesfull');
    }
}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error'
}

function setSuccessFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control success'
}
