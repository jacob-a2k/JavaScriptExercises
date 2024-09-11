const liItems = document.querySelectorAll(".nav-el");

const removeActive = function () {
  liItems.forEach(
    (el) =>
      el.classList.contains("nav-el-active") &&
      el.classList.remove("nav-el-active")
  );
};

const addActive = function (el) {
  el.classList.add("nav-el-active");
};

liItems.forEach((el) =>
  el.addEventListener("click", (e) => {
    e.preventDefault();
    removeActive();
    addActive(el);
  })
);

console.log(liItems);
