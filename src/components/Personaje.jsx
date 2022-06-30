import { Link } from "react-router-dom"

const Personaje = ({ data }) => {
    const { name, status, image, species, id } = data
    const statusStyle = {
        Alive: "h-2.5 w-2.5 bg-green-400 rounded-full mr-2",
        Dead: "h-2.5 w-2.5 bg-red-600 rounded-full mr-2",
        unknown: "h-2.5 w-2.5 bg-gray-300 rounded-full mr-2"
    }
    // console.log(style)
    return (
        <div className="flex h-48 w-custom bg-gray-500 rounded-lg">
            <img src={image} alt={name} className="w-48 rounded-l-lg" />
            <div className="w-full px-3 py-4">
                <Link to={`/personajes/${id}`}>
                    <h3 className=" text-gray-100 text-3xl font-extrabold hover:text-yellow-400">{name}</h3>
                </Link>
                <span className="flex items-center mt-4">
                    <div className={statusStyle[`${status}`]}></div>
                    <span className=" font-medium text-gray-100 text-lg">{status} - {species}</span>
                </span>
            </div>
        </div>
    )
}

export default Personaje