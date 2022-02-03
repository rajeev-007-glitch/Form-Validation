// Project 4

const userName = document.getElementById("userName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

const failure = document.getElementById('failure');
const success = document.getElementById('success');

let validUserName = false;
let validEmail = false;
let validPhone = false;

$('#success').hide();
$('#failure').hide();

userName.addEventListener("blur", () => {
  console.log("Name Blurred");

  // Validate name here
  let regExp = /(^[a-zA-Z_\.\-][0-9a-zA-Z_\.\-]{0,20}$)/;
  let string = userName.value;
  console.log(regExp, string);

  if (regExp.test(string)) {
    console.log("Your name is valid");
    userName.classList.remove("is-invalid");
    validUserName = true;
  } else {
    console.log("Your name is not valid");
    userName.classList.add("is-invalid");
    validUserName = false;
  }
});

email.addEventListener("blur", () => {
  console.log("Email Blurred");

  // Validate email here
  let regExp = /^([0-9a-zA-Z_\.\-]+)@(\w+)\.([a-zA-Z])/;
  let string = email.value;
  console.log(regExp, string);

  if (regExp.test(string)) {
    console.log("Your email is valid");
    email.classList.remove("is-invalid");
    validEmail = true;
  } else {
    console.log("Your email is not valid");
    email.classList.add("is-invalid");
    validEmail = false;
  }
});

phone.addEventListener("blur", () => {
  console.log("Phone Blurred");

  // Validate phone here
  let regExp = /(^[0-9]{10}$)/;
  let string = phone.value;
  console.log(regExp, string);

  if (regExp.test(string)) {
    console.log("Your phone is valid");
    phone.classList.remove("is-invalid");
    validPhone = true;
  } else {
    console.log("Your phone is not valid");
    phone.classList.add("is-invalid");
    validPhone = false;
  }
});


let submit = document.getElementById('submit');
submit.addEventListener('click', (e)=>{
  console.log('Button clicked');

  e.preventDefault();

  if(validUserName && validPhone && validEmail){
    console.log('All the entries are valid. Hence submitting the form.')
    // failure.classList.remove('show');
    // $('#failure').alert('close');
    // success.classList.add('show');
    $('#success').show();
    $('#failure').hide();
  }
  else{
    console.log('One of the all entries are not valid. Hence not submitting the form. Please fill the valid details and try again');
    // success.classList.remove('show');
    // $('#success').alert('close');
    // failure.classList.add('show');
    $('#success').hide();
    $('#failure').show();
  }

})