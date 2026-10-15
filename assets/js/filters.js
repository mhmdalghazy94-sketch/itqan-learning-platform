(function (root) {
  const itqan = root.Itqan || (root.Itqan = {});
  itqan.filters = {
    init(container) {
      (container || document).querySelectorAll("[data-filter-group]").forEach((group) => {
        if (group.dataset.filterReady === "true") return;
        group.dataset.filterReady = "true";
        group.addEventListener("click", (event) => {
          const button = event.target.closest("[data-filter-value]");
          if (!button || !group.contains(button)) return;
          const list = document.getElementById(group.dataset.filterTarget);
          if (!list) return;
          group.querySelectorAll("[data-filter-value]").forEach((item) => {
            const selected = item === button;
            item.classList.toggle("active", selected);
            item.setAttribute("aria-pressed", String(selected));
          });
          list.querySelectorAll("[data-filter-item]").forEach((item) => {
            item.hidden = button.dataset.filterValue !== "all" && item.dataset.category !== button.dataset.filterValue;
          });
        });
      });
    }
  };
})(window);
