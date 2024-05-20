function changeBackgroundColor(radioButton) {
  // Reset styles of all radio buttons
  var allRadioButtons = document.querySelectorAll('input[type="radio"]');
  allRadioButtons.forEach(function (button) {
    button.closest(".radio-container").style.backgroundColor = "";
    button.closest(".radio-container").style.borderColor = "";
  });

  // Apply styles to the selected radio button
  if (radioButton.checked) {
    radioButton.closest(".radio-container").style.backgroundColor =
      "rgb(240, 250, 240)";
    radioButton.closest(".radio-container").style.borderColor = "darkgreen";
  }
}

// Function to validate form
function validateForm() {
  let firstName = document.getElementById("firstName");
  let lastName = document.getElementById("lastName");
  let emailAddress = document.getElementById("emailAddress");
  let message = document.getElementById("message");
  let generalEnquiry = document.getElementById("generalEnquiry");
  let supportRequest = document.getElementById("supportRequest");
  let exampleCheck1 = document.getElementById("exampleCheck1");

  var firstNameError = document.getElementById("firstNameError");
  var lastNameError = document.getElementById("lastNameError");
  var emailAddressError = document.getElementById("emailAddressError");
  let queryTypeError = document.getElementById("queryTypeError");
  var messageError = document.getElementById("messageError");

  let isValid = true;

  // Clear previous error messages
  firstNameError.innerText = "";
  lastNameError.innerText = "";
  emailAddressError.innerText = "";
  queryTypeError.innerText = "";
  messageError.innerText = "";

  if (firstName.value.trim() === "") {
    firstName.style.borderColor = "red";
    firstNameError.innerText = "This field is required";
    firstNameError.style.color = "red";
    isValid = false;
  } else {
    firstName.style.borderColor = "darkgreen";
  }

  if (lastName.value.trim() === "") {
    lastName.style.borderColor = "red";
    lastNameError.innerText = "This field is required";
    lastNameError.style.color = "red";
    isValid = false;
  } else {
    lastName.style.borderColor = "darkgreen";
  }

  if (emailAddress.value.trim() === "") {
    emailAddress.style.borderColor = "red";
    emailAddressError.innerText = "Please enter a valid email address";
    emailAddressError.style.color = "red";
    isValid = false;
  } else {
    emailAddress.style.borderColor = "darkgreen";
  }

  if (!generalEnquiry.checked && !supportRequest.checked) {
    queryTypeError.innerText = "Please select a query type";
    queryTypeError.style.color = "red";
    isValid = false;
  } else {
    generalEnquiry.closest(".radio-container").style.borderColor = "";
    supportRequest.closest(".radio-container").style.borderColor = "";
  }

  if (message.value.trim() === "") {
    message.style.borderColor = "red";
    messageError.innerText = "This field is required";
    messageError.style.color = "red";
    isValid = false;
  } else {
    message.style.borderColor = "darkgreen";
  }

  if (!exampleCheck1.checked) {
    exampleCheck1.nextElementSibling.style.color = "red";
    isValid = false;
  } else {
    exampleCheck1.nextElementSibling.style.color = "black";
  }

  return isValid;
}

// Function to reset border color and error message when input is focused
function resetValidation(element) {
  element.style.borderColor = "";
  let errorMessage = element.nextElementSibling;
  errorMessage.innerText = "";
}
