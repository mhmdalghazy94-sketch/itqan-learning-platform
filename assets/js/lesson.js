(function (root) {
  const itqan = root.Itqan || (root.Itqan = {});
  function read(key) {
    const value = root.localStorage.getItem(key);
    return value ? JSON.parse(value) : [];
  }
  itqan.lesson = {
    isComplete(id) { return read("itqan-completed-lessons").includes(id); },
    setComplete(id, complete) {
      if (!id) throw new TypeError("A lesson id is required.");
      const key = "itqan-completed-lessons";
      const completed = read(key).filter((lessonId) => lessonId !== id);
      if (complete) completed.push(id);
      root.localStorage.setItem(key, JSON.stringify(completed));
      return complete;
    },
    isBookmarked(id) { return read("itqan-saved-lessons").includes(id); },
    toggleBookmark(id) {
      if (!id) throw new TypeError("A lesson id is required.");
      const key = "itqan-saved-lessons";
      const saved = read(key);
      const index = saved.indexOf(id);
      if (index < 0) saved.push(id); else saved.splice(index, 1);
      root.localStorage.setItem(key, JSON.stringify(saved));
      return index < 0;
    }
  };
})(window);
