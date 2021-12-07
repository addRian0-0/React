import { Route, Routes } from 'react-router-dom'
import { Navbar } from '../components/ui/Navbar'
import { DcSreen } from '../components/dc/DcSreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import { Hero } from '../components/hero/Hero'

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='marvel' element={<MarvelScreen />} />
          <Route path='dc' element={<DcSreen />} />
          <Route path='search' element={<SearchScreen />} />
          <Route path='hero/:heroId' element={<Hero />} />
          <Route path='/' element={<MarvelScreen />} />
        </Routes>
      </div>
    </>
  )
}
