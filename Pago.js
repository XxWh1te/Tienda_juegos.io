document.addEventListener("DOMContentLoaded", () => {
    // Recogemos los parámetros de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const juegoId = urlParams.get("id"); // Recogemos el ID del juego
    const precio = parseFloat(urlParams.get("precio")); // Asegúrate de que el precio sea un número
    const titulo = decodeURIComponent(urlParams.get("titulo")); // Decodificamos el título para que aparezca correctamente

    // Depuración para ver si se están pasando correctamente
    console.log("Parametros de la URL:", urlParams);
    console.log("Juego ID:", juegoId);
    console.log("Precio:", precio);
    console.log("Titulo:", titulo);

    // Comprobamos si los parámetros existen
    if (juegoId && precio && titulo) {
        // Mostramos el título y el precio del juego en el recibo
        document.getElementById("recibo-juego").textContent = titulo;
        document.getElementById("recibo-precio").textContent = `S/. ${precio.toFixed(2)}`; // Mostramos el precio en soles
    } else {
        console.error("Datos del juego no disponibles");
    }

    // Funcionalidad al formulario de pago
    document.getElementById('pago-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const correo = document.getElementById('correo').value;
    
    const juegoComprado = titulo;
    const metodoPago = document.querySelector('input[name="metodo-pago"]:checked').value;
    const fechaCompra = new Date().toLocaleDateString();

    document.getElementById('recibo-nombre').innerText = `${nombre} ${apellido}`;
    document.getElementById('recibo-correo').innerText = correo;
    document.getElementById('recibo-juego').innerText = juegoComprado;
    document.getElementById('recibo-precio').innerText = `S/. ${precio.toFixed(2)}`;
    document.getElementById('recibo-pago').innerText = metodoPago;
    document.getElementById('recibo-fecha').innerText = fechaCompra;

    document.getElementById('recibo').style.display = 'block';

    // --- Aquí agregamos el localStorage ---
    const compra = {
        nombre: nombre,
        apellido: apellido,
        correo: correo,
        juego: juegoComprado,
        precio: precio,
        metodoPago: metodoPago,
        fecha: fechaCompra
    };

    let historial = JSON.parse(localStorage.getItem("compras")) || [];
    historial.push(compra);
    localStorage.setItem("compras", JSON.stringify(historial));

    console.log("Compra guardada en localStorage");
    });
});
