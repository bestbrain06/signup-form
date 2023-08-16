const form = document.getElementById("form");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");

// show error function
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form__control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// show success function

function showSuccess(input) {
  formControl = input.parentElement;
  formControl.className = "form__control success";
}

// checking for valid email

function isValidEmail(email) {
  const re = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
  return re.test(email);
}

// checking for valid first name

function isValidPassword(password) {
  const regpassword = /^[\w@-]{8,20}$/;
  return regpassword.test(password);
}

// adding event listeners on the form element
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (firstName.value === "") {
    showError(firstName, "First Name cannot be empty");
  } else {
    showSuccess(firstName);
  }

  if (lastName.value === "") {
    showError(lastName, "Last Name cannot be empty");
  } else {
    showSuccess(lastName);
  }

  if (email.value === "") {
    showError(email, "Email cannot be empty");
  } else if (!isValidEmail(email.value)) {
    showError(email, "Looks like this is not an email");
  } else {
    showSuccess(email);
  }

  if (password.value === "") {
    showError(password, "Password cannot be empty");
  } else if (!isValidPassword(password.value)) {
    showError(password, "Must be between 8 - 20 characters");
  } else {
    showSuccess(password);
  }
});
