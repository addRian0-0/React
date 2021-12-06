import { shallow } from "enzyme";
import GifGrid from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock('../../hooks/useFetchGifs');

describe('probando gifGrid', () => {

    const category = "Arcane";

    test('sacar snapshot jajaj q loco', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })

        const wrapper = shallow(<GifGrid category={category} />)
        expect(wrapper).toMatchSnapshot();

    })

    test('debe mostrar items cuando se cargan imagenes useFetchGifs', () => {

        const imgs = [{
            id: 'ABC',
            url: 'https://localhost/oli.png',
            title: 'Cualquier cosa'
        }, {
            id: 'ABC1',
            url: 'https://localhost/oli.png',
            title: 'Cualquier cosa'
        }]

        useFetchGifs.mockReturnValue({
            data: imgs,
            loading: false
        })

        const wrapper = shallow(<GifGrid category={category} />)
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe( imgs.length );

    })


})