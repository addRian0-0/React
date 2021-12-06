import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe('pruebas en addCategory', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });

    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('simular cambios en el input', () => {

        const input = wrapper.find('input');
        const value = 'Hola mundo';
        input.simulate('change', {
            target: {
                value
            }
        });

    })

    test('NO debe de postear la información con submit', () => {

        wrapper.find('form').simulate('submit', { preventDefault() { } });
        expect(setCategories).not.toHaveBeenCalled();

    })

    test('debe de llamar el SetCategories y limpiar la caja de texto', () => {

        const input = wrapper.find('input');
        const value = 'Hola mundo';
        input.simulate('change', {
            target: {
                value
            }
        });
        wrapper.find('form').simulate('submit', { preventDefault() { } });
        expect(setCategories).toHaveBeenCalled();
        expect( wrapper.find('input').prop('value') ).toBe('');

    })


})