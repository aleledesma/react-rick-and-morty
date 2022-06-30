import { Link } from "react-router-dom"
import rick from "../assets/rick.png"

const Navbar = () => {
    return (
        <nav className=" bg-gray-200 flex items-center justify-evenly h-20 w-2/3 mx-auto mt-3 rounded-lg">
            <Link to='/' className="text-lg font-medium text-gray-700 hover:ring-2 hover:ring-gray-600 py-1.5 px-2.5 rounded-xl transition">Inicio</Link>
            <img src={rick} alt="Rick" className=" w-16 h-16 hover:rotate-12 hover:scale-105 transition" />
            <Link to='/personajes' className="text-lg font-medium text-gray-700 hover:ring-2 hover:ring-gray-600 py-1.5 px-2.5 rounded-xl transition">Personajes</Link>
        </nav>
    )
}

export default Navbar