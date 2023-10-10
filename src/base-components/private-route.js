import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'
import { useContext } from 'react'

export const PrivateRoute = () => {
    const {isAuthenticated} = useContext(AuthContext)

    if (!isAuthenticated) {
        return <Navigate to="/login" replace/>
    }

    return <Outlet />
}