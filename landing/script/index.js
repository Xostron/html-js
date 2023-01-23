// *************валидация формы
const inputs = document.querySelectorAll("input, textarea");
// подсветка error
inputs.forEach((input) => {
  input.addEventListener(
    "invalid",
    (event) => {
      input.classList.add("error");
    },
    false
  );
});
// удаление подсветки error
function resetInvalid(input) {
  input.classList.remove("error");
  console.log("asda");
}
inputs.forEach((input) => {
  input.addEventListener("input", () => resetInvalid(input), true);
});

// *************анимация page mission
// *************анимация cookie
