import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"

export const getPokemons = (page = 0) => {
    return async (dispatch, getState) => {
        dispatch(startLoadingPokemons());
        /* Realiza peticion http */
        /* dispatch(setPokemons) */
        /* const res = await fetch(``);
        const data = await res.json(); */
        const res = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`);
        /* console.log(res); */
        dispatch(setPokemons({ pokemons: res.data.results, page: page + 1 }))

    }
}