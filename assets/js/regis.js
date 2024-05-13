let createAccount = document.querySelector("#create-account");
createAccount.addEventListener("click", function () {
  let logForm = document.querySelector(".login-form");
  logForm.classList.add("d-none");
  let signForm = document.querySelector(".sign-form");
  signForm.classList.toggle("d-none");
});

let haveAccount = document.querySelector("#have-account");
haveAccount.addEventListener("click", function () {
  let logForm = document.querySelector(".login-form");
  logForm.classList.toggle("d-none");
  let signForm = document.querySelector(".sign-form");
  signForm.classList.toggle("d-none");
});

document.querySelectorAll(".eye-btn").forEach(function (button) {
  button.addEventListener("click", function (event) {
    const input = button.previousElementSibling;
    if (input.type === "password") {
      input.type = "text";
    } else {
      input.type = "password";
    }
  });
});
