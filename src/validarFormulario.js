function validarFormulario(event) {
    event.preventDefault();

    if (nombreInput.value === '' || cursoInput.value === '' || edadInput.value === '') {
        alert('Por favor, rellena todos los campos');
        return;
    }
}

export { validarFormulario };