(function (root) {
  const itqan = root.Itqan || (root.Itqan = {});
  itqan.authentication = {
    init(container) {
      (container || document).querySelectorAll("[data-auth-form]").forEach((form) => {
        if (form.dataset.authReady === "true") return;
        form.dataset.authReady = "true";
        form.addEventListener("submit", (event) => {
          if (!form.reportValidity()) {
            event.preventDefault();
            return;
          }
          if (form.dataset.authForm === "register") {
            const password = form.querySelector('[name="password"]');
            const confirmation = form.querySelector('[name="confirm-password"]');
            if (password && confirmation && password.value !== confirmation.value) {
              event.preventDefault();
              confirmation.setCustomValidity("كلمتا المرور غير متطابقتين.");
              confirmation.reportValidity();
              confirmation.addEventListener("input", () => confirmation.setCustomValidity(""), { once: true });
            }
          }
        });
      });
    }
  };
})(window);
