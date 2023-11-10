const inputs = document.querySelectorAll("form input"),
  btnVerify = document.querySelector(".btn_verify");

window.addEventListener("load", () => inputs[0].focus());

inputs.forEach((input, index1) => {
  input.addEventListener("keyup", (e) => {
    const currentInput = input,
      nextInput = input.nextElementSibling,
      prevInput = input.previousElementSibling;
    // console.log(currentInput);
    // console.log(nextInput);
    // console.log(prevInput);

    if (input.value.length > 1) {
      input.value = "";
      return;
    }

    console.log(nextInput);

    if (
      nextInput &&
      nextInput.hasAttribute("disabled") &&
      currentInput.value !== ""
    ) {
      nextInput.removeAttribute("disabled");
      nextInput.focus();
    }

    // console.log(e.key);
    if (e.key === "Backspace") {
      inputs.forEach((input, index2) => {
        // console.log(index1, index2);
        if (index1 <= index2 && prevInput) {
          input.setAttribute("disabled", true);
          prevInput.focus();
        }
      });
    }

    if (!inputs[3].disabled && inputs[3].valus != "") {
      btnVerify.classList.add("active");
    } else {
      btnVerify.classList.remove("active");
    }
  });
});
