(function (root) {
  const itqan = root.Itqan || (root.Itqan = {});
  itqan.validation = {
    init(container) {
      (container || document).querySelectorAll("form[data-validate]").forEach((form) => {
        if (form.dataset.validationReady === "true") return;
        form.dataset.validationReady = "true";
        form.addEventListener("submit", (event) => {
          const invalid = [...form.elements].find((field) => typeof field.checkValidity === "function" && !field.checkValidity());
          if (!invalid) return;
          event.preventDefault();
          invalid.setAttribute("aria-invalid", "true");
          invalid.reportValidity();
          invalid.addEventListener("input", () => invalid.removeAttribute("aria-invalid"), { once: true });
        });
      });
    }
  };
})(window);
