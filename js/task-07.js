const inputOfSizeControl = document.querySelector("#font-size-control");

inputOfSizeControl.addEventListener("input", changeTextSize);

function changeTextSize(event) {
  return (document.querySelector(
    "#text"
  ).style.fontSize = `${event.currentTarget.value}px`);
}
