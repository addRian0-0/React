import { shallow } from "enzyme";
import GifGridItem from "../../components/GifGridItem"

describe("probando gifFridItem", () => {

    const title = "Un titulo";
    const url = "https://localhost/algo.jsp"
    const wrapper = shallow(<GifGridItem title={title} url={url} />)

    test('should ', () => {

        expect(wrapper).toMatchSnapshot()

    })

    test('debe tener un parrafo con el title ', () => {

        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title)

    })

    test('debe de tener la imagen igual al url y alt de los props', () => {
        
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);

    })
    
    test('debe tener la clase de animate css ', () => {
        
        const div = wrapper.find('div');
        expect(div.prop('className')).toBe("card animate__animated animate__fadeIn");

    })  

})