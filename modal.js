document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal-producto");
  const modalTitulo = document.getElementById("modal-titulo");
  const modalDescripcion = document.getElementById("modal-descripcion");
  const modalPrecio = document.getElementById("modal-precio");
  const modalCerrar = document.querySelector(".modal-cerrar");
  const btnComprar = document.querySelector(".btn-jugar-modal");

  let juegoSeleccionado = null;

  document.addEventListener("click", (e) => {
    const item = e.target.closest(".juego-interactivo");
    if (item) {
      const juegoId = item.dataset.id;
      const juego = juegos[juegoId];
      if (!juego) return;

      juegoSeleccionado = juego;

      modalTitulo.textContent = juego.titulo;
      modalDescripcion.textContent = juego.descripcionTitulo;
      modalPrecio.textContent = `Precio: S/. ${juego.precio}`;
      modal.style.display = "block";
    }
  });

  modalCerrar.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });

  btnComprar.addEventListener("click", () => {
    if (!juegoSeleccionado) return;
    window.location.href = `pago.html?id=${juegoSeleccionado.id}&titulo=${encodeURIComponent(juegoSeleccionado.titulo)}&precio=${juegoSeleccionado.precio}`;
  });
});
