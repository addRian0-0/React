import { mount } from "enzyme"
import { Routes, Route } from "react-router-dom";
import { MemoryRouter, useNavigate } from "react-router"
import { AuthContext } from "../../auth/authContext"
import { LoginScreen } from "../../components/login/LoginScreen";
import { types } from "../../types/types";

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate
}));

describe('pruebas en el loginScreen', () => {

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    }

    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter initialEntries={['/login']}>
                <Routes>
                    <Route path="/login" element={<LoginScreen />}/>
                </Routes>
            </MemoryRouter>
        </AuthContext.Provider>
    )

    test('debe hacer match con el snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de realizar el dispatch y la navegacion', () => {
        
        const handleClick = wrapper.find('button').prop('onClick');
        handleClick();

        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type: types.login,
            payload: { name: 'addRian0_0' }
        })

        expect(mockNavigate).toHaveBeenCalledWith('/marvel', { replace: true })

        localStorage.setItem('lastPath', '/dc');
        handleClick();

        expect(mockNavigate).toHaveBeenCalledWith('/dc', { replace: true })

    })

})
