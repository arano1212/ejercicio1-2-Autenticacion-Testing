import { Routes, Route, Navigate } from 'react-router-dom'
import { Home, Login, Signup } from '@/pages'
import { useAuthContext } from '@/hooks/useAuth'

const RoutesIndex = () => {
  const { isAuth } = useAuthContext()

  return (
    <>
      <Routes>
        <Route
          path='/'
          element={isAuth ? <Home /> : <Navigate to='/login' />}
        />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>

    </>
  )
}

export default RoutesIndex
