import { shallow } from "enzyme";
import { TodoList } from "../../../components/08-useReducer/TodoList";
import { demosTodo } from "../../fixtures/demoTodos";

describe('pruebas en el todo list', () => {

    const handleDelete = jest.fn()
    const handleTodo = jest.fn()

    const wrapper = shallow(
        <TodoList
            todos={demosTodo}
            handleDelete={handleDelete}
            handleTodo={handleTodo}
        />
    )

    test('debe de mostrarse correctamente ', () => {

        expect(wrapper).toMatchSnapshot();

    })

    test('debe de tener dos todosListItem ', () => {

        expect(wrapper.find('TodoListItem').length).toBe(demosTodo.length);
        expect(wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual(expect.any(Function));

    })


})
