import { Link } from "react-router-dom";

export default function Header(){

    return (
        <nav className="bg-gray-800 text-white py-4 flex justify-between items-center">
            <ul className="flex px-8 space-x-5">
                <li><Link to='/' className="hover:text-blue-500">Inicio</Link></li>
                <li><Link to='/user' className="hover:text-blue-500">Usuarios</Link></li>
                <li><Link to='/create-user' className="hover:text-blue-500">Crear Usuario</Link></li>
            </ul>
            <div className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 px-5" >
                <Link to='/login' className="hover:text-blue-500">Login</Link>
            </div>
        </nav>
        );
}