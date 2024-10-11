function togglePasswordVisibility() {
  const passwordInput = document.getElementById("password");
  const eyeButton = document.querySelector(".eye");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeButton.classList.add("eye-closed");
  } else {
    passwordInput.type = "password";
    eyeButton.classList.remove("eye-closed");
  }
}
