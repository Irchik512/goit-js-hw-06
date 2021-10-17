const input = document.querySelector("#validation-input");

input.addEventListener("blur", isValidInputValue2);

// Якщо не потрыбно вертати в почакове положеня......
// function isValidInputValue(event) {
//   event.currentTarget.value.length === 6
//     ? input.classList.replace("invalid", "valid") ||
//       input.classList.add("valid")
//     : input.classList.replace("valid", "invalid") ||
//       input.classList.add("invalid");

//   return console.log(event.currentTarget.value.length);
// }

function isValidInputValue2(event) {
  let classListToChenge = input.classList;
  switch (event.currentTarget.value.length) {
    case 6:
      classListToChenge.replace("invalid", "valid") ||
        classListToChenge.add("valid");
      break;

    case 0:
      classListToChenge.remove("valid", "invalid");
      break;

    default:
      classListToChenge.replace("valid", "invalid") ||
        classListToChenge.add("invalid");
  }
}
