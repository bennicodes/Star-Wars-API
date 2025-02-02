const toggleMenu = () => {
  const menuButton = document.querySelector(".navbar__menu-button");
  const menu = document.querySelector(".navbar__buttons");
  const navButtons = document.querySelectorAll(".navbar__button");

  menuButton.addEventListener("click", () => {
    menu.classList.toggle("navbar__buttons--visible");
  });

  // Close menu when clicking outside of it
  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !menuButton.contains(e.target)) {
      menu.classList.remove("navbar__buttons--visible");
    }
  });

  // Close menu when clicking on a navbar button
  navButtons.forEach((button) => {
    button.addEventListener("click", () => {
      menu.classList.remove("navbar__buttons--visible");
    });
  });
};
export default toggleMenu;
