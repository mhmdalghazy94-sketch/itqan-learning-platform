(function (root) {
  const itqan = root.Itqan || (root.Itqan = {});
  itqan.quiz = {
    score(form) {
      if (!(form instanceof HTMLFormElement)) throw new TypeError("A quiz form is required.");
      if (!form.reportValidity()) return null;
      const questions = [...form.querySelectorAll("[data-correct-answer]")];
      if (!questions.length) throw new Error("The quiz contains no answer keys.");
      const correct = questions.filter((question, index) => {
        const answer = new FormData(form).get(question.dataset.name || `q${index}`);
        return answer === question.dataset.correctAnswer;
      }).length;
      return { correct, total: questions.length, percent: Math.round(correct / questions.length * 100) };
    },
    init(container) {
      (container || document).querySelectorAll("[data-quiz-form]").forEach((form) => {
        if (form.dataset.quizReady === "true") return;
        form.dataset.quizReady = "true";
        form.addEventListener("submit", (event) => {
          event.preventDefault();
          const result = itqan.quiz.score(form);
          if (!result) return;
          form.dispatchEvent(new CustomEvent("itqan:quiz-complete", { bubbles: true, detail: result }));
        });
      });
    }
  };
})(window);
