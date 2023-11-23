const formElement = document.querySelector("form.login-form");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailElement = event.target.elements.email;
  const passwordElement = event.target.elements.password;
  const emailValue = emailElement.value.trim();
  const passwordValue = passwordElement.value.trim();

  if (!emailValue || !passwordValue) {
    alert("All form fields must be filled in");
  } else {
    const formValue = {
      email: emailValue,
      password: passwordValue,
    };
    console.log(formValue);
    formElement.reset();
  }
});
