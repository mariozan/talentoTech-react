import { Link, useNavigate } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import { logout } from "../features/authSlice";

export default function Header(){

    const isAutheticated = useSelector(state => state.auth.isAutheticated)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(logout())
        localStorage.removeItem('sessionData')
        navigate('/login')
    }

    return (
        <nav className="bg-gray-800 text-white py-4 flex justify-between items-center">
            <ul className="flex px-8 space-x-5">
                {!isAutheticated ? null :
                (<>
                <li><Link to='/' className="hover:text-blue-500">Inicio</Link></li>
                <li><Link to='/user' className="hover:text-blue-500">Usuarios</Link></li>
                </>)
                }
                <li><Link to='/create-user' className="hover:text-blue-500">Crear Usuario</Link></li>
            </ul>
            <div className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 px-5" >
                {!isAutheticated ? 
                (<Link to='/login' className="hover:text-blue-500">Login</Link>)
                :
                (<button onClick={handleLogout} className="hover:text-blue-500">Logout</button>)
                }
            </div>
        </nav>
        );
}