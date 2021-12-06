import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todo-reducer';
import { useForm } from "../../hooks/useForm";
import "./styles.css";
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

const init = () => {

    return JSON.parse(localStorage.getItem('todos')) || [];

}

export const TodoApp = () => {

    const [todo, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todo))
    }, [todo])

    const handleDelete = (todoId) => {

        const action = {
            type: 'delete',
            payload: todoId
        }

        dispatch(action);

    }

    const handleTodo = (todoId) => {

        dispatch({
            type: 'toggle',
            payload: todoId
        })

    }

    const handleAddTodo = (newTodo) => {
        dispatch({
            type: 'add',
            payload: newTodo
        })
    }

    return (
        <div>
            <h1>Todo App ( {todo.length} ) </h1>
            <hr />

            <div className="row">
                <div className="col-7" >
                    <TodoList todos={todo} handleDelete={handleDelete} handleTodo={handleTodo} />
                </div>
                <div className="col-5">
                    <TodoAdd
                        handleAddTodo={handleAddTodo}
                    />
                </div>
            </div>

        </div>
    )
}
