import { Link } from "react-router-dom";

export default function Header(){

    return (
        <nav className="bg-gray-800 text-white py-4">
            <ul className="flex px-8 space-x-5">
                <li><Link to='/' className="hover:text-blue-500">Inicio</Link></li>
                <li><Link to='/user' className="hover:text-blue-500">Usuarios</Link></li>
            </ul>
        </nav>
        );
}