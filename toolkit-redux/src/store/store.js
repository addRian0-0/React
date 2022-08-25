import { configureStore } from '@reduxjs/toolkit'
import { todosApi } from './apis/todosAPI'
import counterSlice from './slices/counter/counterSlice'
import pokemonSlice from './slices/pokemon/pokemonSlice'

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        pokemons: pokemonSlice,

        [todosApi.reducerPath]: todosApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().
        concat(todosApi.middleware)
})