const input = document.querySelector("#validation-input");
const validNumber = parseInt(input.dataset.length);
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
  switch (event.currentTarget.value.trim().length) {
    case validNumber:
      classListToChenge.replace("invalid", "valid") ||
        classListToChenge.add("valid");
      break;

    case 0:
      classListToChenge.remove("valid", "invalid");
      break;

    default:
      classListToChenge.add("invalid");
  }
}
