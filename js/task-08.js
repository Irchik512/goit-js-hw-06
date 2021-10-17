const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", vilidationOfLoginForm);

function vilidationOfLoginForm(event) {
  event.preventDefault();
  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;
  const formData = {
    email,
    password,
  };
  if (email && password !== "") {
    loginForm.reset();
    console.log(formData);
    return;
  }
  alert("Для авторизації користувача потрібно заповнити усі поля!");

  //   const loginFormData = new FormData(event.currentTarget);
  //   loginFormData.forEach((value, name) => {
  //     console.log(`onLoginFormSubmit - name: ${name} value: ${value}`);
  //   });
}
