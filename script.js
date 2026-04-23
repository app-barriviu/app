// Esperamos a que el contenido del HTML esté cargado
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.btn-apuntar');

    btn.addEventListener('click', () => {
        // Añade o quita la clase "declinado" automáticamente
        btn.classList.toggle('declinado');

        // Cambiamos el texto dependiendo de si tiene la clase o no
        if (btn.classList.contains('declinado')) {
            btn.textContent = "Declinar esdeveniment";
        } else {
            btn.textContent = "Apuntar-m'hi";
        }
    });
});