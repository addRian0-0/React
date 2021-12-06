import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from "../../hooks/useForm";

describe('pruebas en el use form', () => {

    const initialForm = {
        name: "addRian0-0",
        email: "addrianun@gmail.com"
    }

    test('valores iniciales del formulario ', () => {

        const { result } = renderHook(() => useForm(initialForm));
        //console.log(result.current[0])
        expect(result.current[0]).toEqual(initialForm);

    })

    test('debe cambiar los valores del formulario', () => {

        const { result } = renderHook(() => useForm(initialForm));
        const [, handleInputChange,] = result.current;
        //console.log(result.current)
        act(() => {
            handleInputChange({
                target: {
                    name: "name",
                    value: "olajeje"
                }
            });
        })

        const [formValues] = result.current;
        expect(formValues).toEqual({ ...initialForm, name: 'olajeje' });

    })

    test('debe resetear lol', () => {

        const { result } = renderHook(() => useForm(initialForm));
        const [, handleInputChange, reset ] = result.current;
        //console.log(result.current)
        act(() => {
            handleInputChange({
                target: {
                    name: "name",
                    value: "olajeje"
                }
            });
            reset();
        })

        const [formValues] = result.current;
        expect(formValues).toEqual(initialForm);

    })


})