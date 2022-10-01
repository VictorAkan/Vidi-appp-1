import { Link } from 'react-router-dom';
import logo from '../assets/images/vinfast-logo.png';

export const Navbar = () => {
    return (
        <nav className="p-5 px-10 flex items-center">
            <div className="nav-logo flex">
                <img className="w-10" src={logo} alt="nav-logo" />
                <Link to="/" className="text-3xl text-green-400">IDI</Link>
            </div>
            <div className="nav-links ml-auto">
                <ul className="flex space-x-8">
                    <li>
                        <Link className="hover:text-green-500" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="hover:text-green-500" to="/about">About</Link>
                    </li>
                    <li>
                        <Link className="hover:text-green-500" to="/login">Login</Link>
                    </li>
                    <li>
                        <Link className="focus:ring focus:ring-green-200 bg-green-500 hover:bg-green-400 text-white p-2 rounded-xl drop-shadow-md" to="/signup">Signup</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}