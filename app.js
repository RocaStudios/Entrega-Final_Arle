const botonesComprar = document.querySelectorAll('.boton-comprar');

botonesComprar.forEach(boton => {
    boton.addEventListener('click', () => {
        const productoId = boton.dataset.productoId;
        console.log(`Producto ${productoId} agregado al carrito.`);
    });
});

const botonesReservar = document.querySelectorAll('.boton-reservar');

botonesReservar.forEach(boton => {
    boton.addEventListener('click', () => {
        const eventoId = boton.dataset.eventoId;
        console.log(`Reserva para el evento ${eventoId} realizada.`);
    });
});

const botonRegistro = document.querySelector('#boton-registro');

if (botonRegistro) {
    botonRegistro.addEventListener('click', (event) => {
        event.preventDefault();
        const nombre = document.getElementById('nombre').value;
        const correo = document.getElementById('correo').value;
        const contraseña = document.getElementById('contraseña').value;
        const confirmarContraseña = document.getElementById('confirmar_contraseña').value;

        console.log(`Registro: Nombre=${nombre}, Correo=${correo}`);
    });
}

const formularioCompra = document.querySelector('#formulario-compra');

if (formularioCompra) {
    formularioCompra.addEventListener('submit', (event) => {
        event.preventDefault();

        const tipoCompra = document.getElementById('tipo-compra').value;
        let detallesCompra = {};

        switch (tipoCompra) {
            case 'licor':
                detallesCompra.licor = document.getElementById('licor').value;
                break;
            case 'reserva':
                detallesCompra.cantidadPersonas = document.getElementById('cantidad-personas').value;
                detallesCompra.fechaReserva = document.getElementById('fecha-reserva').value;
                break;
            case 'evento':
                detallesCompra.tipoEvento = document.getElementById('tipo-evento').value;
                break;
            case 'boleta':
                detallesCompra.tipoBoleta = document.getElementById('tipo-boleta').value;
                break;
            default:
                break;
        }

        console.log('Detalles de la compra:', { tipoCompra, ...detallesCompra });
    });
}