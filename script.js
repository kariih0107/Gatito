function showMessage() {
    const message = document.getElementById('message');
    message.style.opacity = '1';
    setTimeout(() => {
        message.style.opacity = '0';
    }, 2000);
}
