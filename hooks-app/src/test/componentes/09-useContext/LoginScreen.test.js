import { mount } from "enzyme";
import { LoginScreen } from "../../../components/09-useContext/LoginScreen";
import { UserContext } from "../../../components/09-useContext/UserContext";

describe('pruebas enn loginScreen', () => {

    const setuser = jest.fn();

    const wrapper = mount(
        <UserContext.Provider value={{ setuser }}>
            <LoginScreen />
        </UserContext.Provider>
    )

    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe ejecutar el setUser con el argumento espereado ', () => {

        wrapper.find('button').prop('onClick')();
        expect(setuser).toHaveBeenCalledWith({
            id: 123456,
            name: 'addRian0_0',
            email: 'addRian@gmail.com'
        })

    })

})
