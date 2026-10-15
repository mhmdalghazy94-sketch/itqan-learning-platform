(function (root) {
  const itqan = root.Itqan || (root.Itqan = {});
  itqan.notifications = {
    show(message, options = {}) {
      if (typeof message !== "string" || !message.trim()) throw new TypeError("A notification message is required.");
      let region = document.querySelector("[data-notification-region]");
      if (!region) {
        region = document.createElement("div");
        region.dataset.notificationRegion = "";
        region.className = "itqan-notification-region";
        region.setAttribute("role", "status");
        region.setAttribute("aria-live", "polite");
        document.body.append(region);
      }
      const notification = document.createElement("div");
      notification.className = "itqan-notification";
      notification.textContent = message;
      region.append(notification);
      root.setTimeout(() => notification.remove(), Number(options.duration) > 0 ? Number(options.duration) : 3000);
      return notification;
    }
  };
})(window);
