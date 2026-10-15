(function (root) {
  const itqan = root.Itqan || (root.Itqan = {});
  itqan.exam = {
    init(container) {
      (container || document).querySelectorAll("[data-exam-minutes]").forEach((exam) => {
        if (exam.dataset.examReady === "true") return;
        const minutes = Number(exam.dataset.examMinutes);
        const display = exam.querySelector("[data-exam-timer]");
        if (!Number.isFinite(minutes) || minutes <= 0 || !display) return;
        exam.dataset.examReady = "true";
        let remaining = Math.round(minutes * 60);
        const render = () => {
          display.textContent = `${String(Math.floor(remaining / 60)).padStart(2, "0")}:${String(remaining % 60).padStart(2, "0")}`;
        };
        render();
        const timer = root.setInterval(() => {
          remaining -= 1;
          render();
          if (remaining <= 0) {
            root.clearInterval(timer);
            exam.dispatchEvent(new CustomEvent("itqan:exam-timeout", { bubbles: true }));
          }
        }, 1000);
      });
    }
  };
})(window);
