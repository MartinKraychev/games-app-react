import { useNavigate } from 'react-router-dom';
import { logout } from '../api/data.js';

import { AuthContext } from '../contexts/AuthContext'
import { useContext } from 'react'

export const Logout = () => {
    const { userLogoutHandler } = useContext(AuthContext)
    const navigate = useNavigate()

    logout()
        .then(res => {
            userLogoutHandler()
            navigate('/')
        }
        )
    
}