import { useNavigate, useLocation } from 'react-router-dom'
import queryString from 'query-string'
import { getHerosByName } from '../../helpers/getHerosByName'
import { useForm } from '../../hooks/useForm'
import { HeroCard } from '../hero/HeroCard'
import { useMemo } from 'react'

export const SearchScreen = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const { q = '' } = queryString.parse(location.search)

  const [form, handleInputChange] = useForm({
    termino: q
  })

  const { termino } = form
  const herosFilter = useMemo(() => getHerosByName(q), [q])
  //const herosFilter = getHerosByName(q)

  const handleSearch = e => {
    e.preventDefault()
    navigate(`?q=${termino}`)
  }

  return (
    <>
      <h1>Search Screen</h1>
      <hr />
      <div className='row'>
        <div className='col-5'>
          <h4>Buscar heroe </h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              type='text'
              className='form-control'
              name='termino'
              placeholder='Buscar un heroe'
              autoComplete='off'
              value={termino}
              onChange={handleInputChange}
            />
            <button className='btn btn-outline-primary mt-1' type='submit'>
              Buscar
            </button>
          </form>
        </div>

        <div className='col-7'>
          <h4>Resultados</h4>
          <hr />
          {q === '' ? (
            <div className='alert alert-info'>Buscar un heroe uwu</div>
          ) : (
            <div className='alert alert-danger'>
              No hay resultados de: {q} :(
            </div>
          )}
          {herosFilter.map(h => (
            <HeroCard key={h.id} {...h} />
          ))}
        </div>
      </div>
    </>
  )
}
