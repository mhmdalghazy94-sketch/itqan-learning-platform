(function (root) {
  const itqan = root.Itqan || (root.Itqan = {});
  itqan.progress = {
    init(container) {
      (container || document).querySelectorAll("[data-progress-value]").forEach((bar) => {
        const value = Number(bar.dataset.progressValue);
        if (!Number.isFinite(value)) return;
        const percent = Math.min(100, Math.max(0, value));
        bar.style.width = `${percent}%`;
        bar.setAttribute("role", "progressbar");
        bar.setAttribute("aria-valuemin", "0");
        bar.setAttribute("aria-valuemax", "100");
        bar.setAttribute("aria-valuenow", String(percent));
      });
    }
  };
})(window);
