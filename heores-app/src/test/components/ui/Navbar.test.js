import { mount } from "enzyme"
import { MemoryRouter, useNavigate } from "react-router"
import { AuthContext } from "../../../auth/authContext"
import { Navbar } from "../../../components/ui/Navbar"
import { types } from "../../../types/types";

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate
}));


describe('pruebas en el navbar', () => {

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            name: "addRian0-0",
            logged: true
        }
    }

    const wrapper = mount(
        <MemoryRouter initialEntries={['/marvel']}>
            <AuthContext.Provider value={contextValue}>
                <Navbar />
            </AuthContext.Provider>
        </MemoryRouter>
    )

    test('debe de mostrar correctamente', () => {

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('addRian0-0');

    })

    test('debe de llamar el logout, llamar el navigate y el dispatch con los argumentos', () => {
        
        wrapper.find('button').prop('onClick')();
        expect(contextValue.dispatch).toHaveBeenCalledWith({ "type": types.logout });
        expect(mockNavigate).toHaveBeenCalledWith('/login', { replace: true })

    })
    
})
