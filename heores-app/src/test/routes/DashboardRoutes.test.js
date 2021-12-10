import { mount } from "enzyme";
import { DashboardRoutes } from "../../routers/DashboardRoutes";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";

describe('probar dashboardRoutes', () => {

    const contextValue = {
        user: {
            logged: true, name: 'addRian0-0'
        }
    }

    test('debe de mostrarse correctamente - /marvel', () => {

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/']}>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        )
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('h1').text().trim()).toBe('Marvel Screen');

    })

    test('debe de mostrarse correctamente - /dc', () => {

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/dc']}>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        )
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('h1').text().trim()).toBe('DC Screen');

    })

})
