import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({ todos, handleDelete, handleTodo }) => {
    return (
        <div>
            <ul className="list-group list-group-flush">
                {
                    todos.map((todo, i) => {
                        return <TodoListItem
                            todo={todo}
                            key={todo.id}
                            handleDelete={handleDelete}
                            handleTodo={handleTodo}
                            index={i}
                        />
                    })
                }
            </ul>
        </div>
    )
}
