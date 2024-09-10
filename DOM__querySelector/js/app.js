const firstAttempt = document.querySelectorAll(".first-attempt");
firstAttempt.forEach((el) => el.classList.add("active"));

const elAll = document.querySelectorAll(".el");
[...elAll]
  .filter((el) => el.hasAttribute("data-border"))
  // .map((el) => el.setAttribute("data-el-active", ""));
  .map((el) => (el.dataset.elActive = ""));

[...elAll]
  .filter((el) => el.classList.contains("hack"))
  .map((el) => el.setAttribute("title", "hacking"));

[...elAll]
  .filter((el) => el.classList.contains("hijack"))
  .map((el) => el.removeAttribute("title"));

[...elAll]
  .filter((el) => el.classList.contains("st1") && el.classList.contains("st2"))
  .map((el) => {
    el.style.color = "red";
    el.style.fontSize = "15px";
  });

[...elAll]
  .filter((el) => el.classList.contains("attrib"))
  .map((el) => {
    el.setAttribute("data-hack-active", "");
    el.removeAttribute("data-hack-inactive");
  });

[...elAll]
  .filter((el) => el.classList.contains("last-attempt"))
  .map((el) => (el.style.visibility = "hidden"));
