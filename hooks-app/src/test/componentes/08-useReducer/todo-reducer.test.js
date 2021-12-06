import { todoReducer } from "../../../components/08-useReducer/todo-reducer"
import { demosTodo } from "../../fixtures/demoTodos";

describe('probar reducer jsjsj', () => {

    test('debe retornar el estado por defecto', () => {

        const state = todoReducer(demosTodo, {});
        expect(state).toEqual(demosTodo);

    })

    test('debe agregar un todo', () => {
        
        const newTodo = {
            id: 3,
            desc: 'Aprender ORM',
            donde: false
        }

        const action = {
            type: "add",
            payload: newTodo
        }

        const state = todoReducer(demosTodo, action);
        expect(state.length).toBe(3);
        expect(state).toEqual([...demosTodo, newTodo]);

    })
    
    
    test('debe eliminar un todo', () => {
        
        const action = {
            type: "delete",
            payload: 1
        }

        const state = todoReducer(demosTodo, action);
        expect(state.length).toBe(1);
        expect(state).toEqual([demosTodo[1]]);

    })

    test('debe marcar un toggle como completado', () => {
        
        const action = {
            type: 'toggle',
            payload: 1                              
        }

        const state = todoReducer(demosTodo, action);
        expect(state[0].done).toBe(true);

    })
    
    
    
})
