import { renderHook, act } from '@testing-library/react-hooks';
import { shallow } from "enzyme";
import { Multiple } from '../../../components/03-examples/Multiple';
import { useFetch } from '../../../hooks/useFetch';

jest.mock('../../../hooks/useFetch');

describe('pruebas en el mutiple component', () => {
    
    test('debe de mostrarse correctamente', () => {

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        })

        const wrapper = shallow(<Multiple/>);
        expect(wrapper).toMatchSnapshot();
        
    })

    test('debe de mostrar la informacion', () => {
        
        useFetch.mockReturnValue({
            data: [{
                author: 'addRian0-0',
                quote: 'Quien tenga miedo de morir que no nazca'
            }],
            loading: false,
            error: null
        })

        const wrapper = shallow(<Multiple/>);
        expect(wrapper.find('.alert').exists()).toBe(false);

    })
    

})
