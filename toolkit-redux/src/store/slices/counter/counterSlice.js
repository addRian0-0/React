import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        counter: 10
    },
    reducers: {
        increment: (state) => {
            state.counter += 1
        },
        decrement: (state) => {
            state.counter--
        },
        incrementByAmount: (state, action) => {
            state.counter += action.payload
        },
    },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer