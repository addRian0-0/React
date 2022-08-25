import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import LoginPages from '../pages/LoginPages'
import RegisterPages from '../pages/RegisterPages'

export default function AuthRoutes () {
  return (
    <>
      <Routes>
        <Route path='login' element={<LoginPages />} />
        <Route path='register' element={<RegisterPages />} />

        <Route path='/*' element={<Navigate to='/auth/login' />} />
      </Routes>
    </>
  )
}
