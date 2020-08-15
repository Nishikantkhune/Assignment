// Get the Input Fields

let nameElement = document.querySelector('#name');
let lastElement = document.querySelector('#lastname');
let classElement = document.querySelector('#class');
let yearofpassingElement = document.querySelector('#yearofpassing');
let percentageElement = document.querySelector('#percentage');

// Get the Error Message Elements

let nameErrorElement = document.querySelector('#name_error');
let lastnameErrorElement = document.querySelector('#lastname_error');
let classErrorElement =document.querySelector('#class_error');
let yearofpassingErrorElement = document.querySelector('#yearofpassing_error');
let percentageErrorElement = document.querySelector('#percentage_error');

let message = '';

// Blur Events for All the Fields

//Name
nameElement.addEventListener('blur',function(){
    if(nameElement.value !== ''){
        clearErrorMessage(nameElement,nameErrorElement);
    }
})

// LastName
lastElement.addEventListener('blur',function () {
    if(lastElement.value !== ''){
        clearErrorMessage(lastElement,lastnameErrorElement)
    }
})

// Class
classElement.addEventListener('blur',function () {
    if(classElement.value !== ''){
        clearErrorMessage(classElement,classErrorElement)
    }
})

yearofpassingElement.addEventListener('blur',function () {
    if(yearofpassingElement.value !== ''){
        clearErrorMessage(yearofpassingElement,yearofpassingErrorElement)
    }
});

percentageElement.addEventListener('blur',function () {
    if(percentageElement.value !== ''){
        clearErrorMessage(percentageElement,percentageErrorElement)
    }
});

// Form Validation
let validate = () => {
    let isValid = true;

    // Required User Name Validation
    if(nameElement.value === ''){
        message = 'Name is Required';
        displayErrorMessage(nameElement,nameErrorElement,message);
        isValid = false;
        return false;
    }

    // Name RegExp Validation
    if(!nameElement.value.match(/^[A-Za-z]\w{0,19}$/)){
        message = 'Name Accepts only alphabets and type max 20 char';
        displayErrorMessage(nameElement,nameErrorElement,message);
        isValid = false;
        return false;
    }
    //lastname
    if(lastElement.value === ''){
        message = 'Name is Required';
        displayErrorMessage(lastElement,lastnameErrorElement,message);
        isValid = false;
        return false;
    }
    // lastname RegExp Validation
    if(!lastElement.value.match(/^[A-Za-z]\w{0,19}$/)){
        message = 'lastName Accepts only alphabets and type max 20 char';
        displayErrorMessage(lastElement,lastnameErrorElement,message);
        isValid = false;
        return false;
    }
    // class RegExp Validation
    if(!classElement.value.match(/^[0-9a-zA-Z]+$/)){
        message='class Accepts only number and alphabets';
        displayErrorMessage(classElement,classErrorElement,message);
        isValid = false;
        return false;
    }

    //year of passing validation
    if(!yearofpassingElement.value.match(/^(194[5-9]|19[5-9]\d|200\d|201[0-7])$/)){
        message='enter valid year';
        displayErrorMessage(yearofpassingElement,yearofpassingErrorElement,message);
        isValid = false;
        return false;
    }
    //percentage validation
    if(!percentageElement.value.match(/^(100(\.0{1,2})?|[1-9]?\d(\.\d{1,2})?)$/)){
    message = 'Accept only upto 100%';
    displayErrorMessage(percentageElement,percentageErrorElement,message);
    isValid = false;
    return false
    }

    if(isValid){
        alert('Form Submitted Successfully');
        return true;
    }
    else{
        $('[id$=btn]'). attr("disabled", "disabled")
    }
};


// display Error Message

let displayErrorMessage = (inputElement,errorElement,message) => {
    inputElement.style.backgroundColor = 'lightsalmon';
    inputElement.style.border = '1px solid red';
    inputElement.style.boxShadow = '0 0 10px red';
    errorElement.textContent = message;
    errorElement.style.color = 'red';
};

// clear Error Messages

let clearErrorMessage = (inputElement,errorElement) => {
    inputElement.style.backgroundColor = 'lightgreen';
    inputElement.style.border = '1px solid green';
    inputElement.style.boxShadow = '0 0 10px green';
    errorElement.textContent = '';
};