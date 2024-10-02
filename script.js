document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let isValidEmail = true;

    // Email validation
    if (!emailPattern.test(email)) {
      document.getElementById("emailError").textContent =
        "Please enter a valid email address.";
      isValidEmail = false;
    }

    // Password validation

    const PassPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    let isPassValid = true;

    if (!PassPattern.test(password)) {
      document.getElementById("passwordError").textContent =
        "Please enter atleast 8 charatcer with number, symbol, small and capital letter.";
      isPassValid = false;
    }

    // If all validations pass, proceed with form submission or further logic
    if (isValidEmail && isPassValid) {
    
      alert("Form submitted successfully!");
    }

    const eyeIcons = document.querySelectorAll(".eye-icon");
    eyeIcons.forEach((eyeIcon) => {
      eyeIcon.addEventListener("click", () => {
        const pInput = eyeIcon.parentElement.querySelector("input"); //getting parent element of eye icon and selecting the password input
        if (pInput.type === "password") {
          eyeIcon.classList.replace("bx-hide", "bx-show");
          return (pInput.type = "text");
        }
        eyeIcon.classList.replace("bx-show", "bx-hide");
        pInput.type = "password";
      });
    });
  });
