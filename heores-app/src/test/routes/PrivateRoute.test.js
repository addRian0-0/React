import { mount } from "enzyme"
import { MemoryRouter } from "react-router"
import { AuthContext } from "../../auth/authContext"
import { PrivateRoute } from "../../routers/PrivateRoute"

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    Navigate: () => <span>Saliendo...</span>
}))

describe('pruebas aki', () => {

    Storage.prototype.setItem = jest.fn()

    test('debe de mostrar el componente si esta autenticado y guardar en el localStorage', () => {

        const contextValue = {
            user: {
                name: 'addRian0-0',
                logged: true
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/']}>
                    <PrivateRoute>
                        <h1>Private component</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(wrapper.text().trim()).toBe('Private component');
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/');

    })

    test('debe de mostrar el componente si esta autenticado y guardar en el localStorage', () => {

        const contextValue = {
            user: {
                name: 'addRian0-0',
                logged: true
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/']}>
                    <PrivateRoute>
                        <h1>Saliendo...</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(wrapper.text().trim()).toBe('Saliendo...');

    })

})
