(function (root) {
  const itqan = root.Itqan || (root.Itqan = {});
  const key = "itqan-course-progress";
  function read() {
    const value = root.localStorage.getItem(key);
    return value ? JSON.parse(value) : {};
  }
  itqan.course = {
    getProgress(courseId) { return read()[courseId] || 0; },
    setProgress(courseId, percent) {
      if (!courseId || !Number.isFinite(percent)) throw new TypeError("A course id and numeric progress are required.");
      const values = read();
      values[courseId] = Math.min(100, Math.max(0, Math.round(percent)));
      root.localStorage.setItem(key, JSON.stringify(values));
      return values[courseId];
    }
  };
})(window);
