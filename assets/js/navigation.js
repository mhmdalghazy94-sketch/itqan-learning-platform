(function (root) {
  const itqan = root.Itqan || (root.Itqan = {});
  itqan.navigation = {
    init(container) {
      (container || document).querySelectorAll("[data-nav-toggle]").forEach((button) => {
        const nav = document.getElementById(button.getAttribute("aria-controls"));
        if (!nav || button.dataset.navReady === "true") return;
        button.dataset.navReady = "true";
        button.addEventListener("click", () => {
          const open = button.getAttribute("aria-expanded") !== "true";
          button.setAttribute("aria-expanded", String(open));
          nav.dataset.open = String(open);
        });
        nav.addEventListener("click", (event) => {
          if (!event.target.closest("a")) return;
          button.setAttribute("aria-expanded", "false");
          nav.dataset.open = "false";
        });
      });
    }
  };
})(window);
