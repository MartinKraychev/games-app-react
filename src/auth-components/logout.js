import { useNavigate } from 'react-router-dom';

export const Logout = ({userLogoutHandler}) => {
    const navigate = useNavigate()
    userLogoutHandler()
    navigate('/')
    
}