function showMessage() {
    const message = document.getElementById('message');
    message.style.display = 'block'; // Muestra el mensaje
    message.style.animation = 'fadeIn 1s forwards'; // Añade animación al mostrar

    // Oculta el mensaje después de 2 segundos
    setTimeout(() => {
        message.style.animation = 'fadeOut 1s forwards'; // Añade animación al ocultar
        setTimeout(() => {
            message.style.display = 'none'; // Oculta el mensaje
        }, 1000); // Espera a que termine la animación de desvanecimiento
    }, 2000); // Mensaje visible durante 2 segundos
}

// Animaciones para mostrar y ocultar el mensaje
const style = document.createElement('style');
style.innerHTML = `
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}
@keyframes fadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
}
`;
document.head.appendChild(style);
