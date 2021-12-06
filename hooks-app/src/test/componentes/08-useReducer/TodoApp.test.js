import { shallow, mount } from "enzyme";
import { TodoApp } from "../../../components/08-useReducer/TodoApp";
import { demosTodo } from "../../fixtures/demoTodos";
import { act } from "@testing-library/react";

describe('pruebas en todoApp', () => {

    const wrapper = shallow(
        <TodoApp />
    )
    Storage.prototype.setItem = jest.fn(() => {});

    test('snapshot en todoAppp', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe agregar un TODO ', () => {

        const wrapper = mount(<TodoApp />);
        act(() => {
            wrapper.find('TodoAdd').prop('handleAddTodo')(demosTodo[0]);
            wrapper.find('TodoAdd').prop('handleAddTodo')(demosTodo[1]);
        })

        expect(wrapper.find('h1').text().trim()).toBe('Todo App ( 2 )');
        expect(localStorage.setItem).toHaveBeenCalledTimes(2);

    })

    test('debe eliminar un todo', () => {
        
        wrapper.find('TodoAdd').prop('handleAddTodo')(demosTodo[0]);
        wrapper.find('TodoList').prop('handleDelete')(demosTodo[0].id);

        expect(wrapper.find('h1').text().trim()).toBe('Todo App ( 0 )');


    })
    

})
