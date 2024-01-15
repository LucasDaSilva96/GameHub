export function setLocalStorage() {
  const storage = window.localStorage.getItem("collection");

  if (!storage) {
    return window.localStorage.setItem("collection", JSON.stringify([]));
  }
}

export function getLocalStorage() {
  return JSON.parse(window.localStorage.getItem("collection"));
}

export function pushDataToLocalStorage(data) {
  const storage = getLocalStorage();

  return window.localStorage.setItem(
    "collection",
    JSON.stringify([...storage, data])
  );
}

export function removeDataFromLocalStorage(data) {
  const storage = getLocalStorage();
  const newStorage = storage.filter((el) => el.id !== data.id);

  return window.localStorage.setItem("collection", JSON.stringify(newStorage));
}
