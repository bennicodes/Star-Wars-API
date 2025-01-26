const toggleMenu = () => {
  const menuButton = document.querySelector(".navbar__menu-button");
  const menu = document.querySelector(".navbar__buttons");

  menuButton.addEventListener("click", () => {
    menu.classList.toggle("navbar__buttons--visible");
  });

  // Close menu when clicking outside of it
  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !menuButton.contains(e.target)) {
      menu.classList.remove("navbar__buttons--visible");
    }
  });
};
toggleMenu();
export default toggleMenu;
