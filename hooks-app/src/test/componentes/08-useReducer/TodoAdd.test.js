import { shallow } from "enzyme";
import { TodoAdd } from "../../../components/08-useReducer/TodoAdd";
import { demosTodo } from "../../fixtures/demoTodos";

describe('pruebas en addTodo', () => {

    const handleAddTodo = jest.fn();

    const wrapper = shallow(
        <TodoAdd
            handleAddTodo={handleAddTodo}
        />
    )

    test('snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('no debe de llamar addTodo', () => {
        
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({ preventDefault(){} });

        expect(handleAddTodo).toHaveBeenCalledTimes(0);
        
    });

    test('debe de llamar la funcion handleAddTodo', () => {
        
        const value = "Aprender react";
        wrapper.find('input').simulate('change', {
            target: {
                value,
                name: 'description'
            }
        });

        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({ preventDefault(){} });

        expect(handleAddTodo).toHaveBeenCalledTimes(1);
        expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
        expect(handleAddTodo).toHaveBeenCalledWith({
            desc: value,
            done: false,
            id: expect.any(Number)
        });
        expect(wrapper.find('input').prop('value')).toBe('');

    })
    

})
