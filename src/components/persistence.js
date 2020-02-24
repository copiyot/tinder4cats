export default (action, id) => {
  const statsString = localStorage.getItem(id);
  if (statsString) {
    const statsObject = JSON.parse(statsString);
    statsObject[action] += 1;
    localStorage.setItem(id, JSON.stringify(statsObject));
  } else {
    const stats =
      action === "likes"
        ? { likes: 1, dislikes: 0 }
        : { likes: 0, dislikes: 1 };
    localStorage.setItem(id, JSON.stringify(stats));
    // console.log(localStorage.getItem(id), id);
  }
};

