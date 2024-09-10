const ulList = document.querySelector("ul");
ulList.classList.add("menu");

ulList.firstElementChild.classList.add("first");
ulList.lastElementChild.classList.add("last");
ulList.children[2].classList.add("active");
ulList.children[2].style.color = "#fff";

const allLinks = document.querySelectorAll("li");
allLinks.forEach((li) => {
  li.setAttribute("title", `Przejdź na stronę ${li.textContent}`);
  li.firstChild.setAttribute("href", "#");
  li.addEventListener("click", elementClick);
});

function elementClick() {
  alert(`Kliknięto ${this.textContent}`);
}

const activeLink = document.querySelector(".active");
activeLink.removeEventListener("click", elementClick);
