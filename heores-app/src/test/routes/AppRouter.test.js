import { AppRouter } from "../../routers/AppRouter";
import { mount } from "enzyme";
import { AuthContext } from "../../auth/authContext";

describe('probar appRouter', () => {

    const contextValue = {
        user: {
            logged: false
        }
    }

    test('debe de mostrar el login si no esta autenticado ', () => {

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>
        )

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('h1').text().trim()).toBe('Login Screen');

    })

    test('debe de mostrar el componente de Marvel autenticado ', () => {

        const contextValue = {
            user: {
                logged: true, name: 'addRian0-0'
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>
        )

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.navbar').exists()).toBe(true);

    })

})
