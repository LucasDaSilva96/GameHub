function loadApiKey() {
  return new Promise((resolve) => {
    resolve(import.meta.env.VITE_API_KEY);
  });
}

export default loadApiKey;
