import React from 'react'

export const TodoListItem = ({ todo, handleDelete, handleTodo, index }) => {
    return (
        <div>
            <li
                key={todo.id}
                className="list-group-item"
            >
                <p
                    className={`${todo.done && 'complete'}`}
                    onClick={() => handleTodo(todo.id)}
                >
                    {index + 1}. {todo.desc}
                </p>
                <button
                    className="btn btn-danger"
                    onClick={() => { handleDelete(todo.id) }}
                >
                    Borrar
                </button>
            </li>
        </div>
    )
}
