import { shallow } from "enzyme";
import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks';

describe('pruebas en el custom hook', () => {

    const category = "Arcane";

    test('debe retornar el estado  inicial', async () => {

        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs(category));
        await waitForNextUpdate();
        const { data, loading } = result.current;

        expect(data.length).toBe(5)
        expect(loading).toBe(false);

    })

    test('debe retornar la data del state', async () => {

        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs(category));
        await waitForNextUpdate();
        const { data, loading } = result.current;

        expect(data.length).toBe(5)
        expect(loading).toBe(false);

    })

})