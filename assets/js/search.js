(function (root) {
  const itqan = root.Itqan || (root.Itqan = {});
  itqan.search = {
    init(container) {
      (container || document).querySelectorAll("[data-search-input]").forEach((input) => {
        const target = document.getElementById(input.dataset.searchTarget);
        if (!target || input.dataset.searchReady === "true") return;
        input.dataset.searchReady = "true";
        input.addEventListener("input", () => {
          const query = input.value.trim().toLocaleLowerCase("ar");
          target.querySelectorAll("[data-search-item]").forEach((item) => {
            item.hidden = !item.textContent.toLocaleLowerCase("ar").includes(query);
          });
        });
      });
    }
  };
})(window);
