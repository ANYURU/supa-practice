import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../contexts/auth'

function PrivateRoute() {
  const { user } = useAuth()
  console.log(user)
  return user ? <Outlet /> : <Navigate to='/' />
}

export default PrivateRoute