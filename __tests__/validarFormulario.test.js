import { validarFormulario } from '../src/validarFormulario';

test("should return alert('Por favor, rellena todos los campos') if we pass ' ' " , () => {
    let result = validarFormulario('');
    expect(result).toBe( alert('Por favor, rellena todos los campos'))
})