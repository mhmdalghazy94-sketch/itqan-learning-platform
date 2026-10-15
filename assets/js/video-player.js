(function (root) {
  const itqan = root.Itqan || (root.Itqan = {});
  itqan.videoPlayer = {
    init(container) {
      (container || document).querySelectorAll("[data-video-player]").forEach((wrapper) => {
        const video = wrapper.querySelector("video");
        const button = wrapper.querySelector("[data-video-toggle]");
        if (!video || !button || button.dataset.videoReady === "true") return;
        button.dataset.videoReady = "true";
        button.addEventListener("click", async () => {
          if (video.paused) {
            try {
              await video.play();
            } catch (error) {
              button.dispatchEvent(new CustomEvent("itqan:media-error", { bubbles: true, detail: error }));
            }
          } else {
            video.pause();
          }
        });
        video.addEventListener("play", () => button.setAttribute("aria-pressed", "true"));
        video.addEventListener("pause", () => button.setAttribute("aria-pressed", "false"));
      });
    }
  };
})(window);
