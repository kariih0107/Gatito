function showMessage() {
    const message = document.getElementById('message');
    message.style.display = 'block'; // Muestra el mensaje
    message.style.opacity = 1; // Asegura que el mensaje sea visible
    message.style.transition = 'opacity 0.5s'; // Transición suave

    // Oculta el mensaje después de 2 segundos
    setTimeout(() => {
        message.style.opacity = 0; // Desvanece el mensaje
        setTimeout(() => {
            message.style.display = 'none'; // Oculta el mensaje
        }, 500); // Espera a que termine la animación de desvanecimiento
    }, 2000); // Mensaje visible durante 2 segundos
}
