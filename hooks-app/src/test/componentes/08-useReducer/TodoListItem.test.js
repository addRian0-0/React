import { shallow } from "enzyme";
import { TodoListItem } from "../../../components/08-useReducer/TodoListItem";
import { demosTodo } from "../../fixtures/demoTodos";

describe('pruebas en un elemento de la lista', () => {

    const handleDelete = jest.fn();
    const handleTodo = jest.fn();

    const wrapper = shallow(
        <TodoListItem
            todo={demosTodo[0]}
            handleDelete={handleDelete}
            handleTodo={handleTodo}
            index={1}
        />
    );

    test('hacer match con el snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe jalar handletodo', () => {
        
        wrapper.find('p').simulate('click');
        expect(handleTodo).toHaveBeenCalledWith(demosTodo[0].id);

    })

    test('debe mostrar el texto correctamente', () => {
        
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(`2. ${demosTodo[0].desc}`)

    })   

})
