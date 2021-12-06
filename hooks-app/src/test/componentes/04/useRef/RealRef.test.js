import { renderHook, act } from '@testing-library/react-hooks';
import { shallow } from "enzyme";
import { RealRef } from '../../../../components/04-useRef/RealRef';

describe('pruebas en realRef', () => {
    
    const wrapper = shallow( <RealRef/> );

    test('debe hacer el snapshot', () => {
       
        expect(wrapper).toMatchSnapshot();
        
    });

    test('debe mostrar el componente', () => {
        
        wrapper.find('button').simulate('click');
        expect(wrapper.find('Multiple').exists()).toBe(true);

    });

})
