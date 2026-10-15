(function (root) {
  const itqan = root.Itqan || (root.Itqan = {});
  itqan.audioPlayer = {
    init(container) {
      (container || document).querySelectorAll("[data-audio-player]").forEach((player) => {
        const audio = player.querySelector("audio");
        const button = player.querySelector("[data-audio-toggle]");
        if (!audio || !button || button.dataset.audioReady === "true") return;
        button.dataset.audioReady = "true";
        button.addEventListener("click", async () => {
          if (audio.paused) {
            try {
              await audio.play();
            } catch (error) {
              button.dispatchEvent(new CustomEvent("itqan:media-error", { bubbles: true, detail: error }));
            }
          } else {
            audio.pause();
          }
        });
        audio.addEventListener("play", () => button.setAttribute("aria-pressed", "true"));
        audio.addEventListener("pause", () => button.setAttribute("aria-pressed", "false"));
      });
    }
  };
})(window);
