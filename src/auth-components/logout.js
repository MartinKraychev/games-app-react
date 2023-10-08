import { useNavigate } from 'react-router-dom';
import { logout } from '../api/data.js';

export const Logout = ({userLogoutHandler}) => {
    const navigate = useNavigate()
    logout()
        .then(res => {
            userLogoutHandler()
            navigate('/')
        }
        )
    
}