  // JavaScript code
  document.addEventListener("DOMContentLoaded", function () {
    const filterOptions = document.getElementById("portfolio-filters");
    const portfolioItems = document.querySelectorAll(".portfolio-item");

    filterOptions.addEventListener("click", function (event) {
      if (event.target.tagName === "LI") {
        const selectedCategory = event.target.dataset.filter;

        portfolioItems.forEach((item) => {
          if (selectedCategory === "all" || item.classList.contains(selectedCategory)) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        });

        // Change the active class on the clicked filter option
        const activeFilter = document.querySelector(".filter-active");
        activeFilter.classList.remove("filter-active");
        event.target.classList.add("filter-active");
      }
    });
  });