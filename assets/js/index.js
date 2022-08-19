{
  const nav = document.getElementById("nav");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
      console.log("We are going down");
      nav.classList.add("portfolio-header--hidden");
    } else {
      nav.classList.remove("portfolio-header--hidden");
    }
    lastScrollY = window.scrollY;
  });
}
