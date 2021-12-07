import { useMemo } from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { getHeroByID } from '../../helpers/getHeroById'

export const Hero = () => {
  const { heroId } = useParams()
  const navigate = useNavigate()

  const hero = useMemo(() => getHeroByID(heroId), [heroId])
  //const hero = getHeroByID(heroId)

  const handleReturn = () => {
    navigate(-1)
  }

  if (!hero) {
    return <Navigate to='/' />
  }

  const imagesPath = `/assets/${heroId}.jpg`

  return (
    <div className='row mt-5'>
      <div className='col-4'>
        <img
          className='img-thumbnail animate__animated animate__fadeInDown '
          src={imagesPath}
          alt={hero.superhero}
        />
      </div>
      <div className='col-8 animate__animated animate__fadeInUp '>
        <h3>{hero.superhero}</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <b> Alter ego: </b> {hero.alter_ego}
          </li>
          <li className='list-group-item'>
            <b> Publisher: </b> {hero.publisher}
          </li>
          <li className='list-group-item'>
            <b> First apparence: </b> {hero.first_appearance}
          </li>
        </ul>
        <h5 className='mt-3'>Characters</h5>
        <p>{hero.characters}</p>
        <button onClick={handleReturn} className='btn btn-outline-primary'>
          Regresar
        </button>
      </div>
    </div>
  )
}
