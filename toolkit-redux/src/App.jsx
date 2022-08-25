import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementByAmount } from './store/slices/counter/counterSlice'
import './App.css'

function App () {
  const { counter } = useSelector(state => state.counter)
  const dispatch = useDispatch()

  return (
    <div className='App'>
      <h1>Vite + React</h1>
      <div className='card'>
        <p>The count is: {counter}</p>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(2))}>Increment by 2</button>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
