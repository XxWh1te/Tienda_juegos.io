document.addEventListener("DOMContentLoaded", () => {
  if (!window.juegos) {
    console.error("No se encontraron los juegos.");
    return;
  }

  const contenedor = document.getElementById("catalogo-juegos");
  if (!contenedor) return;

  Object.values(juegos).forEach(juego => {
    const item = document.createElement("div");
    item.className = "juego-interactivo";
    item.dataset.id = juego.id;

    item.innerHTML = `
      <img src="${juego.imagen}" alt="${juego.titulo}" style="width: 200px; border-radius: 10px;">
      <h3>${juego.titulo}</h3>
      <p>S/. ${juego.precio}</p>
    `;

    contenedor.appendChild(item);
  });
});
