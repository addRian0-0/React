import { shallow, configure } from 'enzyme';
import { HookApp } from "../HookApp";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

configure({ adapter: new Adapter() });

describe('Probar el entorno de configuracion de setupTest', () => {

    const wrapper = shallow(<HookApp />)

    test('hacer snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })

})