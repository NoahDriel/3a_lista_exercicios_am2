
async function listImages(url) {
  try {
    const response = await fetch(url);
    // Resto do código permanece igual
    // ...
  } catch (error) {
    console.error("Ocorreu um erro:", error);
    return null;
  }
}
