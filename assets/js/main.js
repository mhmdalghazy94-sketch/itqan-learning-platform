const filterButtons = document.querySelectorAll(".filter-chip");
const courseCards = document.querySelectorAll(".course-card");
const searchInput = document.querySelector("#course-search");
const emptyState = document.querySelector("#empty-state");
let activeCategory = "all";

function updateCourses() {
  const query = searchInput.value.trim().toLocaleLowerCase("ar");
  let visibleCount = 0;

  courseCards.forEach((card) => {
    const matchesCategory = activeCategory === "all" || card.dataset.category === activeCategory;
    const searchText = `${card.dataset.search} ${card.querySelector("h3").textContent}`.toLocaleLowerCase("ar");
    const matchesSearch = !query || searchText.includes(query);
    const isVisible = matchesCategory && matchesSearch;
    card.hidden = !isVisible;
    if (isVisible) visibleCount += 1;
  });

  emptyState.hidden = visibleCount > 0;
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.filter;
    filterButtons.forEach((item) => {
      const isSelected = item === button;
      item.classList.toggle("is-selected", isSelected);
      item.setAttribute("aria-pressed", String(isSelected));
    });
    updateCourses();
  });
});

searchInput.addEventListener("input", updateCourses);

const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuToggle.setAttribute("aria-label", isExpanded ? "فتح القائمة" : "إغلاق القائمة");
  siteNav.classList.toggle("is-open", !isExpanded);
});

siteNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "فتح القائمة");
    siteNav.classList.remove("is-open");
  }
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
