const tabElements = document.querySelectorAll(".tab-el");
const tabContents = document.querySelectorAll(".tab-content");

const removeActiveClass = function (tags, className) {
  tags.forEach((el) => el.classList.remove(className));
};

const addActiveClass = function (el, className) {
  el.classList.add(className);
};

const addActiveToContent = function (el) {
  const activeIdEl = el.firstElementChild.getAttribute("href").split("#")[1];
  [...tabContents].filter((el) => {
    el.id === activeIdEl && el.classList.add("tab-content-active");
  });
};

tabElements.forEach((el) =>
  el.addEventListener("click", (e) => {
    e.preventDefault();
    removeActiveClass(tabElements, "tab-el-active");
    removeActiveClass(tabContents, "tab-content-active");
    addActiveClass(el, "tab-el-active");
    addActiveToContent(el);
  })
);
