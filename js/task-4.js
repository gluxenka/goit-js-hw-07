const formElement = document.querySelector("form.login-form");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  // todo
  const emailElement = event.target.elements.email;
  const passwordElement = event.target.elements.password;

  const email = emailElement.value.trim();
  const password = passwordElement.value.trim();

  if (!email || !password) {
    alert("All form fields must be filled in");
    return;
  }

  console.log({ email, password });

  formElement.reset();
});
