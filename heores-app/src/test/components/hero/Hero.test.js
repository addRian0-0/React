import { Hero } from "../../../components/hero/Hero";
import { mount } from "enzyme"
import { Routes, Route } from "react-router-dom";
import { MemoryRouter, useNavigate } from "react-router"

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate
}));

describe('pruebas en el heroScreen', () => {
    
    test('no debe mostrar el hero screen si no hay ningun hero en la consulta', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']}>
                <Routes>
                    <Route path="/hero" element={<Hero/>}/>
                    <Route path="/" element={<h1>No Hero Page</h1>}/>
                </Routes>
            </MemoryRouter>
        );

        expect(wrapper.find('h1').text().trim()).toBe('No Hero Page')
        
    })    

    test(' debe mostrar el hero screen si el paramtero existe', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Routes>
                    <Route path="/hero/:heroId" element={<Hero/>}/>
                    <Route path="/" element={<h1>No Hero Page</h1>}/>
                </Routes>
            </MemoryRouter>
        );

        expect(wrapper.find('.row').exists()).toBe(true);
        
    })    

    test('debe regresar a la pantalla anterior', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Routes>
                    <Route path="/hero/:heroId" element={<Hero/>}/>
                </Routes>
            </MemoryRouter>
        );

        wrapper.find('button').prop('onClick')();
        expect(mockNavigate).toHaveBeenCalledWith(-1);

    })

    test(' debe de mostrar el No Hero Page si no hay heroe', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider12312']}>
                <Routes>
                    <Route path="/hero/:heroId" element={<Hero/>}/>
                    <Route path="/" element={<h1>No Hero Page</h1>}/>
                </Routes>
            </MemoryRouter>
        );

        expect(wrapper.text().trim()).toBe('No Hero Page');
        
    })    

})
