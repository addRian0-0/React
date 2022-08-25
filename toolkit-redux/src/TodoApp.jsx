import { useState } from 'react'
import { useGetTodoIDQuery, useGetTodosQuery } from './store/apis/todosAPI'

export default function TodoApp () {
  /* const { data: todos, isLoading } = useGetTodosQuery() */
  const [todoid, settodoid] = useState(1)
  const { data: todo, isLoading } = useGetTodoIDQuery(todoid)

  const nextTodo = () => {
    settodoid(todoid + 1)
  }

  const prevTodo = () => {
    settodoid(todoid - 1)
  }

  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />
      <h4>{isLoading ? 'Cargando...' : 'Listo, ya cargo jaj :D'}</h4>
      <pre>{JSON.stringify(todo)}</pre>
      <ul>
        {/* {todos.map(todo => {
          return (
            <li key={todo.id}>
              {' '}
              <strong>{todo.completed ? 'DONE' : 'PENDING'}</strong> {todo.title}
            </li>
          )
        })} */}
      </ul>
      <button onClick={prevTodo}>Prev Todo</button>
      <button onClick={nextTodo}>Next Todo</button>
    </>
  )
}
