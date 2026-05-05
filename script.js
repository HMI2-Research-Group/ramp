const header = document.querySelector(".site-header");

const updateHeader = () => {
  if (window.scrollY > 8) {
    header?.classList.add("is-scrolled");
  } else {
    header?.classList.remove("is-scrolled");
  }
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });
