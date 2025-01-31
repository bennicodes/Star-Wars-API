const hideAllCategories = () => {
  const categoryContainers = document.querySelectorAll(".category-container");

  categoryContainers.forEach((container) => {
    container.innerHTML = "";
    container.style.display = "none";
  });
};

export default hideAllCategories;
