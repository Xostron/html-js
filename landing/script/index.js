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
const image = document.querySelector(".mission_left__content");
const missionText = document.querySelector(".mission_right__content");

const observer = new IntersectionObserver(
  ([entry]) => {
    console.log("TOTAL ========\n", entry);
    if (
      entry.isIntersecting ||
      (entry.isVisible && entry.intersectionRatio >= 0.9)
    ) {
      console.log("add style");
      missionText.classList.add("mission_right__content_anim");
      image.classList.add("mission_left__content_anim");
    } else {
      console.log("remove style");
      missionText.classList.remove("mission_right__content_anim");
      image.classList.remove("mission_left__content_anim");
    }
  },
  {
    rootMargin: "0px 0px 0px 0px",
    threshold: [.8],
  }
);
const mission = document.querySelector(".mission");
observer.observe(mission);
// *************анимация cookie
const cookie = document.querySelector(".cookie");
setTimeout(() => {
  cookie.classList.remove("vis");
}, 500);
function hiddenCookie() {
  console.log("hide");
  cookie.classList.add("vis");
}
