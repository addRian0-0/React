import { shallow } from "enzyme";
import GifExpertApp from "../GifExpertApp";

describe('pruebas en el componente principal de la aplicacion', () => {

    const wrapper = shallow( <GifExpertApp/> )

    test('snapshot al componente', () => {
        
        expect(wrapper).toMatchSnapshot();

    })

    test('mostrar una lista de categroias', () => {
        
        const categorias = ["Arcane", "Goku"];
        const wrapper = shallow( <GifExpertApp defaultCategories={categorias} /> )

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categorias.length);

    })
    

});