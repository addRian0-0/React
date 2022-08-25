import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from './store/slices/pokemon/thunks'

export default function PokemonApp () {
  const { page, pokemons, isLoading } = useSelector(state => state.pokemons)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPokemons())
  }, [])

  return (
    <>
      <h1>Pokemon App</h1>
      <span>{isLoading ? 'Cargando...' : 'Listo, ya cargo jaj :D'}</span>
      <hr />
      <ul>
        {pokemons.map(p => {
          return <li key={p.name}>{p.name}</li>
        })}
      </ul>

      <button
        disabled={isLoading}
        onClick={() => dispatch(getPokemons(page))}
      >
        Siguiente pagina ({page})
      </button>
    </>
  )
}
